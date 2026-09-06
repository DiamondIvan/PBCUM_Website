/**
 * XXY.jsx — 新家 (event-01)
 *
 * Everything this page says lives in CONTENT below. Edit it freely — it affects
 * no other activity. The layout is shared (EventPageLayout) so all five pages
 * keep an identical structure; edit that file only when you want every activity
 * to change together.
 *
 * Any field you leave out simply is not rendered.
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
  teaser: '一句话勾起好奇心的预告文案。[PLACEHOLDER]',
  detail: '[PLACEHOLDER — 请在此填写活动的详细介绍，约 2–3 句话。]',
  cta: '了解更多',
  accentHex: '#4F7D57', // Sage Green — the 新家 characters and illustration linework
  title: '活动一 [PLACEHOLDER]',
  eyebrow: '五特活 · 01', // TODO: replace with real category, e.g. "年度旗舰活动"
  logo: '/tehuo_logos/xxylogo.png',
  accent: 'from-[#4F7D57] to-[#314E36]',
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

};

export function XXY() {
  return <EventPageLayout content={CONTENT} />;
}
