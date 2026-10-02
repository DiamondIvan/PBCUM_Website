/**
 * QuanBian.jsx — 全国大专辩论会（全辩）(event-04)
 *
 * Everything this page says lives in CONTENT below. Edit it freely — it affects
 * no other activity. The layout is shared (EventPageLayout) so all five pages
 * keep an identical structure; edit that file only when you want every activity
 * to change together.
 *
 * Any field you leave out simply is not rendered.
 *
 * Gallery    — public/quanbian/gallery/    (10 photos: match shots + behind-the-scenes)
 * Highlights — public/quanbian/highlights/ (5 landmark edition photos)
 *
 * Sub-events (all held annually):
 *   1  全国大专辩论会      the main open competition
 *   2  全辩·中学冠军联赛  for secondary-school debate champions
 *   3  辩论海啸            open showcase / exhibition round
 *
 * Dates for 全辩21 are TBC — uncomment the date/endDate/location fields below
 * once confirmed; they will appear on the hero chips and the homepage calendar.
 */

import { Trophy } from 'lucide-react';
import { EventPageLayout } from '../../components/shared/EventPageLayout';

export const CONTENT = {
  /* ── Homepage card ─────────────────────────────────────────────────
     Shown on the 五特活 homepage grid and in the modal that opens from it.
     Kept here so the card and the page always say the same thing. */
  id: 'wute-04',
  slug: 'event-04',
  teaser: '马来西亚历史最悠久的华语辩论赛，迈入第三十八年。',
  detail:
    '全国大专辩论会（全辩）创立于 1988 年，是马来西亚首个全国性大专级别华语辩论比赛，' +
    '今年踏入全辩 21，旗下设有全辩·中学冠军联赛与辩论海啸两项子活动。',
  cta: '了解全辩',
  accentHex: '#1C2B4A', // PBCUM Navy — QBlogo is fully greyscale; brand fallback
  title: '全国大专辩论会\n全辩 21',
  eyebrow: '特活',
  logo: '/tehuo_logos/QBlogo.png',
  accent: 'from-[#1C2B4A] to-[#111B2E]',
  icon: Trophy,
  hook: '立于前思，辩向新知',

  /* ── Date / location ───────────────────────────────────────────────
     Uncomment and fill in once 全辩21's schedule is confirmed.
     ISO 'YYYY-MM-DD'; the homepage calendar picks them up automatically. */
  // date: '',
  // endDate: '',
  // location: '',

  /* ── § 活动简介 ─────────────────────────────────────────────────── */
  intro:
    '全国大专辩论会（简称"全辩"），是马来西亚首个全国性、年度举办的大专级别华语辩论比赛。' +
    '1988 年创立至今，是马来西亚迄今历史最悠久的华语辩论比赛，今年已迈入第 38 个年头。\n' +
    '全辩旗下每年举办三项活动：全国大专辩论会（主赛）、全辩·中学冠军联赛，' +
    '以及辩论海啸。三者共同构成全辩独树一格的赛事生态，' +
    '为来自全国各地的辩论队伍提供切磋、交流与展演的舞台——' +
    '无论是大专生还是中学生，都能在全辩找到属于自己的战场。',

  /* ── § 精彩相册 ─────────────────────────────────────────────────── */
  gallery: [
    {
      src: '/quanbian/gallery/赛事场地.jpeg',
      alt: '赛事场地',
      category: '赛事',
      tone: 'from-[#1C2B4A] to-[#111B2E]',
      span: 'md:col-span-2 md:row-span-2',
      description: '全辩主场地布置就绪，赛事正式拉开序幕。',
    },
    {
      src: '/quanbian/gallery/筹委大合照.jpeg',
      alt: '筹委大合照',
      category: '筹委',
      tone: 'from-[#374151] to-[#111827]',
      span: 'md:row-span-2',
      description: '全体筹委大合照，记录这一届全辩背后的团队。',
    },
    {
      src: '/quanbian/gallery/辩手特写.jpeg',
      alt: '辩手特写',
      category: '赛事',
      tone: 'from-[#374151] to-[#111827]',
      span: '',
      description: '辩手在场上全神贯注，以论据与机智应对对手。',
    },
    {
      src: '/quanbian/gallery/评审特写.jpeg',
      alt: '评审特写',
      category: '赛事',
      tone: 'from-[#1f2937] to-[#0f172a]',
      span: '',
      description: '评审专注聆听双方陈词，斟酌每一个论点。',
    },
    {
      src: '/quanbian/gallery/双溪龙拉曼大学反方三辩.jpeg',
      alt: '双溪龙拉曼大学反方三辩',
      category: '赛事',
      tone: 'from-[#374151] to-[#111827]',
      span: '',
      description: '双溪龙拉曼大学反方三辩在场上发表结辩陈词。',
    },
    {
      src: '/quanbian/gallery/多媒体大学（马六甲院校）正方二辩.jpeg',
      alt: '多媒体大学（马六甲院校）正方二辩',
      category: '赛事',
      tone: 'from-[#374151] to-[#111827]',
      span: '',
      description: '多媒体大学（马六甲院校）正方二辩逐一拆解对方立论。',
    },
    {
      src: '/quanbian/gallery/精美周边.jpeg',
      alt: '全辩精美周边',
      category: '周边',
      tone: 'from-[#1C2B4A] to-[#111B2E]',
      span: 'md:col-span-2',
      description: '全辩精心设计的限量周边，每一件都是一段值得珍藏的回忆。',
    },
    {
      src: '/quanbian/gallery/精美周边2.jpeg',
      alt: '全辩周边系列',
      category: '周边',
      tone: 'from-[#374151] to-[#111827]',
      span: '',
      description: '全辩周边系列，兼顾美感与纪念价值。',
    },
    {
      src: '/quanbian/gallery/筹委工作日.jpeg',
      alt: '筹委工作日',
      category: '筹委',
      tone: 'from-[#374151] to-[#111827]',
      span: '',
      description: '赛事背后，是筹委们无数个备赛与筹备的工作日。',
    },
    {
      src: '/quanbian/gallery/筹委幕后花絮.jpeg',
      alt: '筹委幕后花絮',
      category: '筹委',
      tone: 'from-[#1f2937] to-[#111827]',
      span: '',
      description: '赛事落幕后，幕后团队的片刻轻松与欢笑。',
    },
  ],

  /* ── § 精彩时刻 — landmark editions carousel ────────────────────── */
  highlights: [
    {
      label: '第二十届全国大专辩论会',
      caption: '全辩踏入第二十届，历届积淀化为这一场最具分量的会面。',
      image: '/quanbian/highlights/第二十届全国大专辩论会.jpeg',
      description:
        '第二十届全国大专辩论会是全辩历史上的重要里程碑，' +
        '来自全国各地的强队再度相聚，以辩论为名，以思辨为魂。',
      detail: '全辩20，历史迈入新里程，赛事规模与影响力持续扩大。',
    },
    {
      label: '第十九届全国大专辩论会',
      caption: '全辩19，一场充满张力与交锋的年度盛会。',
      image: '/quanbian/highlights/第十九届全国大专辩论会.jpg',
      description:
        '第十九届全辩延续历届高水准，各院校辩论队在此一较高下，' +
        '以智慧与口才争夺冠军宝座。',
      detail: '全辩19，延续精彩，每一场比赛都是对思维极限的挑战。',
    },
    {
      label: '全辩二十推介礼暨表演赛',
      caption: '以一场表演赛，正式揭开全辩20的序幕。',
      image: '/quanbian/highlights/全辩二十推介里暨表演赛.jpg',
      description:
        '全辩20推介礼暨表演赛是正式赛事的前哨，' +
        '嘉宾与观众共同见证全辩新一届的正式启动。',
      detail: '推介礼不只是仪式，更是全辩精神的宣示——立于前思，辩向新知。',
    },
    {
      label: '第一届全辩·中学冠军联赛',
      caption: '中学辩论新舞台，从第一届开始。',
      image: '/quanbian/highlights/第一届全辩·中学冠军联赛.jpg',
      description:
        '全辩·中学冠军联赛首届面世，为全国中学辩论冠军队伍搭建一个' +
        '相互切磋的高水准舞台。',
      detail: '首届中学冠军联赛正式开创了全辩在中学辩论圈的全新版图。',
    },
    {
      label: '第二届全辩·中学冠军联赛',
      caption: '延续首届的精彩，全国中学辩论精英再聚。',
      image: '/quanbian/highlights/第二届全辩·中学冠军联赛.jpg',
      description:
        '第二届中学冠军联赛延续首届反响，' +
        '更多中学冠军队伍参与其中，赛事规模与质素双双提升。',
      detail: '全辩·中学冠军联赛持续发展，成为培育华语辩论新生代的重要平台。',
    },
  ],

  closingLine: '三十八年，辩声不断。下一场，等你来战。',
  ctaLabel: '查看活动日历',
  ctaHref: '/#calendar',
};

export function QuanBian() {
  return <EventPageLayout content={CONTENT} />;
}
