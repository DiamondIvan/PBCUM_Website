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

import { Music } from 'lucide-react';
import { EventPageLayout } from '../../components/shared/EventPageLayout';

export const CONTENT = {
  /* ── Homepage card ─────────────────────────────────────────────────
     What the card on the homepage grid shows, and what its modal says.
     Kept here so a group is described in exactly one place — the card and
     the page cannot disagree, because they are the same object. */
  id: 'wute-05',
  slug: 'event-05',
  // Not yet written. Left empty deliberately: the card omits the line
  // entirely rather than showing scaffolding to visitors.
  teaser: '',
  detail: '',
  cta: '了解更多',
  accentHex: '#8B5E10', // Deep Bronze — the 博书有约 wordmark (#B46C18 across 72% of the mark)
  title: '博书有约',
  eyebrow: '五特活',
  logo: '/tehuo_logos/boshulogo.png',
  accent: 'from-[#8B5E10] to-[#563A0A]',
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

};

export function BoShu() {
  return <EventPageLayout content={CONTENT} />;
}
