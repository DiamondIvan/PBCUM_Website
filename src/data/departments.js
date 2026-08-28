import { BookOpen, Camera, Globe2, HeartHandshake, Megaphone, Palette, PenLine } from 'lucide-react';

/**
 * 七小组 — Seven Sub-Groups / Departments
 *
 * Schema for each department object:
 * {
 *   slug           string   — matches /departments/:slug route
 *   title          string   — department name (H1)
 *   eyebrow        string   — section label shown above the title
 *   accent         string   — Tailwind gradient classes (matches card accent)
 *   icon           ReactComponent — lucide-react icon (matches card)
 *
 *   // Section 1 — Header
 *   mission        string   — one-line tagline shown beneath the title
 *
 *   // Section 2 — What we do
 *   description    string   — 2–4 sentence paragraph of responsibilities
 *   focusAreas     string[] — bullet list of specific responsibilities/activities
 *                            (e.g. "event logistics", "social media management")
 *
 *   // Section 3 — Leadership
 *   leadership     Array<{ name: string, role: string, photo: string|null }>
 *                            — head + optional vice-head; photo URL or null (→ initials avatar)
 *
 *   // Section 4 — What you'll gain
 *   gains          string[] — skills/experience members personally develop
 *                            (e.g. "public speaking", "project management")
 *
 *   // Section 5 — Who fits well here
 *   fitTags        string[] — short trait/interest descriptors rendered as tags
 *
 *   // Section 6 — Past work / highlights
 *   pastWork       Array<{ title: string, description: string, image: string|null, accent: string }>
 *                            — 2–3 feature cards; image URL or null (→ gradient placeholder)
 *
 *   // Section 7 — Time commitment
 *   timeCommitment string   — single short line, e.g. "每月开会 2 次"
 *
 *   // Section 8 — CTA / Join
 *   joinText       string   — 2–3 sentences on how to join / contact
 *   ctaLabel       string   — CTA button text
 *   ctaHref        string   — CTA destination (email or page)
 *
 *   // Optional
 *   testimonial    { quote: string, author: string } | null
 *   vibe           string | null  — one-word / short-phrase culture descriptor
 * }
 */

