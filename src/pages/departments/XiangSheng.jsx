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
  teaser: '一句话说明该小组的核心工作。[PLACEHOLDER]',
  detail: '[PLACEHOLDER — 请在此填写小组介绍：职责范围、适合谁加入，约 2–3 句话。]',
  cta: '了解小组',
  /* ── Hero ──────────────────────────────────────────────────────────── */
  title: '相声组',
  eyebrow: '七小组 · 01',
  logo: '/xiaozu_logos/xiangsheng.png',
  accentHex: '#1D6348', // Deep Forest Green — sampled from the logo
  accent: 'from-[#1D6348] to-[#123D2D]',

  mission: '推广相声艺术，使相声更为普及化。',
  founded: '1992/1993 学年',
  // memberCount: '约 30 位组员',   // optional second hero chip
  // vibe: '爱说爱笑',              // optional word beside the eyebrow

  /* ── § 2 简介 ──────────────────────────────────────────────────────── */
  description:
    '相声是艺术性的聊天谈心说笑话，以组织包袱为显著特色的说话艺术。\n' +
    '马大华文学会相声组是学会旗下七小组之一，至今已受邀参与无数场演出。',

  /* ── § 3 组史 ──────────────────────────────────────────────────────── */
  history:
    '马来亚大学华文学会相声组成立于 1992/1993 学年，第一次表演在马大生毕业会上举行。\n' +
    '最早期相声组附属于华文学会文娱股，如今是华文学会旗下的七小组之一。',
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
  fitTags: ['喜欢说有趣故事', '爱逗笑他人', '不怕上台', '创意十足', '想加入有凝聚力的团队'],

  /* ── § 6 常年活动 ──────────────────────────────────────────────────────
     Names come from the source document. Adding a `description` to each makes
     the cards read far better than a bare name. Adding an `image` makes the
     card clickable and opens it in a lightbox. */
  activities: [
    { name: '相声迎新夜' },
    { name: '例常班' },
    { name: '相声日' },
    { name: '小型相声日（小相）' },
    { name: '大型相声观摩会（大相）' },
    { name: '校内外演出' },
  ],

  /* ── § 7 小组负责人 ────────────────────────────────────────────────── */
  leadership: [
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
