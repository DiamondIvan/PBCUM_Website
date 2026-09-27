/**
 * BianLun.jsx — 辩论组 (dept-03)
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
  id: 'qxz-03',
  slug: 'dept-03',
  teaser: '透过辩论班、训练与校内辩论赛，学习理性思辨、勇于表达。',
  detail:
    '辩论组主要负责举办各类辩论班、辩论训练及校内辩论赛，为学生提供一个学习与实践辩论的平台，' +
    '提升逻辑思维、语言表达、临场应变及分析问题的能力。\n' +
    '不需要任何辩论经验——只要你愿意思考、交流，都欢迎加入。',
  cta: '了解小组',
  /* ── Hero ──────────────────────────────────────────────────────────── */
  title: '辩论组',
  eyebrow: '七小组',
  logo: '/xiaozu_logos/bianlun.png',
  accentHex: '#1A3A9E', // sampled from the logo — see scripts/logo-colors.py
  accent: 'from-[#1A3A9E] to-[#102462]',

  // One line describing the group, shown under the title.
  mission: '举办辩论班、辩论训练及校内辩论赛，培养逻辑思维与理性沟通的能力。',
  // founded: '',                  // e.g. '1998/1999 学年' — shows as a hero chip
  // memberCount: '',              // e.g. '约 25 位组员'
  // vibe: '',                     // optional short word beside the eyebrow

  /* ── § 2 简介 ───────────────────────────────────────────────────────────
     What this group is and what it does. Use \n between paragraphs. */
  description:
    '辩论组主要负责举办各类辩论班、辩论训练及校内辩论赛，为学生提供一个学习与实践辩论的平台。' +
    '通过系统性的训练与实际比赛，使学生能够提升逻辑思维、语言表达、临场应变及分析问题的能力，' +
    '同时培养学生从不同角度思考问题、勇于表达观点以及理性沟通的能力。',

  /* ── § 3 组史 ───────────────────────────────────────────────────────────
     When and how the group started. Leave blank until you have the facts —
     the section disappears rather than showing a placeholder. */
  history: '',
  founders: [],

  /* ── § 4 宗旨与目标 ─────────────────────────────────────────────────────
     `purpose` is the one-sentence 宗旨, rendered as a large pull quote.
     `objectives` are the 目标 beneath it. */
  purpose: '让更多学生认识辩论、接触辩论，并从辩论中学习。',
  objectives: [
    '透过辩论认识问题、思考观点及理解他人',
    '为学生提供一个交流与思考的平台',
    '在不同观点的碰撞中拓展视野',
    '协助学生形成自己独立的思考方式',
  ],

  /* ── § 5 适合谁参与 ─────────────────────────────────────────────────────
     `fitQuote` is an invitation in the group's own voice — this is the line
     that persuades a fresher, so it is worth writing carefully. */
  fitQuote:
    '加入辩论组并不要求你曾经参赛，或具备辩论技巧——无论你是第一次接触辩论，' +
    '还是已经拥有辩论经验，只要你对议题感兴趣，愿意思考、交流、学习，都欢迎加入。',
  fitTags: ['对议题感兴趣', '愿意思考与交流', '喜欢策划与组织活动', '零基础也欢迎', '想尝试新事物'],

  /* ── § 6 常年活动 ───────────────────────────────────────────────────────
     { name, description?, image?, detail? } — description optional but
     recommended; image makes the card open in a lightbox. */
  activities: [
    {
      name: '迎新夜',
      description: '迎接新学员认识辩论组，透过新生擂台赛与表演赛感受辩论的魅力。',
      image: '/bianlunzu/gallery/迎新夜 全体大合照.jpg',
    },
    {
      name: '校内辩',
      description: '校内辩论赛事，让组员在实战中磨练辩才、累积赛场经验。',
      image: '/bianlunzu/gallery/校内辩.jpg',
    },
    {
      name: '辩论班',
      description: '系统性的辩论训练课程，从基础说起，带领新手一步步掌握辩论技巧。',
      image: '/bianlunzu/gallery/辩论班.jpg',
    },
  ],

  /* A date here puts the group itself on the calendar; a `date` on any
     entry in activities[] above puts that one activity there instead.
     ISO 'YYYY-MM-DD', optional endDate, both omitted while unknown. */
  // date: '',
  // endDate: '',

  /* ── § 6b 精彩相册 ──────────────────────────────────────────────────────
     Grouped by activity, so the album mirrors the 常年活动 list above. */
  gallery: [
    { src: '/bianlunzu/gallery/迎新夜 全体大合照.jpg', alt: '迎新夜全体大合照', category: '迎新夜', span: 'md:col-span-2 md:row-span-2' },
    { src: '/bianlunzu/gallery/迎新夜 新生擂台赛.jpg', alt: '迎新夜新生擂台赛', category: '迎新夜', span: 'md:row-span-2' },
    { src: '/bianlunzu/gallery/迎新夜 表演赛.jpg', alt: '迎新夜表演赛', category: '迎新夜', span: '' },
    { src: '/bianlunzu/gallery/校内辩.jpg', alt: '校内辩', category: '校内辩', span: '' },
    { src: '/bianlunzu/gallery/校内辩(1).jpg', alt: '校内辩赛场', category: '校内辩', span: 'md:col-span-2' },
    { src: '/bianlunzu/gallery/校内辩(2).jpg', alt: '校内辩现场', category: '校内辩', span: '' },
    { src: '/bianlunzu/highlights/校内辩 颁奖仪式.jpg', alt: '校内辩颁奖仪式', category: '校内辩', span: '' },
    { src: '/bianlunzu/gallery/辩论班.jpg', alt: '辩论班', category: '辩论班', span: 'md:col-span-2' },
  ],

  /* ── § 6c 精彩时刻 ──────────────────────────────────────────────────────
     Invitational competitions the group has taken part in outside campus.
     No confirmed years yet, so this overrides the default "历年" (chronological)
     framing rather than implying a timeline that isn't there. */
  momentsEyebrow: '对外邀请赛',
  momentsTitle: '走出马大，站上更大的辩论舞台。',
  moments: [
    { image: '/bianlunzu/highlights/华语辩论世界杯.jpg', label: '华语辩论世界杯' },
    { image: '/bianlunzu/highlights/国际华语辩论邀请赛.jpg', label: '国际华语辩论邀请赛' },
    { image: '/bianlunzu/highlights/威华辩.jpg', label: '威华辩' },
    { image: '/bianlunzu/highlights/艺华辩.jpg', label: '艺华辩' },
  ],

  /* ── § 7 小组负责人 ─────────────────────────────────────────────────────
     { name, role, photo? } — photo optional, falls back to an initials avatar. */
  leadership: [
    { name: '符凌绮', role: '组长', photo: '/committee_photo/lingqi.jpeg' },
    { name: '秦恺浚', role: '负责人' },
  ],

  /* ── § 8 加入我们 ───────────────────────────────────────────────────── */
  joinText:
    '无论你是否有辩论经验，只要你对议题感兴趣、愿意思考与交流，我们都欢迎你加入。' +
    '可透过 Instagram 私讯，或直接联系组长了解详情。',
  ctaLabel: '联系组长报名',
  ctaHref: 'https://wa.me/60198293161', // 组长符凌绮 — 019-829 3161；副：秦恺浚 011-5500 6930
  joinPoster: { src: '/bianlunzu/gallery/招募海报.jpg', alt: '辩论组招募海报' },
  social: {
    // facebook: '',   // TODO: paste the real Facebook page URL for 马大辩论队 —
    //                  // a page's display name doesn't reliably map to its URL,
    //                  // so this is left blank rather than guessed.
    instagram: 'https://www.instagram.com/mdbld1988/',
    instagramHandle: '@mdbld1988',
  },
};

export function BianLun() {
  return <DeptPageLayout content={CONTENT} />;
}
