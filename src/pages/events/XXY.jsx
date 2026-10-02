/**
 * XXY.jsx — 新血营 (event-01)
 *
 * Everything this page says lives in CONTENT below. Edit it freely — it affects
 * no other activity. The layout is shared (EventPageLayout) so all five pages
 * keep an identical structure; edit that file only when you want every activity
 * to change together.
 *
 * Any field you leave out simply is not rendered.
 *
 * This page recounts 新血营10.0 (《逐光衔影》), held 2025-10-10 to 2025-10-12 at
 * 育群国民型华文小学 — read straight off the camp's own opening banner, visible
 * in public/xxy/队伍喊口号.JPG. The camp's English name, "Interaction Camp",
 * comes from the mock cheque in public/xxy/开幕仪式.JPG.
 *
 * public/xxy/ once held ~90 photos across nine folders, one per segment of the
 * camp. Each folder was curated down to its single best shot, which was then
 * renamed to the folder's own name and moved out of it — so every path below
 * is just /xxy/<segment>.JPG, with no folder layer.
 */

import { Star } from 'lucide-react';
import { EventPageLayout } from '../../components/shared/EventPageLayout';

export const CONTENT = {
  /* ── Homepage card ─────────────────────────────────────────────────
     What the card on the homepage grid shows, and what its modal says.
     Kept here so a group is described in exactly one place — the card and
     the page cannot disagree, because they are the same object. */
  id: 'wute-01',
  slug: 'event-01',
  teaser: '青春作序，与梦同行。',
  detail: '马大华文学会新生营 \n 新血营10.0 ·《逐光衔影》',
  cta: '了解更多',
  accentHex: '#4F7D57', // Sage Green — the characters and illustration linework
  title: '新血营10.0\n《逐光衔影》',
  eyebrow: '五特活',
  logo: '/tehuo_logos/xxylogo.png',
  accent: 'from-[#4F7D57] to-[#314E36]',
  icon: Star,
  /* ISO 'YYYY-MM-DD', read straight off the opening banner. The hero chip
     shows the two as one range, and the homepage calendar shows the three
     days as one block. */
  date: '2025-10-10',
  endDate: '2025-10-12',
  location: '雪隆区华小/华中',
  hook: '逐光而行，衔影不忘——三天两夜，新血营10.0与新生们一起，写下认识学会的第一章。',
  intro:
    '新血营以营会形式开展，以帮助营员深入了解马大华文学会的组织架构与旗下核心活动，' +
    '也搭建起新生交流平台，让大家在轻松欢乐的氛围中彼此相识、增进友谊。' +
    '此营会也融合趣味互动与多元体验，包含活力满满的跑站游戏、清爽有趣的水站挑战与热闹丰富的嘉年华活动。',

  /* ── § 精彩相册 ──────────────────────────────────────────────────────
     Five of the nine surviving photos — 队伍合照、开幕仪式、跑站游戏、水站 are held
     back here because they already appear in 精彩时刻 just below; nothing on
     this page shows the same photo twice. In the order the camp ran through:
     报到 → 队伍喊口号 → 写信 → 早操 → 嘉年华. */
  gallery: [
    {
      src: '/xxy/营员报道.JPG',
      alt: '营员抵达',
      category: '营员报到',
      span: 'md:col-span-2 md:row-span-2',
      description: '营员们抵达报到处，五人在游览车前笑着比出胜利手势。',
    },
    {
      src: '/xxy/嘉年华.JPG',
      alt: '相声组表演',
      category: '嘉年华',
      span: 'md:row-span-2',
      description: '相声组在嘉年华的舞台上表演《咨询热线》，为活动添上笑声。',
    },
    {
      src: '/xxy/队伍喊口号.JPG',
      alt: '看板前挥手呐喊',
      category: '队伍喊口号',
      span: '',
      description: '背景是新血营10.0的完整活动看板，队伍在台前用力挥手呐喊。',
    },
    {
      src: '/xxy/写信环节.JPG',
      alt: '低头提笔',
      category: '写信环节',
      span: '',
      description: '营员低头提笔，把这几天的心情写进信里。',
    },
    {
      src: '/xxy/早操.JPG',
      alt: '清晨早操',
      category: '早操',
      span: 'md:col-span-2',
      description: '整座体育馆的营员跟着口令同步做早操，唤醒一天的精神。',
    },
  ],

  /* ── § 精彩时刻 ────────────────────────────────────────────────────────
     Same nine photos as the gallery above — each folder now holds exactly
     one, so there is nothing else to pull from. */
  highlights: [
    {
      label: '队伍合照',
      caption: '各队围成一圈，在新血营10.0的看板前留下入营后的第一张合照。',
      image: '/xxy/队伍合照.JPG',
    },
    {
      label: '开幕仪式',
      caption: '台上的巨型支票，写着新血营10.0的正式名称——Interaction Camp。',
      image: '/xxy/开幕仪式.JPG',
    },
    {
      label: '游戏站表演',
      caption: '游戏站化身小舞台，营员们弹着吉他、演起小短剧。',
      image: '/xxy/跑站游戏.JPG',
    },
    {
      label: '水站大合照',
      caption: '一场混战结束，湿透的队伍笑着比出手势，留下最尽兴的合照。',
      image: '/xxy/水站.JPG',
    },
  ],

  closingLine: '新血营10.0落幕，而这群新生与学会的故事，才刚刚开始。',
  ctaLabel: '查看活动日历',
  ctaHref: '/#calendar',
};

export function XXY() {
  return <EventPageLayout content={CONTENT} />;
}