export const departments = [
  {
    slug: 'dept-01',
    title: '小组一 [PLACEHOLDER]',
    eyebrow: '七小组 · 01',
    accent: 'from-[#A11217] to-[#6D0E12]',
    icon: Megaphone,

    mission: '[PLACEHOLDER] 一句话使命陈述。',

    description: '[PLACEHOLDER] 2–4 句"我们的工作"段落。说清楚这个小组的职责范围、做什么、为什么重要。',
    focusAreas: [
      '[PLACEHOLDER] 核心职责一',
      '[PLACEHOLDER] 核心职责二',
      '[PLACEHOLDER] 核心职责三',
    ],

    leadership: [
      { name: '[PLACEHOLDER]', role: '组长', photo: null },
      { name: '[PLACEHOLDER]', role: '副组长', photo: null },
    ],

    gains: [
      '[PLACEHOLDER] 技能或经验一',
      '[PLACEHOLDER] 技能或经验二',
      '[PLACEHOLDER] 技能或经验三',
    ],

    fitTags: [
      '[PLACEHOLDER] 特质或兴趣',
      '[PLACEHOLDER] 特质或兴趣',
      '[PLACEHOLDER] 特质或兴趣',
    ],

    pastWork: [
      {
        title: '[PLACEHOLDER] 过往项目名称',
        description: '[PLACEHOLDER] 1–2 句描述这个项目：做了什么、成果如何。',
        image: null,
        accent: 'from-[#A11217] to-[#6D0E12]',
      },
      {
        title: '[PLACEHOLDER] 过往项目名称',
        description: '[PLACEHOLDER] 1–2 句描述这个项目：做了什么、成果如何。',
        image: null,
        accent: 'from-[#1f2937] to-[#111827]',
      },
      {
        title: '[PLACEHOLDER] 过往项目名称',
        description: '[PLACEHOLDER] 1–2 句描述这个项目：做了什么、成果如何。',
        image: null,
        accent: 'from-[#7c3aed] to-[#4f46e5]',
      },
    ],

    timeCommitment: '[PLACEHOLDER] 例：每月开会 2 次，活动期间视需求增加。',

    joinText: '[PLACEHOLDER] 2–3 句说明如何加入或联系这个小组。包括所需技能或兴趣、联系方式等。',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',

    testimonial: null,
    vibe: null,
  },
  {
    slug: 'dept-02',
    title: '小组二 [PLACEHOLDER]',
    eyebrow: '七小组 · 02',
    accent: 'from-[#0d9488] to-[#0f766e]',
    icon: Palette,

    mission: '[PLACEHOLDER]',

    description: '[PLACEHOLDER]',
    focusAreas: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    leadership: [
      { name: '[PLACEHOLDER]', role: '组长', photo: null },
      { name: '[PLACEHOLDER]', role: '副组长', photo: null },
    ],

    gains: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    fitTags: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    pastWork: [
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#0d9488] to-[#0f766e]' },
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#1f2937] to-[#111827]' },
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#A11217] to-[#6D0E12]' },
    ],

    timeCommitment: '[PLACEHOLDER]',

    joinText: '[PLACEHOLDER]',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',

    testimonial: null,
    vibe: null,
  },
  {
    slug: 'dept-03',
    title: '小组三 [PLACEHOLDER]',
    eyebrow: '七小组 · 03',
    accent: 'from-[#7c3aed] to-[#4f46e5]',
    icon: Camera,

    mission: '[PLACEHOLDER]',

    description: '[PLACEHOLDER]',
    focusAreas: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    leadership: [
      { name: '[PLACEHOLDER]', role: '组长', photo: null },
      { name: '[PLACEHOLDER]', role: '副组长', photo: null },
    ],

    gains: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    fitTags: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    pastWork: [
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#7c3aed] to-[#4f46e5]' },
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#1f2937] to-[#111827]' },
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#0369a1] to-[#0c4a6e]' },
    ],

    timeCommitment: '[PLACEHOLDER]',

    joinText: '[PLACEHOLDER]',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',

    testimonial: null,
    vibe: null,
  },
  {
    slug: 'dept-04',
    title: '小组四 [PLACEHOLDER]',
    eyebrow: '七小组 · 04',
    accent: 'from-[#b45309] to-[#92400e]',
    icon: PenLine,

    mission: '[PLACEHOLDER]',

    description: '[PLACEHOLDER]',
    focusAreas: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    leadership: [
      { name: '[PLACEHOLDER]', role: '组长', photo: null },
      { name: '[PLACEHOLDER]', role: '副组长', photo: null },
    ],

    gains: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    fitTags: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    pastWork: [
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#b45309] to-[#92400e]' },
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#1f2937] to-[#111827]' },
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#A11217] to-[#6D0E12]' },
    ],

    timeCommitment: '[PLACEHOLDER]',

    joinText: '[PLACEHOLDER]',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',

    testimonial: null,
    vibe: null,
  },
  {
    slug: 'dept-05',
    title: '小组五 [PLACEHOLDER]',
    eyebrow: '七小组 · 05',
    accent: 'from-[#0369a1] to-[#0c4a6e]',
    icon: HeartHandshake,

    mission: '[PLACEHOLDER]',

    description: '[PLACEHOLDER]',
    focusAreas: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    leadership: [
      { name: '[PLACEHOLDER]', role: '组长', photo: null },
      { name: '[PLACEHOLDER]', role: '副组长', photo: null },
    ],

    gains: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    fitTags: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    pastWork: [
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#0369a1] to-[#0c4a6e]' },
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#1f2937] to-[#111827]' },
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#A11217] to-[#6D0E12]' },
    ],

    timeCommitment: '[PLACEHOLDER]',

    joinText: '[PLACEHOLDER]',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',

    testimonial: null,
    vibe: null,
  },
  {
    slug: 'dept-06',
    title: '小组六 [PLACEHOLDER]',
    eyebrow: '七小组 · 06',
    accent: 'from-[#374151] to-[#111827]',
    icon: Globe2,

    mission: '[PLACEHOLDER]',

    description: '[PLACEHOLDER]',
    focusAreas: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    leadership: [
      { name: '[PLACEHOLDER]', role: '组长', photo: null },
      { name: '[PLACEHOLDER]', role: '副组长', photo: null },
    ],

    gains: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    fitTags: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    pastWork: [
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#374151] to-[#111827]' },
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#A11217] to-[#6D0E12]' },
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#7c3aed] to-[#4f46e5]' },
    ],

    timeCommitment: '[PLACEHOLDER]',

    joinText: '[PLACEHOLDER]',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',

    testimonial: null,
    vibe: null,
  },
  {
    slug: 'dept-07',
    title: '小组七 [PLACEHOLDER]',
    eyebrow: '七小组 · 07',
    accent: 'from-[#be185d] to-[#9d174d]',
    icon: BookOpen,

    mission: '[PLACEHOLDER]',

    description: '[PLACEHOLDER]',
    focusAreas: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    leadership: [
      { name: '[PLACEHOLDER]', role: '组长', photo: null },
      { name: '[PLACEHOLDER]', role: '副组长', photo: null },
    ],

    gains: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    fitTags: [
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
      '[PLACEHOLDER]',
    ],

    pastWork: [
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#be185d] to-[#9d174d]' },
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#1f2937] to-[#111827]' },
      { title: '[PLACEHOLDER]', description: '[PLACEHOLDER]', image: null, accent: 'from-[#0369a1] to-[#0c4a6e]' },
    ],

    timeCommitment: '[PLACEHOLDER]',

    joinText: '[PLACEHOLDER]',
    ctaLabel: '联系小组负责人',
    ctaHref: 'mailto:pbcum@um.edu.my',

    testimonial: null,
    vibe: null,
  },
];

/** Look up a single department by slug. Returns undefined if not found. */
export function getDepartmentBySlug(slug) {
  return departments.find((d) => d.slug === slug);
}
