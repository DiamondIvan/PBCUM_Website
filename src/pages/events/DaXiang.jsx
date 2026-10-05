/**
 * DaXiang.jsx — 大象相声 (event-03)
 *
 * Everything this page says lives in CONTENT below. Edit it freely — it affects
 * no other activity. The layout is shared (EventPageLayout) so all five pages
 * keep an identical structure; edit that file only when you want every activity
 * to change together.
 *
 * Any field you leave out simply is not rendered.
 *
 * Gallery structure mirrors the three folders under public/daxiang/:
 *   1  全国中学生相声比赛   — 10 photos  (中相-…)
 *   2  大型相声观摩会       — 10 photos  (大相-…)
 *   3  小型相声日           — 10 photos  (小相-…)
 * Each folder becomes its own `photoSection` so photos are never mixed across
 * sub-events. Add a `gallery: []` entry only when you need a flat catch-all album
 * above the sections; leave it out (as here) and that heading disappears.
 */

import { Theater } from 'lucide-react';
import { EventPageLayout } from '../../components/shared/EventPageLayout';

export const CONTENT = {
  /* ── Homepage card ─────────────────────────────────────────────────────
     What the card on the homepage grid shows, and what its modal says.
     Kept here so an activity is described in exactly one place — the card and
     the page cannot disagree, because they are the same object. */
  id: 'wute-03',
  slug: 'event-03',
  teaser: '三场演出，把相声带到每一位观众面前。',
  detail: '大相 — 全年三场，从全国中学生比赛到大型观摩会再到小型相声日，相声不停。',
  cta: '了解活动',
  accentHex: '#3F3A36', // Warm Ink — DXlogo is a pure black-and-white seal; no hue to follow
  title: '大型相声观摩会',
  eyebrow: '特活',
  logo: '/tehuo_logos/DXlogo.png',
  accent: 'from-[#3F3A36] to-[#272421]',
  icon: Theater,
  hook: '相熠廿一，笑战奇迹。',

  /* Put a date here and it appears on the homepage calendar by itself.
     ISO 'YYYY-MM-DD'; add endDate for something spanning several days.
     Leave them out entirely while the date is unknown. */
  // date: '',
  // endDate: '',
  // location: '',

  intro:
    '“大相“是马大华文学会一年一度最大型的相声活动。学员们经过磨练后，' +
    '在舞台上表演相声大抛笑弹，誓要成为导师及观众们认可的相声演员。' +
    '\n 此外，筹委会还通过全国中学生相声比赛及小型相声日等不同形式的活动，为大学生、中学生及' +
    '社会大众提供接触、欣赏与参与相声的平台，同时培养年轻一代对传统语言艺术的兴趣，让更多人看' +
    '见相声、理解相声，并将这份文化与笑声继续传承下去。',

  /* ── § 分组相册 ─────────────────────────────────────────────────────────
     Three sections, one per folder under public/daxiang/.
     Each has its own eyebrow, title, optional description and its own
     GalleryLightbox grid. `span` follows the same rules as any gallery:
     'md:col-span-2 md:row-span-2' makes a tile the hero of its row. */
  photoSections: [

    /* ─────────────────────────────────────────────────────────────────────
       §1  全国中学生相声比赛
           public/daxiang/全国中学生相声比赛/  (10 photos)
       ───────────────────────────────────────────────────────────────────── */
    {
      eyebrow: '全国中学生相声比赛',
      title: '全国中学生，同台竞技。',
      description:
        '来自全国各地中学的相声选手齐聚一堂，' +
        '在评审面前展示各自的相声功力，' +
        '是大相全年规模最大的比赛型活动。',
      photos: [
        {
          src: '/daxiang/全国中学生相声比赛/中相-大合照.jpg',
          alt: '全国中学生相声比赛大合照',
          category: '全国中学生相声比赛',
          tone: 'from-[#3F3A36] to-[#1a1815]',
          span: 'md:col-span-2 md:row-span-2',
        },
        {
          src: '/daxiang/全国中学生相声比赛/中相-选手表演.jpg',
          alt: '选手表演',
          category: '全国中学生相声比赛',
          tone: 'from-[#4a4540] to-[#272421]',
          span: 'md:row-span-2',
        },
        {
          src: '/daxiang/全国中学生相声比赛/中相-评审点评.jpg',
          alt: '评审点评',
          category: '全国中学生相声比赛',
          tone: 'from-[#374151] to-[#111827]',
          span: '',
        },
        {
          src: '/daxiang/全国中学生相声比赛/中相-评审讨论.jpg',
          alt: '评审讨论',
          category: '全国中学生相声比赛',
          tone: 'from-[#1f2937] to-[#0f172a]',
          span: '',
        },
        {
          src: '/daxiang/全国中学生相声比赛/中相-选手席.jpg',
          alt: '选手席',
          category: '全国中学生相声比赛',
          tone: 'from-[#374151] to-[#111827]',
          span: '',
        },
        {
          src: '/daxiang/全国中学生相声比赛/中相-观众.jpg',
          alt: '观众席',
          category: '全国中学生相声比赛',
          tone: 'from-[#1f2937] to-[#111827]',
          span: 'md:col-span-2',
        },
        {
          src: '/daxiang/全国中学生相声比赛/中相-选手抵达.jpg',
          alt: '选手抵达报道',
          category: '全国中学生相声比赛',
          tone: 'from-[#4a4540] to-[#272421]',
          span: '',
        },
        {
          src: '/daxiang/全国中学生相声比赛/中相-报道处准备中.jpg',
          alt: '报道处准备中',
          category: '全国中学生相声比赛',
          tone: 'from-[#374151] to-[#111827]',
          span: '',
        },
        {
          src: '/daxiang/全国中学生相声比赛/中相-售卖处.jpg',
          alt: '售卖处',
          category: '全国中学生相声比赛',
          tone: 'from-[#374151] to-[#111827]',
          span: '',
        },
        {
          src: '/daxiang/全国中学生相声比赛/中相-售卖处＆报道处.jpg',
          alt: '售卖处与报道处',
          category: '全国中学生相声比赛',
          tone: 'from-[#1e3a5f] to-[#0c2340]',
          span: 'md:col-span-2',
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────────
       §2  大型相声观摩会
           public/daxiang/大型相声观摩会/  (10 photos)
       ───────────────────────────────────────────────────────────────────── */
    {
      eyebrow: '大型相声观摩会',
      title: '正式演出，满场观众。',
      description:
        '大型相声观摩会是大相全年规模最大的正式演出，' +
        '舞台、灯光、音响一应俱全，' +
        '吸引来自校内外的观众共同欣赏一场完整的相声专场。',
      photos: [
        {
          src: '/daxiang/大型相声观摩会/大相-开幕仪式.jpg',
          alt: '开幕仪式',
          category: '大型相声观摩会',
          tone: 'from-[#1e3a5f] to-[#0c2340]',
          span: 'md:col-span-2 md:row-span-2',
        },
        {
          src: '/daxiang/大型相声观摩会/大相-相声组合照.jpg',
          alt: '相声组合照',
          category: '大型相声观摩会',
          tone: 'from-[#374151] to-[#111827]',
          span: 'md:row-span-2',
        },
        {
          src: '/daxiang/大型相声观摩会/大相-司仪.jpg',
          alt: '司仪主持',
          category: '大型相声观摩会',
          tone: 'from-[#374151] to-[#111827]',
          span: '',
        },
        {
          src: '/daxiang/大型相声观摩会/大相-检票处.jpg',
          alt: '检票处',
          category: '大型相声观摩会',
          tone: 'from-[#1e3a5f] to-[#0c2340]',
          span: '',
        },
        {
          src: '/daxiang/大型相声观摩会/大相-观众席.jpg',
          alt: '观众席',
          category: '大型相声观摩会',
          tone: 'from-[#1f2937] to-[#111827]',
          span: 'md:col-span-2',
        },
        {
          src: '/daxiang/大型相声观摩会/大相-幸运抽奖.jpg',
          alt: '幸运抽奖',
          category: '大型相声观摩会',
          tone: 'from-[#374151] to-[#111827]',
          span: '',
        },
        {
          src: '/daxiang/大型相声观摩会/大相-谢幕.jpg',
          alt: '谢幕',
          category: '大型相声观摩会',
          tone: 'from-[#374151] to-[#111827]',
          span: '',
        },
        {
          src: '/daxiang/大型相声观摩会/大相-高中委合照.jpg',
          alt: '高中委合照',
          category: '大型相声观摩会',
          tone: 'from-[#1e3a5f] to-[#0c2340]',
          span: '',
        },
        {
          src: '/daxiang/大型相声观摩会/大相-VIP合照.jpg',
          alt: 'VIP合照',
          category: '大型相声观摩会',
          tone: 'from-[#374151] to-[#111827]',
          span: '',
        },
        {
          src: '/daxiang/大型相声观摩会/大相-高委谢幕.jpg',
          alt: '高委谢幕',
          category: '大型相声观摩会',
          tone: 'from-[#1f2937] to-[#111827]',
          span: 'md:col-span-2',
        },
      ],
    },

    /* ─────────────────────────────────────────────────────────────────────
       §3  小型相声日
           public/daxiang/小型相声日/  (10 photos)
       ───────────────────────────────────────────────────────────────────── */
    {
      eyebrow: '小型相声日',
      title: '轻松一日，相声也可以很随意。',
      description:
        '小型相声日是大相中氛围最轻松的一场，' +
        '规模较小却更亲近观众，让相声组的同学有更多上台练手的机会，' +
        '也给观众一个轻松欣赏相声的下午。',
      photos: [
        {
          src: '/daxiang/小型相声日/小相-舞台.jpg',
          alt: '舞台布置',
          category: '小型相声日',
          tone: 'from-[#5b2333] to-[#3b1120]',
          span: 'md:col-span-2 md:row-span-2',
        },
        {
          src: '/daxiang/小型相声日/小相-相声表演.jpg',
          alt: '相声表演',
          category: '小型相声日',
          tone: 'from-[#5b2333] to-[#3b1120]',
          span: 'md:row-span-2',
        },
        {
          src: '/daxiang/小型相声日/小相-司仪.jpg',
          alt: '司仪主持',
          category: '小型相声日',
          tone: 'from-[#374151] to-[#111827]',
          span: '',
        },
        {
          src: '/daxiang/小型相声日/小相-观众席.jpg',
          alt: '观众席',
          category: '小型相声日',
          tone: 'from-[#1f2937] to-[#111827]',
          span: '',
        },
        {
          src: '/daxiang/小型相声日/小相-观众席(1).jpg',
          alt: '观众席（二）',
          category: '小型相声日',
          tone: 'from-[#1f2937] to-[#111827]',
          span: '',
        },
        {
          src: '/daxiang/小型相声日/小相-技术处.jpg',
          alt: '技术处',
          category: '小型相声日',
          tone: 'from-[#374151] to-[#111827]',
          span: '',
        },
        {
          src: '/daxiang/小型相声日/小相-美术组布置中.jpg',
          alt: '美术组布置中',
          category: '小型相声日',
          tone: 'from-[#374151] to-[#111827]',
          span: '',
        },
        {
          src: '/daxiang/小型相声日/小相-筹委合照.jpg',
          alt: '筹委合照',
          category: '小型相声日',
          tone: 'from-[#5b2333] to-[#3b1120]',
          span: 'md:col-span-2',
        },
        {
          src: '/daxiang/小型相声日/小相-相声组＆高中委合照.jpg',
          alt: '相声组与高中委合照',
          category: '小型相声日',
          tone: 'from-[#5b2333] to-[#3b1120]',
          span: '',
        },
        {
          src: '/daxiang/小型相声日/小相-大合照.jpg',
          alt: '大合照',
          category: '小型相声日',
          tone: 'from-[#5b2333] to-[#3b1120]',
          span: '',
        },
      ],
    },
  ],

  closingLine: '每一次上台，都是相声在马大留下的印记。',
  ctaLabel: '查看日历',
  ctaHref: '/#calendar',

};

export function DaXiang() {
  return <EventPageLayout content={CONTENT} />;
}
