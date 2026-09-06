/**
 * QuanBian.jsx — 全辩 (event-04)
 *
 * Everything this page says lives in CONTENT below. Edit it freely — it affects
 * no other activity. The layout is shared (EventPageLayout) so all five pages
 * keep an identical structure; edit that file only when you want every activity
 * to change together.
 *
 * Any field you leave out simply is not rendered.
 */

import { Trophy } from 'lucide-react';
import { EventPageLayout } from '../../components/shared/EventPageLayout';

export const CONTENT = {
  /* ── Homepage card ─────────────────────────────────────────────────
     What the card on the homepage grid shows, and what its modal says.
     Kept here so a group is described in exactly one place — the card and
     the page cannot disagree, because they are the same object. */
  id: 'wute-04',
  slug: 'event-04',
  teaser: '立于前思，辩向新知',
  detail: '第20届全国大专辩论会',
  cta: '了解更多',
  accentHex: '#1C2B4A', // PBCUM Navy — QBlogo (全辩) is fully greyscale; brand fallback
  title: '全国大专辩论会【全辩】',
  eyebrow: '五特活 · 04',
  logo: '/tehuo_logos/QBlogo.png',
  accent: 'from-[#1C2B4A] to-[#111B2E]',
  icon: Trophy,
  date: '// TODO',
  location: '// TODO',
  hook: '// TODO',
  intro: '全国大专辩论会简介 \n\n 全国大专辩论会（简称"全辩"），是马来西亚首个全国性两年一度的大专级别华语辩论比赛。1988 年创立至今，是马来西亚迄今历史最悠久的华语辩论比赛，今年已迈入第 38 个年头。',
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

};

export function QuanBian() {
  return <EventPageLayout content={CONTENT} />;
}
