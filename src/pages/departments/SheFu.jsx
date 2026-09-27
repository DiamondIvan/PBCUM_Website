/**
 * SheFu.jsx — 社服组 (dept-07)
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
  id: 'qxz-07',
  slug: 'dept-07',
  teaser: '从探访、净山到植树、护龟，把关怀落实成一次次行动。',
  detail:
    '社服组是马大华文学会属下团体，致力于推动社会服务与关怀项目——' +
    '探访、清理、植树、护龟，每一次外出都是把关怀变成行动。\n' +
    '只要你愿意行动，社服组随时欢迎你加入。',
  cta: '了解小组',
  /* ── Hero ──────────────────────────────────────────────────────────── */
  title: '社服组',
  eyebrow: '七小组',
  logo: '/xiaozu_logos/shefu.png',
  accentHex: '#C2477A', // sampled from the logo — see scripts/logo-colors.py
  accent: 'from-[#C2477A] to-[#782C4C]',

  // One line describing the group, shown under the title.
  mission: '推动社会服务与关怀项目，把「向民学习、与民同在、为民服务」落实成一次次行动。',
  // founded: '',                  // not given yet — add when known, e.g. '1998/1999 学年'
  // memberCount: '',              // e.g. '约 25 位组员'
  // vibe: '',                     // optional short word beside the eyebrow

  /* ── § 2 简介 ───────────────────────────────────────────────────────────
     What this group is and what it does. Use \n between paragraphs. */
  description:
    '社会服务组，简称「社服组」，是马大华文学会属下团体，致力于推动社会服务与关怀项目。\n' +
    '从探访、清理到植树、护龟，社服组的每一次外出，都是把关怀落实成行动的机会。',

  /* ── § 3 组史 ───────────────────────────────────────────────────────────
     When and how the group started. Leave blank until you have the facts —
     the section disappears rather than showing a placeholder. */
  history: '',
  founders: [],

  /* ── § 4 宗旨与目标 ─────────────────────────────────────────────────────
     `purpose` is the one-sentence 宗旨, rendered as a large pull quote.
     `objectives` are the 目标 beneath it. Source only gives the one-line
     宗旨 and no separate 目标 list, so `objectives` stays empty rather than
     inventing one. */
  purpose: '向民学习、与民同在、为民服务。',
  objectives: [],

  /* ── § 5 适合谁参与 ─────────────────────────────────────────────────────
     `fitQuote` is an invitation in the group's own voice — this is the line
     that persuades a fresher, so it is worth writing carefully. */
  fitQuote: '如果你对志愿服务、社会责任、团队协作或策划活动感兴趣，社服组会是你极好的舞台。',
  fitTags: ['热心志愿服务', '关心社会议题', '喜欢团队协作', '想尝试策划活动', '愿意用行动传递温暖'],

  /* ── § 6 常年活动 ───────────────────────────────────────────────────────
     { name, description?, image?, detail? } — description optional but
     recommended; image makes the card open in a lightbox.
     迎新 is not in the source list of 以往活动 — its own photo folder exists
     (20 photos) so it is included, but flagged for Ivan to confirm/rewrite. */
  activities: [
    {
      name: '探访智力障碍儿童家福协会',
      description: '探访智力障碍儿童家福协会，为儿童提供陪伴与关怀。',
      image: '/shefu/探访智力障碍儿童家福协会/一起聊天.jpg',
    },
    {
      name: '动物收容所探访《心连心爪连爪》',
      description: '探访动物收容所，为流浪猫狗打扫照料。',
      image: '/shefu/动物收容所探访《心连心爪连爪》/会员们实践时间.jpg',
    },
    {
      name: '净山活动',
      description: '清理山林，共同守护环境。',
      image: '/shefu/净山活动/一路上拾起的垃圾.jpg',
    },
    {
      name: '植树活动',
      description: '亲手种下一棵植物，为环境保护贡献一份力量。',
      image: '/shefu/植树活动/5月30号 会员们认真听讲(1).jpg',
    },
    {
      name: '探访海龟保育中心《海龟之旅》',
      description: '走近海龟保育工作，以行动守护海洋生命。',
      image: '/shefu/探访海龟保育中心《海龟之旅》/和负责人的大合照.jpg',
    },
    // TODO (Ivan): confirm this belongs here — not in the 以往活动 list you sent,
    // but the folder exists with 20 photos, so it's included as a placeholder name.
    {
      name: '迎新',
      description: '认识社服组、认识彼此的第一步。',
      image: '/shefu/迎新/A.大合照.jpg',
    },
  ],

  /* A date here puts the group itself on the calendar; a `date` on any
     entry in activities[] above puts that one activity there instead.
     ISO 'YYYY-MM-DD', optional endDate, both omitted while unknown. */
  // date: '',
  // endDate: '',

  /* ── § 6d 分组相册 ──────────────────────────────────────────────────────
     One section per activity, mirroring the folders in public/shefu — same
     pattern as 文化组. Every photo below was in the uploaded folders; paths
     were generated straight from the files on disk rather than hand-typed,
     to avoid a stray character breaking a path with 90+ entries in play. */
  photoSections: [
    {
      eyebrow: '探访智力障碍儿童家福协会',
      title: '陪伴，是最简单的关怀。',
      description: '探访智力障碍儿童家福协会，为儿童提供陪伴与关怀。',
      photos: [
        { src: '/shefu/探访智力障碍儿童家福协会/一起聊天.jpg', alt: '一起聊天', category: '探访智力障碍儿童家福协会', span: 'md:col-span-2 md:row-span-2' },
        { src: '/shefu/探访智力障碍儿童家福协会/介绍手工材料.jpg', alt: '介绍手工材料', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/会员大合照.jpg', alt: '会员大合照', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/会员大合照2”社服有爱“.jpg', alt: '会员大合照 · 社服有爱', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/会员帮忙清理院子.jpg', alt: '会员帮忙清理院子', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/做手工玩耍.jpg', alt: '做手工玩耍', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/合照(1).jpg', alt: '合照', category: '探访智力障碍儿童家福协会', span: 'md:col-span-2' },
        { src: '/shefu/探访智力障碍儿童家福协会/合照.jpg', alt: '合照', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/大合照.jpg', alt: '大合照', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/大合照2.jpg', alt: '大合照', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/大合照3.jpg', alt: '大合照', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/帮忙喂饭.jpg', alt: '帮忙喂饭', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/成果展示.jpg', alt: '成果展示', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/比爱心.jpg', alt: '比爱心', category: '探访智力障碍儿童家福协会', span: 'md:col-span-2' },
        { src: '/shefu/探访智力障碍儿童家福协会/清理院子.jpg', alt: '清理院子', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/清理院子2.jpg', alt: '清理院子', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/社服带去的物资.jpg', alt: '社服带去的物资', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/耐心协助进行小活动.jpg', alt: '耐心协助进行小活动', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/耐心教导.jpg', alt: '耐心教导', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/耐心陪伴.jpg', alt: '耐心陪伴', category: '探访智力障碍儿童家福协会', span: '' },
        { src: '/shefu/探访智力障碍儿童家福协会/认真绘画.jpg', alt: '认真绘画', category: '探访智力障碍儿童家福协会', span: 'md:col-span-2' },
      ],
    },
    {
      eyebrow: '动物收容所探访 · 心连心爪连爪',
      title: '一盆水、一把刷子，也是爱。',
      description: '探访动物收容所，为流浪猫狗打扫照料。',
      photos: [
        { src: '/shefu/动物收容所探访《心连心爪连爪》/会员们实践时间.jpg', alt: '会员们实践时间', category: '动物收容所探访', span: 'md:col-span-2 md:row-span-2' },
        { src: '/shefu/动物收容所探访《心连心爪连爪》/听负责人讲解运营模式.jpg', alt: '听负责人讲解运营模式', category: '动物收容所探访', span: '' },
        { src: '/shefu/动物收容所探访《心连心爪连爪》/和最小的小狗合照.jpg', alt: '和最小的小狗合照', category: '动物收容所探访', span: '' },
        { src: '/shefu/动物收容所探访《心连心爪连爪》/喂小狗的正确方式.jpg', alt: '喂小狗的正确方式', category: '动物收容所探访', span: '' },
        { src: '/shefu/动物收容所探访《心连心爪连爪》/喂羊.jpg', alt: '喂羊', category: '动物收容所探访', span: '' },
        { src: '/shefu/动物收容所探访《心连心爪连爪》/喂食猫咪.jpg', alt: '喂食猫咪', category: '动物收容所探访', span: '' },
        { src: '/shefu/动物收容所探访《心连心爪连爪》/帮狗狗洗澡1.jpg', alt: '帮狗狗洗澡', category: '动物收容所探访', span: 'md:col-span-2' },
        { src: '/shefu/动物收容所探访《心连心爪连爪》/帮狗狗洗澡2.jpg', alt: '帮狗狗洗澡', category: '动物收容所探访', span: '' },
        { src: '/shefu/动物收容所探访《心连心爪连爪》/搬完木材坐罗里回大本营.jpg', alt: '搬完木材坐罗里回大本营', category: '动物收容所探访', span: '' },
        { src: '/shefu/动物收容所探访《心连心爪连爪》/活动结束和负责人以及小狗大合照.jpg', alt: '活动结束和负责人以及小狗大合照', category: '动物收容所探访', span: '' },
        { src: '/shefu/动物收容所探访《心连心爪连爪》/认真听讲关于猫猫狗狗的故事.jpg', alt: '认真听讲关于猫猫狗狗的故事', category: '动物收容所探访', span: '' },
        { src: '/shefu/动物收容所探访《心连心爪连爪》/齐心协力帮助工作人员搬木材.jpg', alt: '齐心协力帮助工作人员搬木材', category: '动物收容所探访', span: '' },
      ],
    },
    {
      eyebrow: '净山活动',
      title: '把山留给下一次上山的人。',
      description: '清理山林，共同守护环境。',
      photos: [
        { src: '/shefu/净山活动/一路上拾起的垃圾.jpg', alt: '一路上拾起的垃圾', category: '净山活动', span: 'md:col-span-2 md:row-span-2' },
        { src: '/shefu/净山活动/休息站休息一下.jpg', alt: '休息站休息一下', category: '净山活动', span: '' },
        { src: '/shefu/净山活动/在半路上休息的风景.jpg', alt: '在半路上休息的风景', category: '净山活动', span: '' },
        { src: '/shefu/净山活动/小心上梯.jpg', alt: '小心上梯', category: '净山活动', span: '' },
        { src: '/shefu/净山活动/山路旁的垃圾.jpg', alt: '山路旁的垃圾', category: '净山活动', span: '' },
        { src: '/shefu/净山活动/山顶上的大合照.jpg', alt: '山顶上的大合照', category: '净山活动', span: '' },
        { src: '/shefu/净山活动/把收集起来的垃圾丢进入口处的垃圾桶.jpg', alt: '把收集起来的垃圾丢进入口处的垃圾桶', category: '净山活动', span: 'md:col-span-2' },
        { src: '/shefu/净山活动/把装满垃圾的垃圾袋丢入入口处的垃圾桶.jpg', alt: '把装满垃圾的垃圾袋丢入入口处的垃圾桶', category: '净山活动', span: '' },
        { src: '/shefu/净山活动/捡起被盖起来的垃圾.jpg', alt: '捡起被盖起来的垃圾', category: '净山活动', span: '' },
        { src: '/shefu/净山活动/排队小心上山.jpg', alt: '排队小心上山', category: '净山活动', span: '' },
        { src: '/shefu/净山活动/排队走不遗漏一点垃圾.jpg', alt: '排队走不遗漏一点垃圾', category: '净山活动', span: '' },
        { src: '/shefu/净山活动/活动开始前的大合照.jpg', alt: '活动开始前的大合照', category: '净山活动', span: '' },
        { src: '/shefu/净山活动/筹委在容易滑倒的站点扶住大家.jpg', alt: '筹委在容易滑倒的站点扶住大家', category: '净山活动', span: '' },
        { src: '/shefu/净山活动/较滑路段都有筹委扶住大家.jpg', alt: '较滑路段都有筹委扶住大家', category: '净山活动', span: 'md:col-span-2' },
        { src: '/shefu/净山活动/过桥.jpg', alt: '过桥', category: '净山活动', span: '' },
      ],
    },
    {
      eyebrow: '植树活动',
      title: '亲手种下的，会自己长大。',
      description: '亲手种下一棵植物，为环境保护贡献一份力量。',
      photos: [
        { src: '/shefu/植树活动/5月30号 会员们认真听讲(1).jpg', alt: '会员们认真听讲', category: '植树活动', span: 'md:col-span-2 md:row-span-2' },
        { src: '/shefu/植树活动/5月30号 会员们认真听讲.jpg', alt: '会员们认真听讲', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/5月30号 工作人员讲解绿植对环境的影响.jpg', alt: '工作人员讲解绿植对环境的影响', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/与工作人员交流.jpg', alt: '与工作人员交流', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/分解垃圾(1).jpg', alt: '分解垃圾', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/分解垃圾.jpg', alt: '分解垃圾', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/垃圾处理1.jpg', alt: '垃圾处理', category: '植树活动', span: 'md:col-span-2' },
        { src: '/shefu/植树活动/垃圾处理2.jpg', alt: '垃圾处理', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/大家的成果.jpg', alt: '大家的成果', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/尝试亲手插苗.jpg', alt: '尝试亲手插苗', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/工作人员讲解全球暖化现象.jpg', alt: '工作人员讲解全球暖化现象', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/工作人员讲解插苗步骤.jpg', alt: '工作人员讲解插苗步骤', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/工作人员讲解植物的重要性.jpg', alt: '工作人员讲解植物的重要性', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/工作人员讲解植物的重要性2.jpg', alt: '工作人员讲解植物的重要性', category: '植树活动', span: 'md:col-span-2' },
        { src: '/shefu/植树活动/拿水浇在垃圾上（垃圾处理步骤之一）.jpg', alt: '拿水浇在垃圾上（垃圾处理步骤之一）', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/搅拌泥土和肥料.jpg', alt: '搅拌泥土和肥料', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/搅拌泥土并插苗.jpg', alt: '搅拌泥土并插苗', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/植树活动 5月23号 圆满结束.jpg', alt: '植树活动 5 月 23 号圆满结束', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/植树活动5月30日圆满结束_.jpg', alt: '植树活动 5 月 30 日圆满结束', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/植树第一步.jpg', alt: '植树第一步', category: '植树活动', span: '' },
        { src: '/shefu/植树活动/认真听讲.jpg', alt: '认真听讲', category: '植树活动', span: 'md:col-span-2' },
      ],
    },
    {
      eyebrow: '探访海龟保育中心 · 海龟之旅',
      title: '走近海洋，才懂得守护海洋。',
      description: '走近海龟保育工作，以行动守护海洋生命。',
      photos: [
        { src: '/shefu/探访海龟保育中心《海龟之旅》/和负责人的大合照.jpg', alt: '和负责人的大合照', category: '探访海龟保育中心', span: 'md:col-span-2 md:row-span-2' },
        { src: '/shefu/探访海龟保育中心《海龟之旅》/埋海龟蛋点.jpg', alt: '埋海龟蛋点', category: '探访海龟保育中心', span: '' },
        { src: '/shefu/探访海龟保育中心《海龟之旅》/基地的海龟.jpg', alt: '基地的海龟', category: '探访海龟保育中心', span: '' },
        { src: '/shefu/探访海龟保育中心《海龟之旅》/工作人员示范.jpg', alt: '工作人员示范', category: '探访海龟保育中心', span: '' },
        { src: '/shefu/探访海龟保育中心《海龟之旅》/工作人员讲解海龟品种和海龟相关知识.jpg', alt: '工作人员讲解海龟品种和相关知识', category: '探访海龟保育中心', span: '' },
        { src: '/shefu/探访海龟保育中心《海龟之旅》/成果展示.jpg', alt: '成果展示', category: '探访海龟保育中心', span: '' },
        { src: '/shefu/探访海龟保育中心《海龟之旅》/挖海龟蛋.jpg', alt: '挖海龟蛋', category: '探访海龟保育中心', span: 'md:col-span-2' },
        { src: '/shefu/探访海龟保育中心《海龟之旅》/挖海龟蛋小分队合照.jpg', alt: '挖海龟蛋小分队合照', category: '探访海龟保育中心', span: '' },
        { src: '/shefu/探访海龟保育中心《海龟之旅》/海龟婴儿.jpg', alt: '海龟婴儿', category: '探访海龟保育中心', span: '' },
        { src: '/shefu/探访海龟保育中心《海龟之旅》/海龟模型.jpg', alt: '海龟模型', category: '探访海龟保育中心', span: '' },
        { src: '/shefu/探访海龟保育中心《海龟之旅》/观察海龟.jpg', alt: '观察海龟', category: '探访海龟保育中心', span: '' },
      ],
    },
    {
      // Not in the 以往活动 list Ivan sent — see the TODO on the 迎新 activity
      // card above. Included because the photos exist; drop this block if
      // 迎新 shouldn't have its own section after all.
      eyebrow: '迎新',
      title: '认识社服组，从这一夜开始。',
      photos: [
        { src: '/shefu/迎新/A.大合照.jpg', alt: '迎新全体大合照', category: '迎新', span: 'md:col-span-2 md:row-span-2' },
        { src: '/shefu/迎新/游戏环节.jpg', alt: '游戏环节', category: '迎新', span: '' },
        { src: '/shefu/迎新/游戏环节11.jpg', alt: '游戏环节', category: '迎新', span: '' },
        { src: '/shefu/迎新/游戏环节2.jpg', alt: '游戏环节', category: '迎新', span: '' },
        { src: '/shefu/迎新/游戏环节3.jpg', alt: '游戏环节', category: '迎新', span: '' },
        { src: '/shefu/迎新/游戏环节4.jpg', alt: '游戏环节', category: '迎新', span: '' },
        { src: '/shefu/迎新/游戏环节5.jpg', alt: '游戏环节', category: '迎新', span: 'md:col-span-2' },
        { src: '/shefu/迎新/游戏环节6.jpg', alt: '游戏环节', category: '迎新', span: '' },
        { src: '/shefu/迎新/游戏环节7.jpg', alt: '游戏环节', category: '迎新', span: '' },
        { src: '/shefu/迎新/游戏环节8.jpg', alt: '游戏环节', category: '迎新', span: '' },
        { src: '/shefu/迎新/游戏环节9.jpg', alt: '游戏环节', category: '迎新', span: '' },
        { src: '/shefu/迎新/游戏道具.jpg', alt: '游戏道具', category: '迎新', span: '' },
        { src: '/shefu/迎新/破冰环节.jpg', alt: '破冰环节', category: '迎新', span: '' },
        { src: '/shefu/迎新/破冰环节2.jpg', alt: '破冰环节', category: '迎新', span: 'md:col-span-2' },
        { src: '/shefu/迎新/社服宣传板.jpg', alt: '社服宣传板', category: '迎新', span: '' },
        { src: '/shefu/迎新/筹委介绍社服活动和详情.jpg', alt: '筹委介绍社服活动和详情', category: '迎新', span: '' },
        { src: '/shefu/迎新/筹委自我介绍.jpg', alt: '筹委自我介绍', category: '迎新', span: '' },
        { src: '/shefu/迎新/筹委讲解游戏.jpg', alt: '筹委讲解游戏', category: '迎新', span: '' },
        { src: '/shefu/迎新/筹委讲解游戏2.jpg', alt: '筹委讲解游戏', category: '迎新', span: '' },
        { src: '/shefu/迎新/筹委调整设备.jpg', alt: '筹委调整设备', category: '迎新', span: '' },
      ],
    },
  ],

  /* ── § 7 小组负责人 ─────────────────────────────────────────────────────
     { name, role, photo? } — photo optional, falls back to an initials avatar. */
  leadership: [
    { name: '陈丽文', role: '组长', photo: '/committee_photo/liwen.jpeg' },
    { name: '欧抒恩', role: '副组长' },
  ],

  /* ── § 8 加入我们 ───────────────────────────────────────────────────── */
  joinText:
    '无论你是想投入志愿服务、锻炼团队协作，还是单纯想为社会做点什么，社服组都欢迎你加入。' +
    '欢迎透过 Instagram 私讯，或直接联系组长了解详情。',
  ctaLabel: '联系组长报名',
  ctaHref: 'https://wa.me/60127273673', // 组长陈丽文 — 012-7273673；副组长欧抒恩 011-10955848
  joinPoster: { src: '/shefu/社服组招募海报.jpg', alt: '社服组招募海报' },
  social: {
    // facebook: '',   // not given — send the real page URL and I'll add it
    instagram: 'https://www.instagram.com/pbcum_shefu/',
    instagramHandle: '@pbcum_shefu',
  },
};

export function SheFu() {
  return <DeptPageLayout content={CONTENT} />;
}
