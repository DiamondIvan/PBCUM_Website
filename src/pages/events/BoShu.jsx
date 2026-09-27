/**
 * BoShu.jsx — 博书有约 (event-05)
 *
 * Everything this page says lives in CONTENT below. Edit it freely — it affects
 * no other activity. The layout is shared (EventPageLayout) so all five pages
 * keep an identical structure; edit that file only when you want every activity
 * to change together.
 *
 * Any field you leave out simply is not rendered.
 */

import { BookOpen } from 'lucide-react';
import { EventPageLayout } from '../../components/shared/EventPageLayout';

export const CONTENT = {
  /* ── Homepage card ─────────────────────────────────────────────────
     What the card on the homepage grid shows, and what its modal says.
     Kept here so a group is described in exactly one place — the card and
     the page cannot disagree, because they are the same object. */
  id: 'wute-05',
  slug: 'event-05',
  teaser: '博书有约，与你有约。',
  detail: '马大华文学会捐书助学营 \n 博书5.0 ·《数码奇旅》',
  cta: '了解更多',
  accentHex: '#8B5E10', // Deep Bronze — the 博书有约 wordmark (#B46C18 across 72% of the mark)
  title: '博书有约\n《数码奇旅》',
  eyebrow: '五特活',
  logo: '/tehuo_logos/boshulogo.png',
  accent: 'from-[#8B5E10] to-[#563A0A]',
  icon: BookOpen,
  location: '乌雪县吉粦华小',
  hook: '数码奇旅，共赴星宇——博书5.0，破浪无惧。',
  intro:
    '「博书有约」是由马大华文学会（PBCUM）主办，专门为微型华小学生量身打造的三天两夜生活营。' +
    '本项目秉持着「取之社会，用之社会」的宏景，核心任务在于深度优化校园阅读环境与精准启发学生阅读兴趣。' +
    '我们不仅致力于为资源匮乏的微型华小筹募优质课外读物，更通过实际行动组建、翻新及优化校内的阅读空间，' +
    '营造一个温馨、舒适的求知港湾。\n' +
    '我们深信，通过硬件环境的提升与趣味营会的软性引导，能有效点燃华小生的阅读星火，提升微型华小的整体阅读风气。',

  /* ── § 全年时间线 ────────────────────────────────────────────────────
     Six phases, from the book-donation drive through to the camp itself.
     捐书计划 has no single day in the source — only "3月-4月" — so it is
     stored as the full two-month span rather than a guessed single date. */
  timelineTitle: '从募书到营火，一步一步走进吉粦华小。',
  tourStops: [
    { label: '捐书计划', date: '1.3.2026-30.4.2026' },
    { label: '线下迎新会', date: '2.4.2026', location: '乌雪县吉粦华小' },
    { label: '造势活动', date: '3.4.2026', location: '乌雪县吉粦华小' },
    { label: '全国线上常识问答比赛', date: '11.4.2026', location: '线上' },
    { label: '筹备营', date: '24.4.2026-30.4.2026', location: '乌雪县吉粦华小' },
    { label: '生活营', date: '1.5.2026-3.5.2026', location: '乌雪县吉粦华小' },
  ],

  /* ── § 精彩相册 ──────────────────────────────────────────────────────
     Nine photos from public/boshu/gallery photo/, one per segment of the
     three-day camp — 报到 → 写信 → 组旗 → 团康 → 水站 → 用餐 → 课题讲座 →
     互动环节 → 跑站游戏. */
  gallery: [
    {
      src: "/boshu/gallery photo/营员入营.jpg",
      alt: '营员入营',
      category: '营员入营',
      span: 'md:col-span-2 md:row-span-2',
      description: '营员们抵达吉粦华小，席地而坐，听筹委讲解接下来三天两夜的安排。',
    },
    {
      src: "/boshu/gallery photo/写信环节.jpg",
      alt: '写信环节',
      category: '写信环节',
      span: 'md:row-span-2',
      description: '营员趴在地上提笔写信，把这几天的心情写进纸里。',
    },
    {
      src: "/boshu/gallery photo/制作组旗环节(2).jpg",
      alt: '制作组旗',
      category: '制作组旗环节',
      span: '',
      description: '各组合力画出组旗，加菲猫在画纸上晒着太阳。',
    },
    {
      src: "/boshu/gallery photo/团康.jpg",
      alt: '团康活动',
      category: '团康',
      span: '',
      description: '清晨的团康时间，营员们跟着口令同步做动作。',
    },
    {
      src: "/boshu/gallery photo/水站游戏.jpg",
      alt: '水站游戏',
      category: '水站游戏',
      span: 'md:col-span-2',
      description: '一杯接一杯的水从头顶浇下，水站游戏是营会里最清凉的时刻。',
    },
    {
      src: "/boshu/gallery photo/用餐环节.jpg",
      alt: '用餐环节',
      category: '用餐环节',
      span: '',
      description: '用餐时间，营员与筹委围坐一桌，笑着比出手势。',
    },
    {
      src: "/boshu/gallery photo/课题讲座.jpg",
      alt: '课题讲座小剧场',
      category: '课题讲座',
      span: '',
      description: '筹委以「天线宝宝团大战手机恶魔」的小剧场，向营员讲解课题。',
    },
    {
      src: "/boshu/gallery photo/互动环节.jpg",
      alt: '互动环节',
      category: '互动环节',
      span: '',
      description: '台上一提问，台下的手就齐齐举起，互动环节气氛热烈。',
    },
    {
      src: "/boshu/gallery photo/跑站游戏(1).jpg",
      alt: '跑站游戏',
      category: '跑站游戏',
      span: 'md:col-span-2',
      description: '套圈游戏考验手眼协调，跑站游戏让营员们在闯关中越玩越熟络。',
    },
  ],

  /* ── § 精彩时刻 ──────────────────────────────────────────────────────── */
  highlights: [
    {
      label: '开幕仪式',
      caption: '「数码奇旅・博书有约5.0」的看板立在台上，宣告生活营正式启程。',
      image: '/boshu/highlight photo/开幕仪式.jpg',
    },
    {
      label: '开幕大合照',
      caption: '全体营员、筹委与嘉宾齐聚球场，留下开幕当天的全体大合照。',
      image: '/boshu/highlight photo/开幕大合照.jpg',
    },
    {
      label: '营火会',
      caption: '入夜后的营火会，筹委与协助搭建营火的社区长辈们合照留念。',
      image: '/boshu/highlight photo/营火会.jpg',
    },
    {
      label: '营火点火仪式',
      caption: '火苗窜起的瞬间，营火会正式点燃，也点亮了这一夜的营地。',
      image: '/boshu/highlight photo/营火会点火仪式.jpg',
    },
    {
      label: '颁发纪念品仪式',
      caption: '筹委逐一向到场支持的嘉宾与赞助商代表颁发纪念品，答谢一路的支持。',
      image: '/boshu/highlight photo/颁发纪念品仪式.jpg',
    },
  ],

  closingLine: '博书5.0落幕，但留在吉粦华小的书本与阅读角，会继续陪着营员们翻页。',
  ctaLabel: '查看活动日历',
  ctaHref: '/#calendar',
};

export function BoShu() {
  return <EventPageLayout content={CONTENT} />;
}
