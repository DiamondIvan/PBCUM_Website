/**
 * HuaWenBan.jsx — 华文班 (dept-04)
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
  id: 'qxz-04',
  slug: 'dept-04',
  teaser: '为马大非华裔生提供轻松友好的学习华语平台。',
  detail:
    '华文班为零华语基础的马大非华裔生提供系统的华语课程，' +
    '从日常上课、大课到场景模拟，把语言学习带进真实情境。\n' +
    '对热心教育的马大生来说，这里也是一个把标准华文教出去的实践机会。',
  cta: '了解小组',

  /* ── Hero ──────────────────────────────────────────────────────────── */
  title: '华文班',
  eyebrow: '七小组 · 04',
  logo: '/xiaozu_logos/huawenban.png',
  accentHex: '#9B2335', // Cranberry Red — the red seal stamp in the logo
  accent: 'from-[#9B2335] to-[#601621]',

  // Condensed from the 简介 below; the document gives no separate tagline.
  mission: '推广华文教育，为马大非华裔生提供轻松友好的学习华语平台。',
  // founded: '',   // the source document gives no founding year — see the notes

  /* ── § 2 简介 ──────────────────────────────────────────────────────── */
  description:
    '马大华文学会华文班是马大华文学会旗下的七小组之一。' +
    '此活动旨在推广华文教育，为马大非华裔生提供轻松友好的学习华语平台，' +
    '也给热心教育的马大生一个实践机会。',

  /* ── § 3 组史 ──────────────────────────────────────────────────────────
     Not in the source document. The section does not render while empty. */
  history: '',
  founders: [],

  /* ── § 4 宗旨与目标 ────────────────────────────────────────────────────
     The document lists three 宗旨 rather than one sentence, so they are all
     objectives and there is no pull quote. */
  purpose: '',
  objectives: [
    '推广华语，提倡使用正确华语',
    '促进与友族之间的交流',
    '培养教员的教育心态',
  ],

  /* ── § 5 适合谁参与 ────────────────────────────────────────────────────
     华文班 recruits two different kinds of people, which no other group here
     does. Both are named explicitly rather than blurred into one description. */
  fitQuote: '',
  fitTags: [
    '学员：零华语基础的马大非华裔生',
    '教员／筹委：热心教育、欲推广标准华文的马大生',
  ],

  /* ── § 6 常年活动 ──────────────────────────────────────────────────── */
  activities: [
    { name: '日常上课', description: '系统的华语教学。' },
    { name: '大课', description: '学习特定华语知识或文化。' },
    { name: '场景模拟', description: '将语言学习融入实际场景。' },
    { name: '社交媒体知识分享', description: '通过平台分享趣味华语。' },
    { name: '结业礼' },
  ],

  /* ── § 6b 精彩相册 ──────────────────────────────────────────────────── */
  gallery: [
    { src: '/huawenban/gallery/上课.jpg',  alt: '日常上课', category: '上课', span: 'md:col-span-2 md:row-span-2' },
    { src: '/huawenban/gallery/上课.jpeg', alt: '课堂一景', category: '上课', span: '' },
    { src: '/huawenban/gallery/大课.jpg',  alt: '大课',    category: '大课', span: '' },
  ],

  /* ── § 6c 精彩时刻 ──────────────────────────────────────────────────────
     No dates on these, so the heading is overridden — the default 历年精彩时刻
     is for a chronological archive like 相声组's. */
  momentsEyebrow: '精彩时刻',
  momentsTitle: '课堂之外的样子。',
  moments: [
    { image: '/huawenban/highlights/场景模拟.jpg', label: '场景模拟' },
    { image: '/huawenban/highlights/结业礼.jpg',   label: '结业礼' },
    { image: '/huawenban/highlights/班委照.jpg',   label: '班委合照' },
  ],

  /* ── § 7 小组负责人 ────────────────────────────────────────────────────
     Phone numbers from the document are deliberately not published — contact
     routes through the form and the group's social accounts instead. */
  leadership: [
    { name: '刘奕君', role: '华文班班长', photo: '/committee_photo/yijun.jpeg' },
    { name: '黄依玲', role: '华文班副班长' },
  ],

  /* ── § 8 加入我们 ──────────────────────────────────────────────────────
     The linked form is the 班委报名表 — it recruits committee members, not
     students. The wording says so rather than implying it enrols learners. */
  joinText:
    '下方表格为班委报名表，欢迎热心教育、想推广标准华文的马大生申请。' +
    '想以学员身份上课的同学，请透过我们的社交媒体私讯查询。',
  ctaLabel: '报名成为班委',
  ctaHref: 'https://docs.google.com/forms/d/1yY46B4uw_ryyRo3pBR75XMgHmMS14ZP4cvTVRwSN1mE/viewform',
  social: {
    facebook: 'https://www.facebook.com/share/1B2XtwZUTm/',
    instagram: 'https://www.instagram.com/pbcum_chinese_class',
    instagramHandle: '@pbcum_chinese_class',
  },
};

export function HuaWenBan() {
  return <DeptPageLayout content={CONTENT} />;
}
