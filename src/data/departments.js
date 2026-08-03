import { BookOpen, Camera, Globe2, HeartHandshake, Megaphone, Palette, PenLine } from 'lucide-react';

/**
 * 七小组 — Seven Sub-Groups / Departments
 *
 * Schema for each department object:
 * {
 *   slug        string  — matches /departments/:slug route + siteData.qixiaozuGroups[i].slug
 *   title       string  — department name
 *   eyebrow     string  — section label shown above the title
 *   accent      string  — Tailwind gradient classes (matches card accent)
 *   icon        React component — lucide-react icon (matches card)
 *   mission     string  — one-line mission statement
 *   description string  — "What we do" paragraph, 3–5 sentences
 *   focusAreas  Array<{ icon: ReactComponent, label: string, note: string }>
 *                       — scannable focus items, 1 line each
 *   pastWork    Array<{ title: string, description: string, accent: string }>
 *                       — 2–3 structured feature cards (NOT a loose gallery)
 *   joinText    string  — how-to-join paragraph, 2–3 sentences
 *   ctaLabel    string  — CTA button text
 *   ctaHref     string  — CTA destination (email or page)
 * }
 */

export const departments = [
  {
    slug: 'dept-01',
    title: '小组一 [PLACEHOLDER]',
    eyebrow: '七小组 · 01', // TODO: replace with real dept label, e.g. "媒体与公关"
    accent: 'from-[#A11217] to-[#6D0E12]',
    icon: Megaphone,
    mission: '// TODO: 一句话使命陈述，如「以文字与影像，向世界讲述 PBCUM 的故事。」',
    description: '// TODO: 3–5句"我们的工作"段落。说清楚这个小组的职责范围、做什么、为什么重要。',
    focusAreas: [
      { icon: Megaphone, label: '// TODO: 核心职责一', note: '// TODO: 一句话说明。' },
      { icon: Megaphone, label: '// TODO: 核心职责二', note: '// TODO: 一句话说明。' },
      { icon: Megaphone, label: '// TODO: 核心职责三', note: '// TODO: 一句话说明。' },
    ],
    pastWork: [
      {
        title: '// TODO: 过往项目名称',
        description: '// TODO: 2–3句描述这个项目：做了什么、成果如何。',
        accent: 'from-[#A11217] to-[#6D0E12]',
      },
      {
        title: '// TODO: 过往项目名称',
        description: '// TODO: 2–3句描述这个项目：做了什么、成果如何。',
        accent: 'from-[#1f2937] to-[#111827]',
      },
      {
        title: '// TODO: 过往项目名称',
        description: '// TODO: 2–3句描述这个项目：做了什么、成果如何。',
        accent: 'from-[#7c3aed] to-[#4f46e5]',
      },
    ],
    joinText: '// TODO: 2–3句说明如何加入或联系这个小组。包括所需技能或兴趣、联系方式等。',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',
  },
  {
    slug: 'dept-02',
    title: '小组二 [PLACEHOLDER]',
    eyebrow: '七小组 · 02',
    accent: 'from-[#0d9488] to-[#0f766e]',
    icon: Palette,
    mission: '// TODO',
    description: '// TODO',
    focusAreas: [
      { icon: Palette, label: '// TODO', note: '// TODO' },
      { icon: Palette, label: '// TODO', note: '// TODO' },
      { icon: Palette, label: '// TODO', note: '// TODO' },
    ],
    pastWork: [
      { title: '// TODO', description: '// TODO', accent: 'from-[#0d9488] to-[#0f766e]' },
      { title: '// TODO', description: '// TODO', accent: 'from-[#1f2937] to-[#111827]' },
      { title: '// TODO', description: '// TODO', accent: 'from-[#A11217] to-[#6D0E12]' },
    ],
    joinText: '// TODO',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',
  },
  {
    slug: 'dept-03',
    title: '小组三 [PLACEHOLDER]',
    eyebrow: '七小组 · 03',
    accent: 'from-[#7c3aed] to-[#4f46e5]',
    icon: Camera,
    mission: '// TODO',
    description: '// TODO',
    focusAreas: [
      { icon: Camera, label: '// TODO', note: '// TODO' },
      { icon: Camera, label: '// TODO', note: '// TODO' },
      { icon: Camera, label: '// TODO', note: '// TODO' },
    ],
    pastWork: [
      { title: '// TODO', description: '// TODO', accent: 'from-[#7c3aed] to-[#4f46e5]' },
      { title: '// TODO', description: '// TODO', accent: 'from-[#1f2937] to-[#111827]' },
      { title: '// TODO', description: '// TODO', accent: 'from-[#0369a1] to-[#0c4a6e]' },
    ],
    joinText: '// TODO',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',
  },
  {
    slug: 'dept-04',
    title: '小组四 [PLACEHOLDER]',
    eyebrow: '七小组 · 04',
    accent: 'from-[#b45309] to-[#92400e]',
    icon: PenLine,
    mission: '// TODO',
    description: '// TODO',
    focusAreas: [
      { icon: PenLine, label: '// TODO', note: '// TODO' },
      { icon: PenLine, label: '// TODO', note: '// TODO' },
      { icon: PenLine, label: '// TODO', note: '// TODO' },
    ],
    pastWork: [
      { title: '// TODO', description: '// TODO', accent: 'from-[#b45309] to-[#92400e]' },
      { title: '// TODO', description: '// TODO', accent: 'from-[#1f2937] to-[#111827]' },
      { title: '// TODO', description: '// TODO', accent: 'from-[#A11217] to-[#6D0E12]' },
    ],
    joinText: '// TODO',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',
  },
  {
    slug: 'dept-05',
    title: '小组五 [PLACEHOLDER]',
    eyebrow: '七小组 · 05',
    accent: 'from-[#0369a1] to-[#0c4a6e]',
    icon: HeartHandshake,
    mission: '// TODO',
    description: '// TODO',
    focusAreas: [
      { icon: HeartHandshake, label: '// TODO', note: '// TODO' },
      { icon: HeartHandshake, label: '// TODO', note: '// TODO' },
      { icon: HeartHandshake, label: '// TODO', note: '// TODO' },
    ],
    pastWork: [
      { title: '// TODO', description: '// TODO', accent: 'from-[#0369a1] to-[#0c4a6e]' },
      { title: '// TODO', description: '// TODO', accent: 'from-[#1f2937] to-[#111827]' },
      { title: '// TODO', description: '// TODO', accent: 'from-[#A11217] to-[#6D0E12]' },
    ],
    joinText: '// TODO',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',
  },
  {
    slug: 'dept-06',
    title: '小组六 [PLACEHOLDER]',
    eyebrow: '七小组 · 06',
    accent: 'from-[#374151] to-[#111827]',
    icon: Globe2,
    mission: '// TODO',
    description: '// TODO',
    focusAreas: [
      { icon: Globe2, label: '// TODO', note: '// TODO' },
      { icon: Globe2, label: '// TODO', note: '// TODO' },
      { icon: Globe2, label: '// TODO', note: '// TODO' },
    ],
    pastWork: [
      { title: '// TODO', description: '// TODO', accent: 'from-[#374151] to-[#111827]' },
      { title: '// TODO', description: '// TODO', accent: 'from-[#A11217] to-[#6D0E12]' },
      { title: '// TODO', description: '// TODO', accent: 'from-[#7c3aed] to-[#4f46e5]' },
    ],
    joinText: '// TODO',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',
  },
  {
    slug: 'dept-07',
    title: '小组七 [PLACEHOLDER]',
    eyebrow: '七小组 · 07',
    accent: 'from-[#be185d] to-[#9d174d]',
    icon: BookOpen,
    mission: '// TODO',
    description: '// TODO',
    focusAreas: [
      { icon: BookOpen, label: '// TODO', note: '// TODO' },
      { icon: BookOpen, label: '// TODO', note: '// TODO' },
      { icon: BookOpen, label: '// TODO', note: '// TODO' },
    ],
    pastWork: [
      { title: '// TODO', description: '// TODO', accent: 'from-[#be185d] to-[#9d174d]' },
      { title: '// TODO', description: '// TODO', accent: 'from-[#1f2937] to-[#111827]' },
      { title: '// TODO', description: '// TODO', accent: 'from-[#0369a1] to-[#0c4a6e]' },
    ],
    joinText: '// TODO',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',
  },
];

/** Look up a single department by slug. Returns undefined if not found. */
export function getDepartmentBySlug(slug) {
  return departments.find((d) => d.slug === slug);
}
