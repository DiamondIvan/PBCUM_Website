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

## 更新学会活动日历

- 执委会应指定一位维护负责人及交接人。每次确认活动、场地或报名状态有变动时，更新网站资料。
- 五特活和七小组的资料跟随各自页面的 `CONTENT`。母会活动填在 `src/data/siteData.js` 的 `otherEvents`。
- 新日期使用 `YYYY-MM-DD`。多日活动用 `endDate` 标注最后一天。可填写已核实的 `time`、`location` 和 `registrationHref`。
- 发布前打开日历的月历及列表，确认日期、地点和详情路径。在无痕窗口检查报名链接，并于报名提前截止时移除该链接。活动结束后会自动归入已结束列表。
