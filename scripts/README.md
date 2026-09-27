# scripts

Small maintenance scripts. All are safe to re-run.

| Script | What it does |
|---|---|
| `optimise-photos.py` | Makes photographs in `public/` safe to ship — converts HEIC, fixes wrong extensions, resizes to 1600px. Originals are moved to `photo-originals/`, never deleted. |
| `logo-colors.py` | Suggests the accent colour for a group or activity by sampling its logo. Run after swapping a logo file. |

## Adding photographs

Drop them in `public/<group>/`, then:

```
python scripts/optimise-photos.py --check     # what would change
python scripts/optimise-photos.py             # do it
```

`--check` exits non-zero when it finds anything, so it can gate a commit.

Without this, one 8 MB phone photo undoes the saving on a whole folder — which
has already happened once. Photographs arrive at print resolution and often
with the wrong extension; a HEIC named `.png` is a broken image on the live
site and nothing in the build will warn you.

Originals live in `photo-originals/`, outside `public/` so they are never
deployed and gitignored so the repository does not carry them. **They are the
only full-resolution copies — back them up somewhere durable.**

## Dependencies

```
pip install pillow pillow-heif fonttools brotli
```
