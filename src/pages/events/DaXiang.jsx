/**
 * DaXiang.jsx — 大相声 (event-03)
 *
 * Everything this page says lives in CONTENT below. Edit it freely — it affects
 * no other activity. The layout is shared (EventPageLayout) so all five pages
 * keep an identical structure; edit that file only when you want every activity
 * to change together.
 *
 * Any field you leave out simply is not rendered.
 */

import { Theater } from 'lucide-react';
import { EventPageLayout } from '../../components/shared/EventPageLayout';

const CONTENT = {
  slug: 'event-03',
  title: '活动三 [PLACEHOLDER]',
  eyebrow: '五特活 · 03',
  logo: '/tehuo_logos/DXlogo.png',
  accent: 'from-[#3F3A36] to-[#272421]',
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

};

export function DaXiang() {
  return <EventPageLayout content={CONTENT} />;
}
