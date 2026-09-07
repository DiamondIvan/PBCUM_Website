/**
 * WenHua.jsx — 文化组 (dept-02)
 *
 * Everything this page says lives in CONTENT below. Edit it freely — it affects
 * no other group. The layout is shared (DeptPageLayout) so all seven pages keep
 * an identical structure; edit that file only when you want every group to
 * change together.
 *
 * Any field you leave out simply is not rendered, so there is no need to keep
 * empty sections around while the content is still being gathered.
 *
 * 文化组 is the one group that does not use `gallery` / `moments`. Its
 * photographs belong to three separate things — the 例常班, the 文艺汇演 and the
 * 嘉年华 — so they are kept in three separately-titled sections via
 * `photoSections`, matching the three folders under public/wenhuazu/.
 */

import { DeptPageLayout } from '../../components/shared/DeptPageLayout';

export const CONTENT = {
  /* ── Homepage card ─────────────────────────────────────────────────
     What the card on the homepage grid shows, and what its modal says.
     Kept here so a group is described in exactly one place — the card and
     the page cannot disagree, because they are the same object. */
  id: 'qxz-02',
  slug: 'dept-02',
  teaser: '设有书法、篆刻与水墨画三大例常班，让会员亲手触碰中华文化的魅力。',
  detail:
    '文化组秉持提高会员对中华文化的认知、培养其热忱与文化修养为宗旨。' +
    '组内设有书法班、篆刻班与水墨画班三大例常班，徽章背景的三种颜色正是它们的象征。\n' +
    '对外，文化组以文艺汇演、书画展与嘉年华，让中华文化在校园里焕发新的光彩。',
  cta: '了解小组',

  /* ── Hero ──────────────────────────────────────────────────────────── */
  title: '文化组',
  eyebrow: '七小组',
  logo: '/xiaozu_logos/wenhua.png',
  accentHex: '#B8301A', // sampled from the logo — see scripts/logo-colors.py
  accent: 'from-[#B8301A] to-[#721E10]',

  // Condensed from the 宗旨; the source gives no separate tagline.
  mission: '提高会员对中华文化的认识，培养其热忱与文化修养。',
  // founded: '',   // the source gives no founding year — see § 3 below

  /* ── § 2 简介 ──────────────────────────────────────────────────────── */
  description:
    '马来亚大学华文学会文化组是马大华文学会旗下的七小组之一。' +
    '马来亚大学华文学会文化组一直秉持着提高华文学会会员对中华文化的认知，' +
    '并培养其热忱和提高会员的文化修养为宗旨运行。' +
    '文化的传承不仅仅是一种形式上的延续，更是精神的承载。\n' +
    '为此，文化组设立了例常班，包括书法班、篆刻班和水墨画班。' +
    '例常班除了让会员对文化有更深入的理解，还为他们提供了一个接触和体验中华文化魅力的平台。' +
    '文化组徽章的背景由三种颜色渲染而成，象征着这三大例常班，即书法、篆刻和水墨画。\n' +
    '文化组的活动也涵盖了文艺汇演、书画展和嘉年华等。' +
    '文化组依托多样的活动形式，继续秉持文化传承的使命，让中华文化在校园内焕发出新的光彩，' +
    '为每位学员提供一个深入学习和体验中华艺术的机会。',

  /* ── § 3 组史 ──────────────────────────────────────────────────────────
     TODO — 文化组简史. Fill these in and the section appears by itself; while
     they are empty nothing renders, so a visitor never sees the gap.

       founded  '1998/1999 学年'   -> shows as a chip in the hero
       history  the founding story -> the 组史 card
       founders ['名字', '名字']    -> name chips under it              */
  history: '',
  founders: [],

  /* ── § 4 宗旨与目标 ────────────────────────────────────────────────────
     The source states one 宗旨 and no separate 目标, so `objectives` stays
     empty and the list under the pull quote simply does not render. */
  purpose: '提高会员对中华文化的认识，并培养其热忱以及提高会员的文化修养。',
  objectives: [],

  /* ── § 5 适合谁参与 ──────────────────────────────────────────────────── */
  fitQuote: '',
  fitTags: [
    '对中华文化有兴趣的人',
    '喜欢艺术、创作的人',
    '想尝试新东西的人',
  ],

  /* ── § 6 常年活动 ──────────────────────────────────────────────────────
     The three things the group runs. Each carries a photograph, so the card
     opens into a lightbox — and each one has its own photo section further
     down the page. */
  activities: [
    {
      name: '书法、篆刻、水墨画例常班',
      description: '三大例常班常年开课，从执笔、奏刀到落墨，一堂一堂地带会员入门。',
      image: '/wenhuazu/例常班/书法班-课堂.jpg',
    },
    {
      name: '《流光筑韵》文艺汇演',
      description: '相声、武术、华乐与摇篮手同台，一晚看尽中华文化的不同面向。',
      image: '/wenhuazu/流光筑韵文艺汇演/大合照.jpg',
    },
    {
      name: '《华光艺影》嘉年华',
      description: '与华文班协办，把变脸、糖画、中国结与猜灯谜搬进商场，向公众敞开。',
      image: '/wenhuazu/华光艺影嘉年华/舞台背景板.jpg',
    },
  ],

  /* ── § 6d 分组相册 ─────────────────────────────────────────────────────
     Three sections, one per folder under public/wenhuazu/. 文化组 does not use
     the single `gallery` + `moments` pair the other groups use: its photographs
     belong to three distinct programmes, and pooling them would imply they are
     interchangeable.

     To add a photograph: drop the file in the right folder and add a line here.
     `category` is the pill shown on the tile — for 例常班 it names which of the
     three classes the photo is from, which is the one thing a visitor cannot
     tell from the picture alone.

     Spans are chosen so each grid closes into a clean rectangle on desktop
     (3 columns): 例常班 and 嘉年华 are 15 cells over 5 rows, 文艺汇演 12 over 4. */
  photoSections: [
    {
      eyebrow: '例常班',
      title: '一笔、一刀、一墨。',
      description:
        '书法班、篆刻班与水墨画班常年开课，由老师带着从最基础的一笔一画练起。',
      photos: [
        { src: '/wenhuazu/例常班/书法班-课堂.jpg',       alt: '书法班课堂',       category: '书法班',   span: 'md:col-span-2 md:row-span-2' },
        { src: '/wenhuazu/例常班/篆刻班-奏刀.jpg',       alt: '奏刀刻印',         category: '篆刻班',   span: 'md:row-span-2' },
        { src: '/wenhuazu/例常班/篆刻班-讲解.jpg',       alt: '篆刻班讲解',       category: '篆刻班',   span: '' },
        { src: '/wenhuazu/例常班/篆刻班-钤印.jpg',       alt: '钤印',             category: '篆刻班',   span: '' },
        { src: '/wenhuazu/例常班/水墨画班-老师示范.jpg', alt: '老师示范',         category: '水墨画班', span: '' },
        { src: '/wenhuazu/例常班/水墨画班-老师指导.jpg', alt: '老师指导',         category: '水墨画班', span: '' },
        { src: '/wenhuazu/例常班/水墨画班-画金鱼.jpg',   alt: '画金鱼',           category: '水墨画班', span: '' },
        { src: '/wenhuazu/例常班/水墨画班-金鱼团扇.jpg', alt: '金鱼团扇',         category: '水墨画班', span: '' },
        { src: '/wenhuazu/例常班/水墨画班-写意团扇.jpg', alt: '写意团扇',         category: '水墨画班', span: '' },
        { src: '/wenhuazu/例常班/水墨画班-学员作品.jpg', alt: '学员作品',         category: '水墨画班', span: '' },
        { src: '/wenhuazu/例常班/水墨画班-学员合照.jpg', alt: '水墨画班学员合照', category: '水墨画班', span: '' },
      ],
    },
    {
      eyebrow: '《流光筑韵》文艺汇演',
      title: '一晚，四种中华。',
      description:
        '相声、武术、华乐与摇篮手轮番上台，场外还摆着挥春与文创摊位。',
      photos: [
        { src: '/wenhuazu/流光筑韵文艺汇演/大合照.jpg',     alt: '《流光筑韵》大合照', category: '文艺汇演', span: 'md:col-span-2 md:row-span-2' },
        { src: '/wenhuazu/流光筑韵文艺汇演/相声.jpg',       alt: '相声表演',           category: '演出',     span: '' },
        { src: '/wenhuazu/流光筑韵文艺汇演/摇篮手.jpg',     alt: '摇篮手演出',         category: '演出',     span: '' },
        { src: '/wenhuazu/流光筑韵文艺汇演/武术.jpg',       alt: '武术表演',           category: '演出',     span: '' },
        { src: '/wenhuazu/流光筑韵文艺汇演/华乐.jpg',       alt: '华乐演奏',           category: '演出',     span: '' },
        { src: '/wenhuazu/流光筑韵文艺汇演/挥春摊位.jpg',   alt: '挥春摊位',           category: '摊位',     span: '' },
        { src: '/wenhuazu/流光筑韵文艺汇演/文创摊位.jpg',   alt: '文创摊位',           category: '摊位',     span: '' },
        { src: '/wenhuazu/流光筑韵文艺汇演/打卡相框.jpg',   alt: '打卡相框',           category: '布置',     span: '' },
        { src: '/wenhuazu/流光筑韵文艺汇演/筹委大合照.jpg', alt: '筹委大合照',         category: '筹委',     span: '' },
      ],
    },
    {
      eyebrow: '《华光艺影》嘉年华',
      title: '把中华文化搬出校园。',
      description:
        '与华文班协办的嘉年华，在 KL Gateway Mall 中庭免费开放一整天，' +
        '变脸、糖画、中国结与猜灯谜都摆到了公众面前。',
      photos: [
        { src: '/wenhuazu/华光艺影嘉年华/全体大合照.jpg',   alt: '《华光艺影》全体大合照', category: '嘉年华', span: 'md:col-span-2 md:row-span-2' },
        { src: '/wenhuazu/华光艺影嘉年华/舞台背景板.jpg',   alt: '主舞台背景板',           category: '嘉年华', span: 'md:row-span-2' },
        { src: '/wenhuazu/华光艺影嘉年华/变脸.jpg',         alt: '变脸表演',               category: '演出',   span: '' },
        { src: '/wenhuazu/华光艺影嘉年华/二十四节令鼓.jpg', alt: '二十四节令鼓',           category: '演出',   span: '' },
        { src: '/wenhuazu/华光艺影嘉年华/歌唱表演.jpg',     alt: '歌唱表演',               category: '演出',   span: '' },
        { src: '/wenhuazu/华光艺影嘉年华/歌唱表演2.jpg',    alt: '歌唱表演（二）',         category: '演出',   span: '' },
        { src: '/wenhuazu/华光艺影嘉年华/糖画.jpg',         alt: '糖画摊位',               category: '摊位',   span: '' },
        { src: '/wenhuazu/华光艺影嘉年华/中国结.jpg',       alt: '中国结摊位',             category: '摊位',   span: '' },
        { src: '/wenhuazu/华光艺影嘉年华/猜灯谜.jpg',       alt: '猜灯谜',                 category: '摊位',   span: '' },
        { src: '/wenhuazu/华光艺影嘉年华/打卡布景.jpg',     alt: '打卡布景',               category: '布置',   span: '' },
        { src: '/wenhuazu/华光艺影嘉年华/筹委大合照.jpg',   alt: '筹委大合照',             category: '筹委',   span: '' },
      ],
    },
  ],

  /* A date here puts the group itself on the calendar; a `date` on any
     entry in activities[] above puts that one activity there instead.
     ISO 'YYYY-MM-DD', optional endDate, both omitted while unknown.

     Two dates are legible from the photographs but not from the source text,
     so they are left commented out rather than guessed onto the calendar:
       ·《华光艺影》嘉年华 — the backdrop reads "27 WEDNESDAY MAY, 10:00 AM –
         8:30 PM, Central Piazza (LG1), KL Gateway Mall". 27 May falls on a
         Wednesday in 2026, so '2026-05-27' — confirm the year and it can go
         on the activity above.
       ·《流光筑韵》文艺汇演 — one photo is named IMG_20251221_…, i.e. taken on
         21 Dec 2025. That is when the photo was shot, which may or may not be
         the day of the 汇演 itself.                                        */
  // date: '',
  // endDate: '',

  /* ── § 7 小组负责人 ────────────────────────────────────────────────────
     Phone numbers from the source are deliberately not published — contact
     routes through the group's social accounts instead, as on the other pages. */
  leadership: [
    { name: '伍詠诗', role: '文化组组长' },
    { name: '陈绮媚', role: '文化组副组长' },
  ],

  /* ── § 8 加入我们 ──────────────────────────────────────────────────────
     No recruitment form URL was supplied, so `ctaHref` stays empty and the
     button does not render; the social links below carry the enquiry instead.
     Paste the form URL in and the button appears by itself. */
  joinText:
    '想学书法、篆刻或水墨画，或者只是想试点新东西？' +
    '欢迎透过下方的社交媒体私讯我们，了解例常班的开课时间与报名方式。',
  ctaLabel: '报名加入文化组',
  ctaHref: '',
  social: {
    facebook: 'https://www.facebook.com/pbcumculture/',
    instagram: 'https://www.instagram.com/pbcum_culture/',
    instagramHandle: '@pbcum_culture',
  },
};

export function WenHua() {
  return <DeptPageLayout content={CONTENT} />;
}
