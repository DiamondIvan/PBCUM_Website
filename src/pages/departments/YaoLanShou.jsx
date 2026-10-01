/**
 * YaoLanShou.jsx — 摇篮手音乐创作坊 (dept-05)
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
  id: 'qxz-05',
  slug: 'dept-05',
  teaser: '在大学校园里孕育新生代音乐人，让青春的旋律被更多人听见。',
  detail:
    '摇篮手音乐创作坊隶属于马来亚大学华文学会，是校内极具代表性的音乐创作组织。' +
    '无论你是零基础的音乐爱好者，还是怀揣作品的创作者，摇篮手都愿陪你将心中的热爱谱写成曲。',
  cta: '了解小组',

  /* ── Hero ──────────────────────────────────────────────────────────── */
  title: '摇篮手音乐创作坊',
  eyebrow: '七小组',
  logo: '/xiaozu_logos/pbcumyls.png',
  accentHex: '#6B3FA0', // sampled from the logo — see scripts/logo-colors.py
  accent: 'from-[#6B3FA0] to-[#422763]',

  // One line describing the group, shown under the title.
  mission: '以无私的包容与爱，在大学校园中为马来西亚本土乐坛孕育新生代音乐人才。',
  founded: '1992 年',
  // memberCount: '',              // e.g. '约 25 位组员'
  // vibe: '',                     // optional short word beside the eyebrow

  /* ── § 2 简介 ───────────────────────────────────────────────────────────
     What this group is and what it does. Use \n between paragraphs. */
  description:
    '马大摇篮手音乐创作坊隶属于马来亚大学华文学会，是校内极具代表性的音乐创作组织。' +
    '「摇篮手」之名取自母亲温柔而坚韧的双手，寓意以无私的包容与爱，在大学校园中为马来西亚本土乐坛不断孕育新生代音乐人才。' +
    '多年来，这里见证了无数青年的音乐起点，更走出过黄文升、李志清、林宇中及许媛婷等多位本地杰出音乐人。\n' +
    '作为大专生接触原创音乐的温室，摇篮手致力于打造系统化的学习与交流环境。' +
    '我们常年开办作词、作曲、编曲等创作例常班，邀请业界导师倾囊相授，并与时俱进地融入口技、音乐主持与舞台表现等多元元素，协助学员全方位提升音乐素养与表现力。\n' +
    '除了课堂上的打磨，摇篮手更提供广阔的实践空间，定期筹办极具影响力的「校园华语歌曲创作比赛」、新歌发表演绎会以及校园街头表演。' +
    '无论你是零基础的音乐爱好者，还是怀揣作品的创作者，摇篮手都愿陪你将心中的热爱谱写成曲，让青春的旋律被更多人听见。',

  /* �  activities: [
    {
      name: '街头表演 Busking',
      description: '走上街头，把原创音乐带到更多人耳边，在真实的舞台上磨炼表演力。',
      image: '/yaolanshou/街头表演 Busking/街头表演进行中.jpg',
    },
    {
      name: '校园华语歌曲创作比赛（校创）',
      description: '极具影响力的年度赛事，汇聚各大专院校音乐创作者，共同竞技交流。',
      image: '/yaolanshou/校创/參賽者合照.jpg',
    },
    {
      name: '例常班（作词 · 作曲 · 编曲）',
      description: '常年开办创作例常班，邀请业界导师授课，系统培育词曲编曲能力。',
      image: '/yaolanshou/例常班/作曲例常班.jpg',
    },
    {
      name: '新鸟入巢',
      description: '新成员迎新活动，认识摇篮手、认识彼此，从这里开始你的创作旅程。',
      image: '/yaolanshou/新鸟入巢/新鸟入巢大合照_.jpg',
    },
    {
      name: '特别邀请活动',
      description: '不定期邀请业界嘉宾举办工作坊与分享会，拓宽视野，深化音乐体验。',
      image: '/yaolanshou/特别邀请活动/摇篮手 x PhotoJam 大合照.jpg',
    },
  ],

  /* A date here puts the group itself on the calendar; a `date` on any
     entry in activities[] above puts that one activity there instead.
     ISO 'YYYY-MM-DD', optional endDate, both omitted while unknown. */
  // date: '',
  // endDate: '',

  /* ── § 6d 分组相册 ──────────────────────────────────────────────────────
     One section per activity folder under public/yaolanshou. */
  photoSections: [
    {
      eyebrow: '街头表演 Busking',
      title: '走上街头，让旋律被更多人听见。',
      description: '带着键盘、吉他和小提琴，在车站与街角为路人送上一首首原创歌曲。',
      photos: [
        { src: '/yaolanshou/街头表演 Busking/街头表演进行中.jpg', alt: '街头表演进行中', category: '街头表演 Busking', span: 'md:col-span-2 md:row-span-2' },
        { src: '/yaolanshou/街头表演 Busking/乐队们在巴士站表演.jpg', alt: '乐队们在巴士站表演', category: '街头表演 Busking', span: '' },
        { src: '/yaolanshou/街头表演 Busking/乐手们演奏曲目_.jpg', alt: '乐手们演奏曲目', category: '街头表演 Busking', span: '' },
        { src: '/yaolanshou/街头表演 Busking/摇篮手准备工作_.jpg', alt: '摇篮手准备工作', category: '街头表演 Busking', span: '' },
        { src: '/yaolanshou/街头表演 Busking/音乐组组长为歌手演奏.jpg', alt: '音乐组组长为歌手演奏', category: '街头表演 Busking', span: 'md:col-span-2' },
        { src: '/yaolanshou/街头表演 Busking/歌手表演曲目_.jpg', alt: '歌手表演曲目', category: '街头表演 Busking', span: '' },
        { src: '/yaolanshou/街头表演 Busking/街头表演表演人员大合照.jpg', alt: '街头表演表演人员大合照', category: '街头表演 Busking', span: '' },
      ],
    },
    {
      eyebrow: '第十七届校园华语歌曲创作比赛',
      title: '一首歌，一次被听见的机会。',
      description: '汇聚各大专院校原创音乐人，以歌会友、以赛促学的年度盛事。',
      photos: [
        { src: '/yaolanshou/校创/參賽者合照.jpg', alt: '第十七届校创全体参赛者合照', category: '校创', span: 'md:col-span-2 md:row-span-2' },
        { src: '/yaolanshou/校创/乐手们为歌手们演奏.jpg', alt: '乐手们为歌手们演奏', category: '校创', span: '' },
        { src: '/yaolanshou/校创/歌手+樂隊.jpg', alt: '歌手与乐队', category: '校创', span: '' },
        { src: '/yaolanshou/校创/参赛者正在表演原创歌曲.jpg', alt: '参赛者正在表演原创歌曲', category: '校创', span: '' },
        { src: '/yaolanshou/校创/籌委合照.jpg', alt: '校创筹委合照', category: '校创', span: '' },
        { src: '/yaolanshou/校创/評審合照.jpg', alt: '评审合照', category: '校创', span: 'md:col-span-2' },
      ],
    },
    {
      eyebrow: '例常班',
      title: '一笔一音，从课堂打磨创作功底。',
      description: '作词、作曲、编曲分班教学，由业界导师亲自带领学员系统进阶。',
      photos: [
        { src: '/yaolanshou/例常班/作曲例常班.jpg', alt: '作曲例常班', category: '例常班', span: 'md:col-span-2 md:row-span-2' },
        { src: '/yaolanshou/例常班/学姐为学弟妹解释音乐原理.jpg', alt: '学姐为学弟妹解释音乐原理', category: '例常班', span: '' },
        { src: '/yaolanshou/例常班/学长解释作曲原理.jpg', alt: '学长解释作曲原理', category: '例常班', span: '' },
        { src: '/yaolanshou/例常班/学姐正在为学弟妹回答问题.jpg', alt: '学姐正在为学弟妹回答问题', category: '例常班', span: '' },
        { src: '/yaolanshou/例常班/坊长给嘉宾赠送纪念品.jpg', alt: '坊长给嘉宾赠送纪念品', category: '例常班', span: '' },
      ],
    },
    {
      eyebrow: '新鸟入巢',
      title: '欢迎回家，创作旅程从此启航。',
      description: '新学年迎新活动，新成员齐聚一堂，彼此认识、融入摇篮手大家庭。',
      photos: [
        { src: '/yaolanshou/新鸟入巢/新鸟入巢大合照_.jpg', alt: '新鸟入巢迎新全体大合照', category: '新鸟入巢', span: 'md:col-span-2 md:row-span-2' },
      ],
    },
    {
      eyebrow: 'PhotoJam 圣诞特别企划',
      title: '戴上鹿角，用音乐度过圣诞夜。',
      description: '圣诞主题音乐交流派对，摇篮手成员们以即兴演奏和欢笑迎接佳节。',
      photos: [
        { src: '/yaolanshou/特别邀请活动/摇篮手 x PhotoJam 大合照.jpg', alt: '摇篮手 x PhotoJam 大合照', category: '特别邀请活动', span: 'md:col-span-2 md:row-span-2' },
        { src: '/yaolanshou/特别邀请活动/Photojam 邀请摇篮手作为表演嘉宾.jpg', alt: 'Photojam 邀请摇篮手作为表演嘉宾', category: '特别邀请活动', span: '' },
        { src: '/yaolanshou/特别邀请活动/摇篮手准备拍照.jpg', alt: '摇篮手准备拍照', category: '特别邀请活动', span: '' },
        { src: '/yaolanshou/特别邀请活动/第三十三届摇篮手拍照手势.jpg', alt: '第三十三届摇篮手拍照手势', category: '特别邀请活动', span: '' },
        { src: '/yaolanshou/特别邀请活动/摇篮手 x Photojam 特别邀请活动_.jpg', alt: '摇篮手 x Photojam 特别邀请活动', category: '特别邀请活动', span: '' },
      ],
    },
  ],

  /* ── § 7 小组负责人 ─────────────────────────────────────────────────────
     { name, role, photo? } — photo optional, falls back to an initials avatar. */
  leadership: [
    { name: '陈永进', role: '摇篮手坊长', photo: '/committee_photo/yongjin.jpeg' },
  ],

  /* ── § 8 加入我们 ───────────────────────────────────────────────────── */
  joinText:
    '无论你是对创作音乐怀有热忱，还是喜欢团队活动与活动策划，摇篮手都欢迎你加入这个大家庭。' +
    '来吧，让我们一起将心中的旋律谱写成歌，让更多人听见属于你的声音。',
  ctaLabel: '报名加入摇篮手',
  ctaHref: 'https://www.instagram.com/pbcum_ylsmusic',
  joinPoster: { src: '/yaolanshou/摇篮手招募海报.jpeg', alt: '摇篮手招募海报' },
  social: {
    facebook: 'https://www.facebook.com/yaolanshou',
    instagram: 'https://www.instagram.com/pbcum_ylsmusic',
    instagramHandle: '@pbcum_ylsmusic',
  },
};

export function YaoLanShou() {
  return <DeptPageLayout content={CONTENT} />;
}
