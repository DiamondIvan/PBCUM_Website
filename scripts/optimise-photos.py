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
# Capping width alone lets a portrait photo through at twice the pixels of a
# landscape one: 1600x1067 is 1.7 MP, but 1600x2133 is 3.4 MP, and the file is
# several times larger for a picture shown no bigger on the page. 社服组 was
# 58 portrait shots out of 101 and the folder reached 51 MB. This is the same
# pixel budget as a 1600px-wide landscape frame, applied whichever way up the
# photograph happens to be.
MAX_PIXELS = 1600 * 1200   # 1.92 MP
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


def target_size(w: int, h: int) -> tuple[int, int] | None:
    """Dimensions to resize to, or None when the photo is already small enough.

    Two limits, both applied: no wider than MAX_WIDTH, and no more than
    MAX_PIXELS in total. The second is what catches portrait photographs, which
    the width limit alone lets through at double the pixel count.
    """
    scale = 1.0
    if w > MAX_WIDTH:
        scale = MAX_WIDTH / w
    if w * h * scale * scale > MAX_PIXELS:
        scale = (MAX_PIXELS / (w * h)) ** 0.5
    # Ignore a shave of a few percent. Without this a 1600x1201 photo is "over
    # budget" by one row of pixels and gets rewritten for nothing — and because
    # rewriting means re-encoding, near-miss files would churn on every run.
    if scale > 0.97:
        return None
    return max(1, round(w * scale)), max(1, round(h * scale))


def problems(path: str, im_size, real: str) -> tuple[list[str], list[str]]:
    """(actionable, advisory).

    Actionable means re-processing will fix it. Advisory means the file is
    already as small as this script can make it and is merely still large —
    dense outdoor photographs compress poorly however they are encoded. The two
    are kept apart so --check can gate a commit on real faults without failing
    forever on a handful of leafy hillsides that are already correct.
    """
    ext = os.path.splitext(path)[1].lower()
    actionable, advisory = [], []
    if real == "HEIC":
        actionable.append("HEIC — will not display in any browser")
    elif real == "JPEG" and ext not in (".jpg", ".jpeg"):
        actionable.append(f"JPEG bytes named {ext}")
    elif real == "PNG" and ext != ".png":
        actionable.append(f"PNG bytes named {ext}")
    if im_size:
        w, h = im_size
        want = target_size(w, h)
        if want:
            actionable.append(f"{w}x{h} ({w*h/1_000_000:.1f} MP) -> {want[0]}x{want[1]}")
    if os.path.getsize(path) > 600_000:
        advisory.append(f"{os.path.getsize(path)/1024:.0f} KB")
    return actionable, advisory


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
    still_large: list[tuple[str, str]] = []
    for path in walk(args.root):
        real = sniff(path)
        try:
            size = Image.open(path).size
        except Exception:
            size = None

        actionable, advisory = problems(path, size, real)
        if not actionable:
            if advisory:
                still_large.append((path, advisory[0]))
            continue
        flagged += 1
        print(f"  {path}")
        print(f"      {'; '.join(actionable + advisory)}")
        if args.check:
            continue

        # Preserve the original before touching anything.
        rel = os.path.relpath(path, args.root).replace(os.sep, "/")
        keep = os.path.join(ORIGINALS, os.path.basename(args.root.rstrip("/")), rel)
        os.makedirs(os.path.dirname(keep), exist_ok=True)
        if not os.path.exists(keep):
            shutil.copy2(path, keep)

        b = os.path.getsize(path)
        # Always read from the preserved original when there is one. Re-running
        # this script is expected — limits change, new photos arrive — and
        # re-encoding an already-encoded JPEG stacks a second round of loss on
        # a file for no gain. The original is the only lossless starting point,
        # so every run produces the same result rather than a slightly worse one.
        source = keep if os.path.exists(keep) else path
        # An original saved under a stale extension (a .heic that became .jpg on
        # an earlier run) still opens fine — the decoder reads the bytes.
        im = ImageOps.exif_transpose(Image.open(source))
        # Keep transparency as PNG; flattening it onto white would ruin cut-outs.
        # But test the channel rather than the mode: photographs exported as
        # RGBA carry a fully-opaque alpha that is never used, and keeping those
        # as PNG costs several times the size of the same image as JPEG.
        alpha = False
        if im.mode in ("RGBA", "LA") or "transparency" in im.info:
            alpha = im.convert("RGBA").getchannel("A").getextrema()[0] < 255
        want = target_size(*im.size)
        if want:
            im = im.resize(want, Image.LANCZOS)

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

    def report_still_large() -> None:
        if not still_large:
            return
        print(f"\n{len(still_large)} file(s) are correctly sized but still over 600 KB.")
        print("Nothing more this script can do — dense outdoor scenes carry real")
        print("detail and do not compress further without visible loss. Shrink the")
        print("photo's display size or drop it if the weight matters.")
        for p, why in still_large:
            print(f"  {why:>9}  {p}")

    if not flagged:
        print(f"{args.root}: nothing to do — every photo is web-ready.")
        report_still_large()
        return
    if args.check:
        print(f"\n{flagged} file(s) need processing. Run without --check to fix.")
        print("Any renamed file will need its path updated where it is referenced.")
        report_still_large()
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
