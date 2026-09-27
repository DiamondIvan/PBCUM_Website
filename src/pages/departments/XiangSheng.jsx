/**
 * XiangSheng.jsx — 相声组 (dept-01)
 *
 * Everything this page says lives in CONTENT below. Edit it freely — it affects
 * no other group. The layout is shared (DeptPageLayout) so all seven pages keep
 * an identical structure; edit that file only when you want every group to
 * change together.
 *
 * Any field you leave out simply is not rendered, so there is no need to keep
 * empty sections around while the content is still being gathered.
 */

import { DeptPageLayout } from '../../components/shared/DeptPageLayout';

export const CONTENT = {
  /* ── Homepage card ─────────────────────────────────────────────────
     What the card on the homepage grid shows, and what its modal says.
     Kept here so a group is described in exactly one place — the card and
     the page cannot disagree, because they are the same object. */
  id: 'qxz-01',
  slug: 'dept-01',
  // The card's one line. Deliberately about the group — the 简介 below opens
  // by defining 相声 itself, and the two used to be the same sentence.
  teaser: '自 1992/1993 学年起，把相声搬上马大与校外的舞台。',
  detail:
    '相声组自 1992/1993 学年成立至今，以例常班培训演员，' +
    '并透过相声日、小型相声日（小相）与大型相声观摩会（大相）呈现作品，' +
    '也常受邀到校内外演出。\n' +
    '我们不需要你一开始就会说相声——只要你愿意开口。',
  cta: '了解小组',
  /* ── Hero ──────────────────────────────────────────────────────────── */
  title: '相声组',
  eyebrow: '七小组',
  logo: '/xiaozu_logos/xiangsheng.png',
  accentHex: '#1D6348', // Deep Forest Green — sampled from the logo
  accent: 'from-[#1D6348] to-[#123D2D]',

  // The hero line says what the group is. The 宗旨 is not repeated here —
  // it carries the pull quote in 宗旨与目标 instead, so each sentence in
  // the document is read exactly once.
  mission: '马大华文学会旗下七小组之一，至今已受邀参与无数场演出。',
  founded: '1992/1993 学年',
  // memberCount: '约 30 位组员',   // optional second hero chip
  // vibe: '爱说爱笑',              // optional word beside the eyebrow

  /* ── § 2 简介 ──────────────────────────────────────────────────────── */
  description:
    '相声是艺术性的聊天谈心说笑话，以组织包袱为显著特色的说话艺术。相声作为中华传统文化的重要内容，' +
    '从摹拟口技表演发展到今天的单口相声、对口相声、群口相声综合为一体的曲艺表演形式。而马大华文学会相声组' +
    '更是提倡以实践及学术理论学习相声。新生加入相声组即需要上课，从学习绕口令、说故事、朗读报告、练唱、练气' +
    '等等一直到学习传统贯口段子为实践课程。',

  /* ── § 3 组史 ──────────────────────────────────────────────────────── */
  history:
    '马来亚大学华文学会相声组成立于 1992/1993 学年，主要创办人为姚智祥与卢志兴，' +
    '姚智祥同时也是相声组的导师与顾问。第一次呈现表演是在马大生毕业会上。\n' +
    '最早期相声组附属于华文学会文娱股，如今是华文学会旗下的七小组之一，' +
    '至今受邀参与了无数场大大小小的演出。',
  founders: ['姚智祥', '卢志兴'],

  /* ── § 4 宗旨与目标 ────────────────────────────────────────────────── */
  purpose: '推广相声艺术，使相声更为普及化。',
  objectives: [
    '了解与发展相声文化',
    '发掘及培训更多杰出的相声演员',
    '鼓励大专生创作具本地风格的相声脚本',
    '提高大专生的社会醒觉',
  ],

  /* ── § 5 适合谁参与 ────────────────────────────────────────────────── */
  fitQuote: '我们不需要你一开始就会说相声，只要你愿意开口，我们就有故事可以一起说。',
  fitTags: [
    '喜欢把生活中的小事讲得特别有趣',
    '喜欢逗笑别人，也享受被逗笑',
    '不怕开口，愿意尝试站上舞台',
    '脑袋里常常冒出奇奇怪怪的点子',
    '想认识一群一起疯、一起练、一起上台的人',
  ],

  /* ── § 6 常年活动 ──────────────────────────────────────────────────────
     Names come from the source document. Adding a `description` to each makes
     the cards read far better than a bare name. Adding an `image` makes the
     card clickable and opens it in a lightbox. */
  activities: [
    { name: '相声迎新夜', description: '由相声组为新生举办的迎新活动，让大家在轻松、欢乐的氛围中认识相声的魅力，也认识相声组。' },
    { name: '例常班', description: '提供新生学习相声的平台，同时发掘及培训相声演员，在大相的平台上表演。' },
    { name: '相声日', description: '通过较小规模的演出与舞台实践，让新生在过程中不断磨练台风、提升表演能力，为未来参与小相和大相奠定基础。' },
    { name: '小型相声日（小相）', description: '由大相筹委举办的小型相声表演，是相声学员们登上大相舞台前磨练的平台。' },
    { name: '大型相声观摩会（大相）', description: '马大华文学会特别活动之一，也是相声组一年一度的大型活动，是相声组演员经过导师严格培训后验收成果的舞台。' },
    { name: '校内外演出', description: '询问其他大专或私人机构，获取在校外表演的机会，为学员争取更多的表演机会。' },
  ],

  /* ── § 6b 精彩相册 ──────────────────────────────────────────────────────
     Grouped by activity, so the album mirrors the 常年活动 list above.
     `span` controls the grid footprint; `alt` is what the lightbox titles the
     photo with. Captions are the activity name only — add a `description` to
     any entry to say more about that particular shot. */
  gallery: [
    { src: '/xiangsheng/gallery/大相1.jpg',      alt: '大型相声观摩会（大相）', category: '大相', span: 'md:col-span-2 md:row-span-2' },
    { src: '/xiangsheng/gallery/大相2.jpg',      alt: '大相演出现场',       category: '大相', span: '' },
    { src: '/xiangsheng/gallery/大相3.jpg',      alt: '大相舞台',          category: '大相', span: '' },
    { src: '/xiangsheng/gallery/小相1.jpg',      alt: '小型相声日（小相）',   category: '小相', span: 'md:row-span-2' },
    { src: '/xiangsheng/gallery/小相2.jpg',      alt: '小相演出',          category: '小相', span: '' },
    { src: '/xiangsheng/gallery/小相3.jpg',      alt: '小相现场',          category: '小相', span: '' },
    { src: '/xiangsheng/gallery/小相4.jpg',      alt: '小相合影',          category: '小相', span: 'md:col-span-2' },
    { src: '/xiangsheng/gallery/相声日1.jpg',     alt: '相声日',           category: '相声日', span: '' },
    { src: '/xiangsheng/gallery/相声日2.jpg',     alt: '相声日演出',        category: '相声日', span: '' },
    { src: '/xiangsheng/gallery/相声日3.jpg',     alt: '相声日现场',        category: '相声日', span: 'md:col-span-2' },
    { src: '/xiangsheng/gallery/例常班1.jpg',     alt: '例常班',           category: '例常班', span: '' },
    { src: '/xiangsheng/gallery/例常班2.jpg',     alt: '例常班练习',        category: '例常班', span: '' },
    { src: '/xiangsheng/gallery/相声迎新夜1.jpg',  alt: '相声迎新夜',        category: '迎新', span: 'md:col-span-2' },
    { src: '/xiangsheng/gallery/相声迎新夜2.jpg',  alt: '迎新夜演出',        category: '迎新', span: '' },
    { src: '/xiangsheng/gallery/校内外演出.jpg',   alt: '校内外演出',        category: '演出', span: '' },
    { src: '/xiangsheng/gallery/校内外演出2.jpg',  alt: '校外演出',          category: '演出', span: 'md:col-span-2' },
  ],

  /* ── § 6c 历年精彩时刻 ──────────────────────────────────────────────────
     Oldest first — this is the archive, and the span from 1996 to today is the
     point of it. `credit` is a photographer attribution and must stay with the
     photo it belongs to. */
  moments: [
    { year: '1996', image: '/xiangsheng/highlights/1996年到霹雳巴里文打演出.jpg', label: '到霹雳巴里文打演出' },
    { year: '1996', image: '/xiangsheng/highlights/1996年柔佛昔加挽讲演会.jpg',   label: '柔佛昔加挽讲演会' },
    { year: '2003', image: '/xiangsheng/highlights/2003年信口开河说相声.jpg',     label: '信口开河说相声' },
    {
      year: '2010',
      image: '/xiangsheng/highlights/2010马大华文学会 25周年相声之夜专场 （梁丹亮小姐摄影及提供）.jpg',
      label: '马大华文学会 25 周年相声之夜专场',
      credit: '摄影及提供：梁丹亮小姐',
    },
    { year: '2014', image: '/xiangsheng/highlights/2014大型相声观摩会（大相）.jpg', label: '大型相声观摩会（大相）' },
    { year: '2024', image: '/xiangsheng/highlights/2024年小型相声日（小相）.jpg',   label: '小型相声日（小相）' },
    { year: '2026', image: '/xiangsheng/highlights/2026大型相声观摩会（大相）.jpg', label: '大型相声观摩会（大相）' },
  ],

  /* A date here puts the group itself on the calendar; a `date` on any
     entry in activities[] above puts that one activity there instead.
     ISO 'YYYY-MM-DD', optional endDate, both omitted while unknown. */
  // date: '',
  // endDate: '',

  /* ── § 7 小组负责人 ────────────────────────────────────────────────── */
  leadership: [
    { name: '姚智祥', role: '创办人 · 导师与顾问', photo: '/xiangsheng/姚老师照片.jpg' },
    { name: '林家修', role: '相声组组长', photo: '/committee_photo/jiashiu.jpeg' },
  ],

  /* ── § 8 加入我们 ──────────────────────────────────────────────────── */
  joinText:
    '无论你是否有相声底子，只要你愿意开口，我们都欢迎你加入。填写报名表格，或透过社交媒体私讯我们了解详情。',
  ctaLabel: '报名加入相声组',
  ctaHref: 'https://forms.gle/epiti4K8kZExQKTB6',
  social: {
    facebook: 'https://www.facebook.com/pbcum.xiangsheng/',
    instagram: 'https://www.instagram.com/pbcum_xiangsheng/',
    instagramHandle: '@pbcum_xiangsheng',
  },
};

export function XiangSheng() {
  return <DeptPageLayout content={CONTENT} />;
}
