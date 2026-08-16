import { MicVocal, Music, Star, Theater, Trophy } from 'lucide-react';

/**
 * 五特活 — Five Signature Events
 *
 * Schema for each event object:
 * {
 *   slug        string  — matches /events/:slug route + siteData.wuteActivities[i].slug
 *   title       string  — full event name
 *   eyebrow     string  — short category label shown above the title
 *   accent      string  — Tailwind gradient classes (matches card accent)
 *   icon        React component — lucide-react icon (matches card)
 *   date        string  — display date
 *   location    string  — venue name
 *   hook        string  — one punchy sentence; the emotional lead
 *   intro       string  — 2–3 sentence intro paragraph
 *   gallery     Array<{ src: string|null, alt: string, category: string, tone: string }>
 *                       — lightbox-ready items; src null = gradient placeholder
 *   highlights  Array<{ label: string, caption: string }>
 *                       — short moment callouts, ~1 sentence each
 *   closingLine string  — strong final line above the CTA
 *   ctaLabel    string  — CTA button text
 *   ctaHref     string  — CTA destination
 * }
 */

export const events = [
  {
    slug: 'event-01',
    title: '活动一 [PLACEHOLDER]',
    eyebrow: '五特活 · 01', // TODO: replace with real category, e.g. "年度旗舰活动"
    accent: 'from-[#A11217] to-[#6D0E12]',
    icon: Star,
    date: '// TODO: 活动日期，如「2026年3月15日」',
    location: '// TODO: 活动地点，如「马大大讲堂」',
    hook: '// TODO: 一句情感钩子，如「这一夜，语言变成了桥，故事变成了光。」',
    intro: '// TODO: 2–3句简介，吸引读者继续往下看。这里应该是让人期待、充满能量的文字。',
    gallery: [
      { src: null, alt: '// TODO: 照片说明', category: '精彩瞬间', tone: 'from-[#A11217] to-[#6D0E12]', span: 'md:col-span-2 md:row-span-2' },
      { src: null, alt: '// TODO: 照片说明', category: '活动现场', tone: 'from-[#1f2937] to-[#111827]', span: 'md:row-span-2' },
      { src: null, alt: '// TODO: 照片说明', category: '互动环节', tone: 'from-[#7c3aed] to-[#4f46e5]', span: '' },
      { src: null, alt: '// TODO: 照片说明', category: '嘉宾风采', tone: 'from-[#0369a1] to-[#0c4a6e]', span: '' },
      { src: null, alt: '// TODO: 照片说明', category: '合影留念', tone: 'from-[#374151] to-[#111827]', span: 'md:col-span-2' },
    ],
    highlights: [
      { label: '// TODO: 精彩时刻标题', caption: '// TODO: 一句话描述这个时刻的意义或亮点。' },
      { label: '// TODO: 精彩时刻标题', caption: '// TODO: 一句话描述这个时刻的意义或亮点。' },
      { label: '// TODO: 精彩时刻标题', caption: '// TODO: 一句话描述这个时刻的意义或亮点。' },
    ],
    closingLine: '// TODO: 强有力的结语，如「每一场活动，都是一次对语言与文化的深情致敬。」',
    ctaLabel: '关注下一场活动',
    ctaHref: '#footer',
  },
  {
    slug: 'event-02',
    title: '第21届全国中学华文学会生活营 \n 续章·扬帆',
    eyebrow: '五特活 · 02',
    accent: 'from-[#1f2937] to-[#111827]',
    icon: MicVocal,
    date: '// TODO',
    location: '// TODO',
    hook: '// TODO',
    intro: '// TODO',
    gallery: [
      { src: null, alt: '// TODO', category: '精彩瞬间', tone: 'from-[#1f2937] to-[#111827]', span: 'md:col-span-2 md:row-span-2' },
      { src: null, alt: '// TODO', category: '活动现场', tone: 'from-[#A11217] to-[#6D0E12]', span: 'md:row-span-2' },
      { src: null, alt: '// TODO', category: '互动环节', tone: 'from-[#374151] to-[#111827]', span: '' },
      { src: null, alt: '// TODO', category: '合影留念', tone: 'from-[#0369a1] to-[#0c4a6e]', span: '' },
      { src: null, alt: '// TODO', category: '嘉宾风采', tone: 'from-[#7c3aed] to-[#4f46e5]', span: 'md:col-span-2' },
    ],
    highlights: [
      { label: '// TODO', caption: '// TODO' },
      { label: '// TODO', caption: '// TODO' },
      { label: '// TODO', caption: '// TODO' },
    ],
    closingLine: '贰续华章，以梦为帆',
    ctaLabel: '关注下一场活动',
    ctaHref: '#footer',
  },
  {
    slug: 'event-03',
    title: '活动三 [PLACEHOLDER]',
    eyebrow: '五特活 · 03',
    accent: 'from-[#b91c1c] to-[#f97316]',
    icon: Theater,
    date: '// TODO',
    location: '// TODO',
    hook: '// TODO',
    intro: '// TODO',
    gallery: [
      { src: null, alt: '// TODO', category: '精彩瞬间', tone: 'from-[#b91c1c] to-[#f97316]', span: 'md:col-span-2 md:row-span-2' },
      { src: null, alt: '// TODO', category: '活动现场', tone: 'from-[#1f2937] to-[#111827]', span: 'md:row-span-2' },
      { src: null, alt: '// TODO', category: '互动环节', tone: 'from-[#A11217] to-[#6D0E12]', span: '' },
      { src: null, alt: '// TODO', category: '嘉宾风采', tone: 'from-[#374151] to-[#111827]', span: '' },
      { src: null, alt: '// TODO', category: '合影留念', tone: 'from-[#0369a1] to-[#0c4a6e]', span: 'md:col-span-2' },
    ],
    highlights: [
      { label: '// TODO', caption: '// TODO' },
      { label: '// TODO', caption: '// TODO' },
      { label: '// TODO', caption: '// TODO' },
    ],
    closingLine: '// TODO',
    ctaLabel: '关注下一场活动',
    ctaHref: '#footer',
  },
  {
    slug: 'event-04',
    title: '活动四 [PLACEHOLDER]',
    eyebrow: '五特活 · 04',
    accent: 'from-[#7c3aed] to-[#4f46e5]',
    icon: Trophy,
    date: '// TODO',
    location: '// TODO',
    hook: '// TODO',
    intro: '// TODO',
    gallery: [
      { src: null, alt: '// TODO', category: '精彩瞬间', tone: 'from-[#7c3aed] to-[#4f46e5]', span: 'md:col-span-2 md:row-span-2' },
      { src: null, alt: '// TODO', category: '活动现场', tone: 'from-[#1f2937] to-[#111827]', span: 'md:row-span-2' },
      { src: null, alt: '// TODO', category: '互动环节', tone: 'from-[#A11217] to-[#6D0E12]', span: '' },
      { src: null, alt: '// TODO', category: '嘉宾风采', tone: 'from-[#b91c1c] to-[#f97316]', span: '' },
      { src: null, alt: '// TODO', category: '合影留念', tone: 'from-[#374151] to-[#111827]', span: 'md:col-span-2' },
    ],
    highlights: [
      { label: '// TODO', caption: '// TODO' },
      { label: '// TODO', caption: '// TODO' },
      { label: '// TODO', caption: '// TODO' },
    ],
    closingLine: '// TODO',
    ctaLabel: '关注下一场活动',
    ctaHref: '#footer',
  },
  {
    slug: 'event-05',
    title: '活动五 [PLACEHOLDER]',
    eyebrow: '五特活 · 05',
    accent: 'from-[#0369a1] to-[#0c4a6e]',
    icon: Music,
    date: '// TODO',
    location: '// TODO',
    hook: '// TODO',
    intro: '// TODO',
    gallery: [
      { src: null, alt: '// TODO', category: '精彩瞬间', tone: 'from-[#0369a1] to-[#0c4a6e]', span: 'md:col-span-2 md:row-span-2' },
      { src: null, alt: '// TODO', category: '活动现场', tone: 'from-[#1f2937] to-[#111827]', span: 'md:row-span-2' },
      { src: null, alt: '// TODO', category: '互动环节', tone: 'from-[#A11217] to-[#6D0E12]', span: '' },
      { src: null, alt: '// TODO', category: '嘉宾风采', tone: 'from-[#7c3aed] to-[#4f46e5]', span: '' },
      { src: null, alt: '// TODO', category: '合影留念', tone: 'from-[#374151] to-[#111827]', span: 'md:col-span-2' },
    ],
    highlights: [
      { label: '// TODO', caption: '// TODO' },
      { label: '// TODO', caption: '// TODO' },
      { label: '// TODO', caption: '// TODO' },
    ],
    closingLine: '// TODO',
    ctaLabel: '关注下一场活动',
    ctaHref: '#footer',
  },
];

/** Look up a single event by slug. Returns undefined if not found. */
export function getEventBySlug(slug) {
  return events.find((e) => e.slug === slug);
}
