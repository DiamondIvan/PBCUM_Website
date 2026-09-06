/**
 * QZH.jsx — 全中华 (event-02)
 *
 * Everything this page says lives in CONTENT below. Edit it freely — it affects
 * no other activity. The layout is shared (EventPageLayout) so all five pages
 * keep an identical structure; edit that file only when you want every activity
 * to change together.
 *
 * Any field you leave out simply is not rendered.
 */

import { MicVocal } from 'lucide-react';
import { EventPageLayout } from '../../components/shared/EventPageLayout';

export const CONTENT = {
  /* ── Homepage card ─────────────────────────────────────────────────
     What the card on the homepage grid shows, and what its modal says.
     Kept here so a group is described in exactly one place — the card and
     the page cannot disagree, because they are the same object. */
  id: 'wute-02',
  slug: 'event-02',
  teaser: '贰续华章，以梦为帆',
  detail: '第21届全国中学华文学会生活营 \n 续章•扬帆',
  cta: '了解更多',
  accentHex: '#A84830', // Terracotta — the brick-red top of the banner (fades to gold below)
  title: '第21届全国中学华文学会生活营\n续章·扬帆',
  eyebrow: '五特活 · 02',
  logo: '/tehuo_logos/qzhlogo.png',
  accent: 'from-[#A84830] to-[#682D1E]',
  icon: MicVocal,
  date: '// TODO',
  location: '// TODO',
  hook: '// TODO',
  intro: '全国中学华文学会生活营简介\n\n全国中学华文学会生活营（全中华）是马大华文学会旗下的特别活动。其宗旨是为了提高中学华文学会的素质。营会以游戏与课程并重的形式进行，以培养中学生的团队精神、领导能力及个人素养。课程涵盖个人提升、组织运作、中华文化与华教，推动营员珍惜母语及多元文化。全中华以全国巡回形式举办，为各地中学生提供交流、学习与成长的平台。《续章·扬帆》承接二十载精神，续写新篇章，扬起青春之帆，勇敢迈向未来。 ',
  /**
   * tourStops — full-year timeline for 全中华.
   * Each entry: { label, date, location }
   *   label    — phase / milestone name, e.g. '迎新日'
   *   date     — DD.MM.YYYY for single-day, DD.MM.YYYY-DD.MM.YYYY for ranges.
   *              Use '待定' if not yet confirmed.
   *   location — venue name; use '待定' if TBC (hidden in UI when 待定).
   *
   * Status badge is auto-derived at render time:
   *   future start date              → 即将举行 (green)
   *   start ≤ today ≤ end            → 进行中   (blue, pulsing dot)
   *   end date past                  → 已结束   (muted)
   *   unparseable / '待定'           → 待定     (grey)
   */
  tourStops: [
    { label: '迎新日', date: '26.10.2026', location: '待定' },
    { label: '培训营1.0', date: '30.10.2026-1.11.2026', location: '待定' },
    { label: '培训营2.0', date: '21.11.2026-22.11.2026', location: '待定' },
    { label: '北马分站', date: '4.12.2026-6.12.2026', location: '待定' },
    { label: '南马分站', date: '26.12.2026-28.12.2026', location: '待定' },
    { label: '筹备营', date: '15.2.2027-24.2.2027', location: '待定' },
    { label: '总站', date: '11.3.2027-14.3.2027', location: '待定' },
  ],
  gallery: [
    {
      src: '/qzh/gallery/全中华20北马分站大合照.JPG',
      alt: '北马分站大合照',
      category: '北马分站',
      tone: 'from-[#1f2937] to-[#111827]',
      span: 'md:col-span-2 md:row-span-2',
      description: '北马分站汇聚了来自各中学的热血营员与筹委，共同留下了意义非凡的全体合影。',
      detail: '第20届全中华 · 北马分站圆满落幕，定格属于北马营员的青春印记。',
    },
    {
      src: '/qzh/gallery/全中华20南马分站大合照.JPG',
      alt: '南马分站大合照',
      category: '南马分站',
      tone: 'from-[#A11217] to-[#6D0E12]',
      span: 'md:row-span-2',
      description: '南马分站全体营员与工委齐聚一堂，展现青年人的蓬勃朝气与凝聚力。',
      detail: '跨越地域的相聚，为南马中学生播下中华文化的种子。',
    },
    {
      src: '/qzh/gallery/全中华20北马分站开幕.JPG',
      alt: '北马分站开幕典礼',
      category: '开幕典礼',
      tone: 'from-[#374151] to-[#111827]',
      span: '',
      description: '隆重的开幕典礼拉开北马分站序幕，嘉宾与营员共同见证生活营正式启动。',
      detail: '薪火相传，点亮全中华巡回生活营的精彩篇章。',
    },
    {
      src: '/qzh/gallery/全中华20北马分站水站大合照.JPG',
      alt: '北马分站水站大合照',
      category: '活动现场',
      tone: 'from-[#0369a1] to-[#0c4a6e]',
      span: '',
      description: '活力四射的大型水战与户外游戏环节，营员们在欢笑与协作中建立深厚友谊。',
      detail: '在汗水与欢呼中释放青春活力，打破隔阂、并肩作战。',
    },
    {
      src: '/qzh/gallery/全中华20南马分站开幕.JPG',
      alt: '南马分站开幕典礼',
      category: '开幕典礼',
      tone: 'from-[#7c3aed] to-[#4f46e5]',
      span: '',
      description: '南马分站开幕典礼现场，庄严而充满期待的启航时刻。',
      detail: '鼓声雷动，旗帜飞扬，开启三天两夜充实的营会时光。',
    },
    {
      src: '/qzh/gallery/全中华20南马分站水站大合照.JPG',
      alt: '南马分站水站大合照',
      category: '活动现场',
      tone: 'from-[#374151] to-[#111827]',
      span: '',
      description: '南马分站刺激的水上关卡挑战，见证了团队默契与拼搏精神的绽放。',
      detail: '挥洒青春热情，挑战未知，铸就最难忘的团队回忆。',
    },
    {
      src: '/qzh/gallery/全中华20总站大合照.jpg',
      alt: '总站大合照',
      category: '总站',
      tone: 'from-[#1f2937] to-[#111827]',
      span: 'md:col-span-2',
      description: '全中华总站大团圆，全国各地优秀中学生与筹委共聚马大校园，谱写年度辉煌终章。',
      detail: '汇聚全国力量，为这一年的全中华巡回画上最圆满的句号。',
    },
    {
      src: '/qzh/gallery/全中华20总站开幕.jpg',
      alt: '总站开幕典礼',
      category: '开幕典礼',
      tone: 'from-[#A11217] to-[#6D0E12]',
      span: '',
      description: '全中华总站开幕仪式，迎风展旗，汇聚来自全国的华教与文化热情。',
      detail: '二十载初心不改，以梦为帆，携手共创崭新篇章。',
    },
    {
      src: '/qzh/gallery/全中华20总站水站大合照.jpg',
      alt: '总站水站大合照',
      category: '活动现场',
      tone: 'from-[#374151] to-[#111827]',
      span: '',
      description: '总站压轴水站活动，全体大合照记录下最灿烂的笑容与难忘的狂欢瞬间。',
      detail: '热血不熄，友谊长存，这是属于全中华人的专属印记。',
    },
  ],
  highlights: [
    {
      label: '筹委风采',
      caption: '新一届筹委正式集结，满怀热忱，携手迈向全中华21。',
      image: '/qzh/highlights/全中华20筹委合照.jpeg',
      description: '新一届筹委正式集结，满怀热忱与使命感，携手迈向全中华21崭新征程。',
      detail: '筹备团队由热心华教与文化传承的马大学生组成，分工合作、各司其职。',
    },
    {
      label: '新筹委见面会',
      caption: '初心相聚，破冰启程，共同开启全中华的新征程。',
      image: '/qzh/highlights/新筹委见面会.JPG',
      description: '新筹委会成员首次相聚破冰，在交流与欢声笑语中奠定紧密合作的基石。',
      detail: '初识的腼腆化为并肩同行的默契，共同为即将到来的全国巡回做准备。',
    },
    {
      label: '培训营互动',
      caption: '在游戏与破冰中拉近彼此距离，凝聚团队向心力。',
      image: '/qzh/highlights/培训营.JPG',
      description: '两阶段培训营中的破冰与团队建设活动，通过情境挑战锤炼临场应变能力。',
      detail: '寓教于乐，提升营员沟通力与团队协同作战能力。',
    },
    {
      label: '课程与实践',
      caption: '充实学员组织运作能力与中华文化素养，学以致用。',
      image: '/qzh/highlights/培训营 (1).JPG',
      description: '涵盖领导力、组织管理、文案企划与中华文化传承的多元化课程分享。',
      detail: '导师倾囊相授，理论与实践并重，助力中学生全面成长。',
    },
    {
      label: '筹备营记忆',
      caption: '筹备营是总站前的最后冲刺，每一个细节都饱含心血。',
      image: '/qzh/highlights/筹备营.jpg',
      description: '总站前的深度筹备营，通宵达旦地完善每个环节，只为呈现最完美的营会。',
      detail: '汗水与坚持的结晶，汇聚成舞台上最耀眼的光芒。',
    },
  ],
  closingLine: '贰续华章，以梦为帆',
  ctaLabel: '关注下一场活动',
  ctaHref: '#footer',

};

export function QZH() {
  return <EventPageLayout content={CONTENT} />;
}
