/**
 * ShengXun.jsx — 升讯团 (dept-06)
 *
 * Everything this page says lives in CONTENT below. Edit it freely — it affects
 * no other group. The layout is shared (DeptPageLayout) so all seven pages keep
 * an identical structure; edit that file only when you want every group to
 * change together.
 *
 * Any field you leave out simply is not rendered, so there is no need to keep
 * empty sections around while the content is still being gathered.
 *
 * Like 文化组, this page uses `photoSections` rather than a single `gallery`:
 * eight sections, one per numbered folder under public/shengxun/, in the order
 * the folders are numbered.
 */

import { DeptPageLayout } from '../../components/shared/DeptPageLayout';

export const CONTENT = {
  /* ── Homepage card ─────────────────────────────────────────────────
     What the card on the homepage grid shows, and what its modal says.
     Kept here so a group is described in exactly one place — the card and
     the page cannot disagree, because they are the same object. */
  id: 'qxz-06',
  slug: 'dept-06',
  teaser: '把马大的升学资讯整理清楚，交到每一位新生手上。',
  detail:
    '升讯团为马大新生与在籍生提供全面、准确、可靠而实用的升学资讯，' +
    '从入学手续、宿舍、选课到校园生活，都以华英双语整理成看得懂的内容。\n' +
    '对外，也为有意报考马大的中学生与预科生说明科系、申请程序与校园生活。',
  cta: '了解小组',

  /* ── Hero ──────────────────────────────────────────────────────────── */
  title: '升讯团',
  eyebrow: '七小组',
  logo: '/xiaozu_logos/shengxun.png',
  accentHex: '#1C2B4A', // sampled from the logo — see scripts/logo-colors.py
  accent: 'from-[#1C2B4A] to-[#111B2E]',

  mission: '为马大新生提供全面、准确、可靠及实用的升学资讯与服务。',
  founded: '2023／2024 年',

  /* ── § 2 简介 ──────────────────────────────────────────────────────── */
  description:
    '马大华文学会升学资讯团（升讯团）隶属于马大华文学会七小组，' +
    '服务对象以马来亚大学新生及在籍生为主。\n' +
    '升讯团把散落各处的升学与校园资讯整理、核实，再以华英双语发布，' +
    '让新生不必在混乱的消息里摸索，就能掌握入学所需的资讯与手续。',

  /* ── § 3 组史 ──────────────────────────────────────────────────────── */
  history:
    '升讯团的前身是华文学会学记团，在第三十八届华文学会期间因缺乏团委而停摆。' +
    '为了整合及提升马来亚大学升学资讯的传播工作，' +
    '第三十七届华文学会执委会主席何凯陞学长提出成立升讯团的构想，' +
    '并由学长担任第一届马大华文学会升讯团团长。\n' +
    '升讯团于 2023 至 2024 年间正式成立，至今已是第四年（26/27 届）。',
  founders: ['何凯陞'],

  /* ── § 4 宗旨与目标 ────────────────────────────────────────────────────
     The first of the five 宗旨 carries the pull quote; the other four sit
     beneath it as the objectives. */
  purpose: '为马大新生提供全面、准确、可靠及实用的升学资讯与服务。',
  objectives: [
    '帮助新生快速掌握入学所需资讯及手续，减少资讯混乱，更顺利地适应马大生活，助力他们顺利规划未来学业与生活',
    '提供最新及正确的马大资讯于马大生',
    '为有意报考马来亚大学的中学生及预科生提供准确、全面及最新的升学资讯，协助他们了解马来亚大学的科系、申请程序及校园生活，做好升学规划',
    '持续建立具有公信力及影响力的资讯品牌',
  ],

  /* ── § 5 适合谁参与 ──────────────────────────────────────────────────── */
  fitQuote: '',
  fitTags: [
    '喜欢分享及传递正确资讯，愿意为同学解答校园事务相关疑问',
    '对校园事务及资讯敏感，愿意持续关注学校的最新消息',
    '热衷于分享升学资讯于学弟妹，将自己的升学经验倾囊相授',
    '有责任感',
    '擅长把复杂资讯转化为简单易懂且具有吸引力的内容',
    '愿意花时间整理及核实资讯',
    '喜欢设计、摄影或制作内容',
    '外向、喜欢和人交流，主持校园采访',
  ],

  /* ── § 6 常年活动 ──────────────────────────────────────────────────────
     The ten things listed under 以往活动. Descriptions are only written where
     the source or the photographs actually say something — the rest carry the
     name alone rather than a sentence invented to fill the card. */
  activities: [
    {
      name: '马大新生伴航计划',
      description: '《伴航记》系列帖子，从接受通知书、Self-Enrol、创建 Siswamail 到迎新周必备物品，一步一步带新生走完入学手续。',
      image: '/shengxun/3-各系列双语帖子/马大新生伴航计划.jpg',
    },
    {
      name: '线上升学讲座',
      description: '主要内容为时间表编排技巧与抢课疑问解答，由升讯团团委主讲。',
      image: '/shengxun/1-线上升学讲座/线上升学讲座.jpg',
    },
    {
      name: '团委迎新',
      description: '新一届团委的迎新与联谊，还有圣诞节交换礼物。',
      image: '/shengxun/2-团委迎新与联谊/团委迎新.jpg',
    },
    {
      name: '各系列资讯帖子',
      description: '新生指南、马大生必知系列、马大宿舍手册、全年资讯更新、学院与科系介绍系列等。',
      image: '/shengxun/3-各系列双语帖子/马大生必知系列.jpg',
    },
    {
      name: '双语资讯发布',
      description: '帖子内容涵盖华语及英语，让资讯不只到得了华文源流的同学手上。',
      image: '/shengxun/3-各系列双语帖子/马大校园生活系列.jpg',
    },
    {
      name: '街访系列',
      image: '/shengxun/4-街访系列/街访系列.jpg',
    },
    {
      name: '马大科系探索会 2026',
      description: '线上举行，邀来各院系的分享嘉宾逐一介绍自己的科系。',
      image: '/shengxun/5-马大科系探索会2026/大合照(1).jpg',
    },
    {
      name: '升讯 x 技升联谊交流会',
      description: '与技升的联谊交流，设有交流环节与游戏环节。',
      image: '/shengxun/6-升讯x技升联谊交流会/合照.jpg',
    },
    {
      name: '《宿你最会拍》住宿短视频征集计划',
      description: '向马大生征集住宿短视频，带大家走进 KK1、KK2、KK3、KK13 等宿舍看真实的居住环境，作品上线后公布得奖名单。',
      image: '/shengxun/7-宿你最会拍/短视频征集计划.jpg',
    },
    {
      name: '《宿你最会拍》特辑：校外住宿篇',
      description: '七篇校外住宿介绍帖子，从 Pacific Towers、University Tower 到 KL Gateway Residences，逐一整理位置、价位与看房时该注意的事。',
      image: '/shengxun/7-宿你最会拍/校外住宿篇特辑.jpg',
    },
  ],

  /* A date here puts the group itself on the calendar; a `date` on any
     entry in activities[] above puts that one activity there instead.
     ISO 'YYYY-MM-DD', optional endDate, both omitted while unknown.

     The 26/27 届 recruitment deadline (18 Oct 2026, read off the poster) is on
     the calendar via siteData's otherEvents instead — it is a deadline, not an
     activity, and would read oddly as a card in the 常年活动 grid above. */
  // date: '',
  // endDate: '',

  /* ── § 6d 分组相册 ─────────────────────────────────────────────────────
     Eight sections, one per numbered folder under public/shengxun/, in folder
     order. Spans are chosen so every grid closes into a clean rectangle on
     desktop (3 columns) — see the cell counts noted on each section. */
  photoSections: [
    {
      eyebrow: '线上升学讲座',
      title: '把抢课讲清楚。',
      description: '时间表编排技巧与抢课疑问解答，线上开讲，一百多位马大生在线。',
      photos: [ // 3 cells / 1 row
        { src: '/shengxun/1-线上升学讲座/线上升学讲座.jpg',         alt: '升学讲座开场',   category: '线上升学讲座', span: '' },
        { src: '/shengxun/1-线上升学讲座/线上升学讲座分享.jpg',     alt: '讲座分享环节',   category: '线上升学讲座', span: '' },
        { src: '/shengxun/1-线上升学讲座/线上升学讲座大合照环节.jpg', alt: '讲座大合照',   category: '线上升学讲座', span: '' },
      ],
    },
    {
      eyebrow: '团委迎新与联谊',
      title: '资讯之外，也是一群朋友。',
      photos: [ // 3 cells / 1 row
        { src: '/shengxun/2-团委迎新与联谊/团委迎新.jpg',       alt: '团委迎新',       category: '迎新', span: '' },
        { src: '/shengxun/2-团委迎新与联谊/团委联谊.jpg',       alt: '团委联谊',       category: '联谊', span: '' },
        { src: '/shengxun/2-团委迎新与联谊/圣诞节交换礼物.jpg', alt: '圣诞节交换礼物', category: '联谊', span: '' },
      ],
    },
    {
      eyebrow: '各系列双语帖子',
      title: '看得懂，才算传到了。',
      description:
        '《伴航记》《航行记》《升讯志》《必修星》《快报》等系列，' +
        '内容涵盖华语及英语——入学手续、宿舍、选课、交通、学院地图，一篇一篇整理清楚。',
      photos: [ // 12 cells / 4 rows
        { src: '/shengxun/3-各系列双语帖子/马大新生伴航计划.jpg', alt: '马大新生伴航计划', category: '伴航记',   span: 'md:col-span-2 md:row-span-2' },
        { src: '/shengxun/3-各系列双语帖子/马大生必知系列.jpg',   alt: '马大生必知系列',   category: '必知系列', span: 'md:row-span-2' },
        { src: '/shengxun/3-各系列双语帖子/马大宿舍手册.jpg',     alt: '马大宿舍手册',     category: '宿舍手册', span: 'md:col-span-2 md:row-span-2' },
        { src: '/shengxun/3-各系列双语帖子/马大校园生活系列.jpg', alt: '马大校园生活系列', category: '校园生活', span: 'md:row-span-2' },
      ],
    },
    {
      eyebrow: '街访系列',
      title: '走到人前问。',
      photos: [ // 6 cells / 2 rows
        { src: '/shengxun/4-街访系列/街访系列.jpg',    alt: '街访现场',     category: '街访系列', span: 'md:row-span-2' },
        { src: '/shengxun/4-街访系列/街访系列(1).jpg', alt: '街访受访同学', category: '街访系列', span: 'md:row-span-2' },
        { src: '/shengxun/4-街访系列/街访系列(2).jpg', alt: '街访拍摄',     category: '街访系列', span: 'md:row-span-2' },
      ],
    },
    {
      eyebrow: '马大科系探索会 2026',
      title: '每个科系，都有人现身说法。',
      description: '线上举行，各院系的分享嘉宾逐一介绍自己的科系，给还在选科的同学一个问清楚的机会。',
      photos: [ // 6 cells / 2 rows
        { src: '/shengxun/5-马大科系探索会2026/大合照(1).jpg',       alt: '探索会大合照',       category: '科系探索会', span: 'md:col-span-2' },
        { src: '/shengxun/5-马大科系探索会2026/大合照(2).jpg',       alt: '探索会大合照（二）', category: '科系探索会', span: '' },
        { src: '/shengxun/5-马大科系探索会2026/科系分享环节.jpg',    alt: '科系分享环节',       category: '分享环节',   span: '' },
        { src: '/shengxun/5-马大科系探索会2026/科系分享环节(1).jpg', alt: '分享嘉宾',           category: '分享环节',   span: '' },
        { src: '/shengxun/5-马大科系探索会2026/科系分享环节(2).jpg', alt: '与会同学',           category: '分享环节',   span: '' },
      ],
    },
    {
      eyebrow: '升讯 x 技升联谊交流会',
      title: '两团人，坐下来聊。',
      photos: [ // 3 cells / 1 row
        { src: '/shengxun/6-升讯x技升联谊交流会/合照.jpg',     alt: '升讯 x 技升合照', category: '联谊交流会', span: '' },
        { src: '/shengxun/6-升讯x技升联谊交流会/交流环节.jpg', alt: '交流环节',        category: '联谊交流会', span: '' },
        { src: '/shengxun/6-升讯x技升联谊交流会/游戏环节.jpg', alt: '游戏环节',        category: '联谊交流会', span: '' },
      ],
    },
    {
      eyebrow: '《宿你最会拍》',
      title: '住哪里，让住过的人说。',
      description:
        '住宿短视频征集计划带大家走进 KK1、KK2、KK3、KK13 等宿舍；' +
        '校外住宿篇则以七篇帖子，把校外的选择整理成一份看房前的清单。',
      photos: [ // 6 cells / 2 rows
        { src: '/shengxun/7-宿你最会拍/校外住宿篇特辑.jpg',   alt: '校外住宿篇特辑',     category: '住宿特辑', span: 'md:col-span-2 md:row-span-2' },
        { src: '/shengxun/7-宿你最会拍/短视频征集计划.jpg',   alt: '住宿短视频征集计划', category: '征集计划', span: 'md:row-span-2' },
      ],
    },
    {
      eyebrow: '团委大合照',
      title: '25/26 届，全员到齐。',
      photos: [ // 6 cells / 2 rows
        { src: '/shengxun/8-团委大合照/25-26届团委合照.jpg', alt: '25/26 届升讯团团委大合照', category: '团委', span: 'md:col-span-3 md:row-span-2' },
      ],
    },
  ],

  /* ── § 7 小组负责人 ────────────────────────────────────────────────────
     Phone numbers and email from the source are deliberately not published as
     text — contact routes through the group's social accounts, as on the other
     pages. The role reads 负责人 because the source says 负责人联系方式 and does
     not give a title; change it to 团长 if that is what it is. */
  leadership: [
    { name: '林筱萱', role: '升讯团负责人' },
  ],

  /* ── § 8 加入我们 ──────────────────────────────────────────────────────
     No sign-up form URL was supplied, so `ctaHref` stays empty and the button
     does not render. The poster carries the QR codes in the meantime; clicking
     it opens the full-size image so they stay scannable. Paste the 报名表 URL
     into ctaHref and the button appears by itself. */
  joinText:
    '26/27 届团委招募开放中，截止 2026 年 10 月 18 日晚上 11:59，面试线上进行。' +
    '开放职位包括副财政、节目组副组长与组员、内容与资料组、公关与外联组、设计组及媒体组。' +
    '扫描海报上的二维码即可查看详情与报名，也欢迎透过下方的社交媒体私讯我们。' +
    '（小红书搜索「马大华文学会升学资讯团（升讯团）」。）',
  ctaLabel: '报名加入升讯团',
  ctaHref: '',
  joinPoster: {
    src: '/shengxun/2627届招募海报.jpg',
    alt: '马大华文学会升讯团 26/27 届团委招募海报',
  },
  social: {
    // facebook: '',   // 马大华文学会升学资讯团（升讯团） — page URL not supplied
    instagram: 'https://www.instagram.com/pbcum_shengxun/',
    instagramHandle: '@pbcum_shengxun',
  },
};

export function ShengXun() {
  return <DeptPageLayout content={CONTENT} />;
}
