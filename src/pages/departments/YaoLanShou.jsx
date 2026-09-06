/**
 * YaoLanShou.jsx — 摇篮手 (dept-05)
 *
 * Everything this page says lives in CONTENT below. Edit it freely — it affects
 * no other group. The layout is shared (DeptPageLayout) so all seven pages keep
 * an identical structure; edit that file only when you want every group to
 * change together.
 *
 * Any field you leave out simply is not rendered, so there is no need to keep
 * empty sections around while the content is still being gathered.
 */

import { DeptPageLayout } from '../../components/shared/DeptPageLayout';

export const CONTENT = {
  /* ── Homepage card ─────────────────────────────────────────────────
     What the card on the homepage grid shows, and what its modal says.
     Kept here so a group is described in exactly one place — the card and
     the page cannot disagree, because they are the same object. */
  id: 'qxz-05',
  slug: 'dept-05',
  // Not yet written. Left empty deliberately: the card omits the line
  // entirely rather than showing scaffolding to visitors.
  teaser: '',
  detail: '',
  cta: '了解小组',
  /* ── Hero ──────────────────────────────────────────────────────────── */
  title: '摇篮手',
  eyebrow: '七小组 · 05',
  logo: '/xiaozu_logos/pbcumyls.png',
  accentHex: '#6B3FA0', // sampled from the logo — see scripts/logo-colors.py
  accent: 'from-[#6B3FA0] to-[#422763]',

  // One line describing the group, shown under the title.
  mission: '',
  // founded: '',                  // e.g. '1998/1999 学年' — shows as a hero chip
  // memberCount: '',              // e.g. '约 25 位组员'
  // vibe: '',                     // optional short word beside the eyebrow

  /* ── § 2 简介 ───────────────────────────────────────────────────────────
     What this group is and what it does. Use \n between paragraphs. */
  description: '',

  /* ── § 3 组史 ───────────────────────────────────────────────────────────
     When and how the group started. Leave blank until you have the facts —
     the section disappears rather than showing a placeholder. */
  history: '',
  founders: [],

  /* ── § 4 宗旨与目标 ─────────────────────────────────────────────────────
     `purpose` is the one-sentence 宗旨, rendered as a large pull quote.
     `objectives` are the 目标 beneath it. */
  purpose: '',
  objectives: [],

  /* ── § 5 适合谁参与 ─────────────────────────────────────────────────────
     `fitQuote` is an invitation in the group's own voice — this is the line
     that persuades a fresher, so it is worth writing carefully. */
  fitQuote: '',
  fitTags: [],

  /* ── § 6 常年活动 ───────────────────────────────────────────────────────
     { name, description?, image?, detail? } — description optional but
     recommended; image makes the card open in a lightbox. */
  activities: [],

  /* ── § 7 小组负责人 ─────────────────────────────────────────────────────
     { name, role, photo? } — photo optional, falls back to an initials avatar. */
  leadership: [],

  /* ── § 8 加入我们 ───────────────────────────────────────────────────── */
  joinText: '',
  ctaLabel: '报名加入摇篮手',
  ctaHref: '',                     // recruitment form URL, or 'mailto:...'
  social: {
    // facebook: '',
    // instagram: '',
    // instagramHandle: '',
  },
};

export function YaoLanShou() {
  return <DeptPageLayout content={CONTENT} />;
}
