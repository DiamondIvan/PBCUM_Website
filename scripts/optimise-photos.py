#!/usr/bin/env python3
"""
optimise-photos.py — make photographs in public/ safe to ship.

Photographs arrive from phones and cameras at sizes meant for printing, and
often with the wrong extension. Three things have gone wrong on this site
already, each of which this script catches:

  * HEIC files renamed .png. No browser displays HEIC, so they are simply
    broken images on the live site — and nothing warns you, because the build
    only ever sees a filename.
  * JPEG files renamed .png. Browsers sniff the content and cope, but the
    server sends Content-Type from the extension, so it advertises the wrong
    type to caches and image proxies.
  * 6000x4000 originals displayed at a few hundred pixels. One 相声组 photo was
    16 MB on its own; the folder was 91 MB before it was processed. The phone
    still has to decode every pixel, which is what makes a gallery stutter.

Originals are never destroyed. Each one is moved to photo-originals/ (outside
public/, so it is never deployed, and gitignored, so the repository does not
carry it) before a web-sized copy is written in its place.

    pip install pillow pillow-heif
    python scripts/optimise-photos.py --check      # report only, changes nothing
    python scripts/optimise-photos.py              # process public/
    python scripts/optimise-photos.py public/qzh   # process one folder

--check exits non-zero when it finds anything, so it can gate a commit.

Logos are skipped. They are line art with transparency, and flattening them
onto a white JPEG background would wreck them — see SKIP below.
"""

from __future__ import annotations

import argparse
import os
import shutil
import sys

MAX_WIDTH = 1600      # generous for full-bleed use and 2x lightboxes
QUALITY = 82
ORIGINALS = "photo-originals"

# Paths containing any of these are left alone: transparent line art, and
# anything already sized deliberately.
SKIP = ("_logos/", "logo", "favicon", "/fonts/")

PHOTO_EXT = (".jpg", ".jpeg", ".png", ".heic", ".heif", ".webp", ".tif", ".tiff")


def sniff(path: str) -> str:
    """Real format from the file's own bytes, not its name."""
    with open(path, "rb") as fh:
        head = fh.read(16)
    if head.startswith(b"\xff\xd8\xff"):
        return "JPEG"
    if head.startswith(b"\x89PNG"):
        return "PNG"
    if head.startswith(b"GIF8"):
        return "GIF"
    if head[:4] == b"RIFF" and head[8:12] == b"WEBP":
        return "WEBP"
    if b"ftyp" in head:
        return "HEIC"
    return "?"


def problems(path: str, im_size, real: str) -> list[str]:
    ext = os.path.splitext(path)[1].lower()
    found = []
    if real == "HEIC":
        found.append("HEIC — will not display in any browser")
    elif real == "JPEG" and ext not in (".jpg", ".jpeg"):
        found.append(f"JPEG bytes named {ext}")
    elif real == "PNG" and ext != ".png":
        found.append(f"PNG bytes named {ext}")
    if im_size and im_size[0] > MAX_WIDTH:
        found.append(f"{im_size[0]}px wide (max {MAX_WIDTH})")
    if os.path.getsize(path) > 600_000:
        found.append(f"{os.path.getsize(path)/1024:.0f} KB")
    return found


def walk(root: str):
    for dirpath, _, names in os.walk(root):
        for n in sorted(names):
            p = os.path.join(dirpath, n).replace(os.sep, "/")
            if not p.lower().endswith(PHOTO_EXT):
                continue
            if any(s in p.lower() for s in SKIP):
                continue
            yield p


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("root", nargs="?", default="public")
    ap.add_argument("--check", action="store_true", help="report only")
    args = ap.parse_args()

    try:
        from PIL import Image, ImageOps
        import pillow_heif

        pillow_heif.register_heif_opener()
    except ImportError:
        sys.exit("missing dependencies — run: pip install pillow pillow-heif")

    flagged = before = after = 0
    renamed: list[tuple[str, str]] = []
    for path in walk(args.root):
        real = sniff(path)
        try:
            size = Image.open(path).size
        except Exception:
            size = None

        issues = problems(path, size, real)
        if not issues:
            continue
        flagged += 1
        print(f"  {path}")
        print(f"      {'; '.join(issues)}")
        if args.check:
            continue

        # Preserve the original before touching anything.
        rel = os.path.relpath(path, args.root).replace(os.sep, "/")
        keep = os.path.join(ORIGINALS, os.path.basename(args.root.rstrip("/")), rel)
        os.makedirs(os.path.dirname(keep), exist_ok=True)
        if not os.path.exists(keep):
            shutil.copy2(path, keep)

        b = os.path.getsize(path)
        im = ImageOps.exif_transpose(Image.open(path))
        # Keep transparency as PNG; flattening it onto white would ruin cut-outs.
        # But test the channel rather than the mode: photographs exported as
        # RGBA carry a fully-opaque alpha that is never used, and keeping those
        # as PNG costs several times the size of the same image as JPEG.
        alpha = False
        if im.mode in ("RGBA", "LA") or "transparency" in im.info:
            alpha = im.convert("RGBA").getchannel("A").getextrema()[0] < 255
        w, h = im.size
        if w > MAX_WIDTH:
            im = im.resize((MAX_WIDTH, round(h * MAX_WIDTH / w)), Image.LANCZOS)

        out = os.path.splitext(path)[0] + (".png" if alpha else ".jpg")
        if alpha:
            im.save(out, "PNG", optimize=True)
        else:
            im.convert("RGB").save(out, "JPEG", quality=QUALITY, optimize=True, progressive=True)
        # Compare with normcase: on Windows and macOS '.JPG' and '.jpg' are the
        # same file, so a plain string comparison would delete the file that was
        # just written. normcase is a no-op on Linux, where they really differ.
        if os.path.normcase(out) != os.path.normcase(path):
            os.remove(path)

        # Only a real rename counts. On Windows, saving '.jpg' over an existing
        # '.JPG' writes into that file and keeps its original name, so comparing
        # the intended output name would report renames that never happened.
        if os.path.normcase(out) != os.path.normcase(path):
            renamed.append((path, out))

        a = os.path.getsize(out)
        before += b
        after += a
        print(f"      -> {os.path.basename(out)}  {b/1024:.0f} KB -> {a/1024:.0f} KB")

    if not flagged:
        print(f"{args.root}: nothing to do — every photo is web-ready.")
        return
    if args.check:
        print(f"\n{flagged} file(s) need processing. Run without --check to fix.")
        print("Any renamed file will need its path updated where it is referenced.")
        sys.exit(1)
    print(f"\n{flagged} file(s): {before/1048576:.1f} MB -> {after/1048576:.1f} MB")
    print(f"Originals kept in {ORIGINALS}/ — back them up; they are the only copies.")
    print("If any file changed extension, update the paths that reference it.")
    if renamed:
        print()
        print(f"{len(renamed)} file(s) changed name. Case matters: Netlify serves")
        print("from Linux even though Windows does not care, so a .JPG reference")
        print("pointing at a .jpg file is a 404 in production and fine locally.")
        for a, b in renamed:
            print(f"  {os.path.basename(a)}  ->  {os.path.basename(b)}")


if __name__ == "__main__":
    main()
