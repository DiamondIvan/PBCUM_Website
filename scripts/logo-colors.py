#!/usr/bin/env python3
"""
logo-colors.py — derive card accent colours from the programme logos.

The 五特活 and 七小组 cards tint themselves from a single hex stored beside each
item in src/data/siteData.js (`themeColor` for events, `accentHex` for groups).
That hex drives the 5px top bar, the bottom gradient wash and the corner 回纹
motif in src/components/ProgramsGrid.jsx.

Those values were originally eyeballed, and they drift: replacing a logo file
leaves the old hex in place with a now-wrong comment describing colours the
image no longer contains. Run this after changing any logo and paste the
suggestions back into siteData.js.

    pip install pillow
    python scripts/logo-colors.py

Method
------
Ignore transparent, near-white, near-black and grey pixels, cluster what is left
by hue, then take the cluster covering the most area. The winner is normalised
into the same saturation/lightness band the hand-picked 七小组 accents already
occupy (S 43-75%, L 20-52%) so every card reads with similar weight on white.

A logo with almost no saturated pixels is monochrome; there is no colour to
follow, so it falls back to PBCUM navy rather than inventing a hue.
"""

from __future__ import annotations

import colorsys
import glob
import os
from collections import defaultdict

from PIL import Image

# Monochrome logos get the brand navy — see 升讯团 and QBlogo.
BRAND_NAVY = "#1C2B4A"

# Band occupied by the hand-tuned 七小组 accents; keeps every card equally weighted.
SAT_RANGE = (0.45, 0.72)
LUM_RANGE = (0.24, 0.46)

# Below this share of saturated pixels a logo counts as monochrome.
COLOUR_PIXEL_FLOOR = 0.02

SECTIONS = [
    ("五特活 / events", "public/tehuo_logos/*.png", "themeColor"),
    ("七小组 / groups", "public/xiaozu_logos/*.png", "accentHex"),
]


def hex_of(r: float, g: float, b: float) -> str:
    return "#{:02X}{:02X}{:02X}".format(round(r * 255), round(g * 255), round(b * 255))


def dominant(path: str) -> tuple[str, float, str]:
    """Returns (hex, share of saturated pixels, note)."""
    im = Image.open(path).convert("RGBA")
    im.thumbnail((240, 240))

    kept = 0
    total = 0
    # Bucket by hue (5° bins); accumulate saturation-weighted means.
    bins: dict[int, list[float]] = defaultdict(lambda: [0.0, 0.0, 0.0, 0.0])

    for r8, g8, b8, a in im.convert("RGBA").getdata():
        if a < 200:
            continue
        total += 1
        r, g, b = r8 / 255, g8 / 255, b8 / 255
        h, l, s = colorsys.rgb_to_hls(r, g, b)
        if l > 0.92 or l < 0.10:      # near-white / near-black
            continue
        if s < 0.12:                  # grey — no usable hue
            continue
        kept += 1
        # Weight by area alone. Weighting by saturation instead makes a small
        # vivid mark beat the field colour — it picked the yellow fan on 相声组
        # over the green it sits on, and yellow over the blue shield on 辩论组.
        w = 1.0
        slot = bins[int(h * 360) // 5]
        slot[0] += w
        slot[1] += h * w
        slot[2] += l * w
        slot[3] += s * w

    share = kept / total if total else 0.0
    if not bins or share < COLOUR_PIXEL_FLOOR:
        return BRAND_NAVY, share, "monochrome — brand navy fallback"

    _, slot = max(bins.items(), key=lambda kv: kv[1][0])
    w, hw, lw, sw = slot
    h, l, s = hw / w, lw / w, sw / w

    note = f"natural H={h*360:.0f}° S={s*100:.0f}% L={l*100:.0f}%"
    s = min(max(s, SAT_RANGE[0]), SAT_RANGE[1])
    l = min(max(l, LUM_RANGE[0]), LUM_RANGE[1])
    return hex_of(*colorsys.hls_to_rgb(h, l, s)), share, note


def main() -> None:
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    for label, pattern, field in SECTIONS:
        print(f"\n=== {label}  →  {field} ===")
        for path in sorted(glob.glob(os.path.join(root, pattern))):
            name = os.path.basename(path)
            colour, share, note = dominant(path)
            print(f"  {name:<20} {colour}   {share*100:5.1f}% coloured   {note}")


if __name__ == "__main__":
    main()
