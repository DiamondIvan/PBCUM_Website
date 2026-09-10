import {
  Award,
  BookOpen,
  Camera,
  CircleUserRound,
  Crown,
  Globe2,
  HeartHandshake,
  Languages,
  MicVocal,
  Sparkles,
  Users,
  Wand2,
} from 'lucide-react';

// 五特活 and 七小组 now live with their own pages — each activity or group is
// described in one file. Imported here only so the '精彩活动' stat below can
// still count them automatically.
//
// `all…`, not the published lists: the society runs twelve programmes whether
// or not each one's page has been written yet. Counting the published list
// made the homepage advertise "8+" the moment the four unwritten activities
// were held back, which understates the society rather than the website.
import { allDepartments } from '../pages/departments';
import { allEvents } from '../pages/events';

/* ─── 五特活 — Five Signature Activities ────────────────────────────
 * Shape: { id, slug, title, teaser, icon, themeColor, detail, cta }
 * themeColor is sampled from the activity's own logo and drives the whole
 * card: top bar, gradient wash, corner motif, and the modal + detail-page
 * hero. Regenerate with `python scripts/logo-colors.py` after changing a logo.
 *
 * Extract these arrays here so the stats counter can reference their
 * lengths at build time. Add/remove items freely — the '精彩活动'
 * value on the homepage will update automatically.
 * ─────────────────────────────────────────────────────────────────── */
const totalPrograms = allEvents.length + allDepartments.length;

export const sectionData = {
  stats: [
    { label: '活跃会员', value: '1,200+', icon: Users },
    { label: '创立年份', value: '60+', icon: Crown },
    { label: '精彩活动', value: `${totalPrograms}+`, icon: Sparkles },
    { label: '荣誉奖项', value: '25+', icon: Award },
  ],
  aboutPoints: [
    { title: '语言自信', description: '培养流利表达、自信聆听与文化代表力。', icon: Languages },
    { title: '领导力培养', description: '提供统筹项目、主持活动与公众表达的实践舞台。', icon: Wand2 },
    { title: '学术桥梁', description: '将语言学习与校园生活、文化传承紧密相连。', icon: BookOpen },
    { title: '温馨社群', description: '一个充满关怀与温度的大家庭，让每位成员都感到被看见。', icon: HeartHandshake },
  ],
  aboutStats: [
    { label: '活跃会员', value: '1.2K', description: '来自马大各学院的蓬勃成员网络。', icon: Users },
    { label: '年度活动', value: '38', description: '从工作坊到论坛，每场活动都经过精心策划。', icon: Sparkles },
    { label: '义工时数', value: '4.8K', description: '以行动践行对文化、服务与社群的承诺。', icon: HeartHandshake },
    { label: '精选项目', value: '12', description: '具有鲜明视觉识别的高质量品牌推广活动。', icon: Globe2 },
  ],
  features: [
    {
      title: '精致体验',
      description: '一个让人感受到用心、从容与美感的华文学会网站。',
      icon: Sparkles,
    },
    {
      title: '深度活动',
      description: '融合文化传承、语言学习与校园社交能量的精彩节目。',
      icon: MicVocal,
    },
    {
      title: '领导阶梯',
      description: '加入委员会、带领项目，在实践中建立真正的自信与能力。',
      icon: CircleUserRound,
    },
    {
      title: '创意美学',
      description: '一套让学会形象鲜明、令人过目难忘的视觉设计语言。',
      icon: Camera,
    },
  ],
  committee: [
    { name: '刘善勤', role: '主席', image: 'sken.jpeg', instagram: 'https://www.instagram.com/shanken09/', email: 'shankenlaw82@gmail.com', color: 'from-[#A11217] to-[#6D0E12]' },
    { name: '方骏涛', role: '外务副主席', image: 'ivan.jpeg', instagram: 'https://www.instagram.com/fong_ivan.jt?igsh=b2xncDRjOHd5ZHh4&utm_source=qr', email: 'fongjuntoh@gmail.com', color: 'from-[#111827] to-[#374151]' },
    { name: '彭凯铃', role: '内务副主席', image: 'kailing.jpeg', instagram: 'https://www.instagram.com/kayleen.kling_?igsh=eTcyYzJ5YzNoY3B5&utm_source=qr', email: 'kailinggg0524@gmail.com', color: 'from-[#7c2d12] to-[#ef4444]' },
    { name: '苏冠霖', role: '总秘书', image: 'guanlin.jpeg', instagram: 'https://www.instagram.com/sohgl_31?igsh=enhlaWlnMjI3bmxx', email: 'sohgl11984@gmail.com', color: 'from-[#7f1d1d] to-[#dc2626]' },
    { name: '陈彦德', role: '总财政', image: 'andy.jpeg', instagram: 'https://www.instagram.com/andychan.0111?igsh=dnBmYzQ2OThxMzk%3D&utm_source=qr', email: 'acyd1470@gmail.com', color: 'from-[#991b1b] to-[#f59e0b]' },
    { name: '徐伟伦', role: '副总秘书', image: 'weilun.jpeg', instagram: 'https://www.instagram.com/wl0804?utm_source=qr&igsh=MW84Y3o5emd4bndiag==', email: 'weilun050804@gmail.com', color: 'from-[#312e81] to-[#0f172a]' },
    { name: '温滢薪', role: '副总财政', image: 'yingxin.jpeg', instagram: 'https://www.instagram.com/yingxin_oon?igsh=MXVrY2N0YWU3cG9hNA%3D%3D&utm_source=qr', email: 'oonyingxin0526@gmail.com', color: 'from-[#0369a1] to-[#0c4a6e]' },
    { name: '林家修', role: '相声组组长', image: 'jiashiu.jpeg', instagram: 'https://www.instagram.com/limjiashiu?igsh=MWppZWdtdmsyd2Yxbg==', email: 'jiashiu135@gmail.com', color: 'from-[#0d9488] to-[#0f766e]' },
    { name: '伍詠诗', role: '文化组组长', image: 'yongshi.jpeg', instagram: 'https://www.instagram.com/___its.alice?igsh=d3FpMDl3ZmNhc2p0', email: 'alice.wengsee.ng@gmail.com', color: 'from-[#7c3aed] to-[#4f46e5]' },
    { name: '陈永进', role: '摇篮手坊长', image: 'yongjin.jpeg', instagram: 'https://www.instagram.com/tyongjing?igsh=a2FjNXFpNmVqN3lx&utm_source=qr', email: 'tanyongjing7@gmail.com', color: 'from-[#1e3a5f] to-[#2563eb]' },
    { name: '符凌绮', role: '辩论组组长', image: 'lingqi.jpeg', instagram: 'https://www.instagram.com/lingyiiiii.1222?igsh=MW1oNzduemdwbDdyZw==', email: 'holingyi@gmail.com', color: 'from-[#b45309] to-[#92400e]' },
    { name: '刘奕君', role: '华文班班长', image: 'yijun.jpeg', instagram: 'https://www.instagram.com/yijun0803?utm_source=qr&igsh=MXVoODVwdHg0YXdkdA==', email: 'lyjun5187@gmail.com', color: 'from-[#be185d] to-[#9d174d]' },
    { name: '陈丽文', role: '社服组组长', image: 'liwen.jpeg', instagram: 'https://www.instagram.com/leiwennnn?igsh=N2J6eDdta3VwMHA0&utm_source=qr', email: 'leiwennnn@gmail.com', color: 'from-[#374151] to-[#111827]' },
    { name: '林筱萱', role: '升讯团团长', image: 'xiaoxuan.jpeg', instagram: 'https://www.instagram.com/xiaoooxuannn06?igsh=MWc1aXowMnJ4NzRteg==', email: 'xiaoxuanlim1019@gmail.com', color: 'from-[#065f46] to-[#047857]' },
    { name: '俞嘉希', role: '特别活动咨询委员', image: 'jiaxi.jpeg', instagram: 'https://www.instagram.com/karheyyy?igsh=MWE3anZscHdoN3VjbA==', email: 'yeekarhey3s@gmail.com', color: 'from-[#b91c1c] to-[#f97316]' },
  ],

  /* ─── 相册 — homepage gallery ────────────────────────────────────────
   * 「煜火华章 · 四十流芳」马大华文学会四十周年纪念晚宴
   * 2026 年 3 月 6 日 · 王岳海大礼堂 HGH Convention Centre, Sentul
   *
   * `alt` is what the tile shows and what titles the lightbox — the previous
   * entries used `title`, which GalleryLightbox never reads, so every tile
   * rendered with a blank heading.
   * `span` sets the grid footprint; the calendar is pinned to column 3,
   * rows 3-4, and these flow around it.
   * ──────────────────────────────────────────────────────────────────── */
  gallery: [
    {
      src: '/general_gallery/全体大合照.jpg',
      alt: '四十周年纪念晚宴',
      category: '晚宴',
      span: 'md:col-span-2 md:row-span-2',
      description: '「煜火华章 · 四十流芳」马大华文学会四十周年纪念晚宴，2026 年 3 月 6 日于王岳海大礼堂举行。',
    },
    {
      src: '/general_gallery/筹委会合照.jpg',
      alt: '筹委会合照',
      category: '幕后',
      span: '',
      description: '筹备这一夜的工作团队。',
    },
    {
      src: '/general_gallery/舞蹈演出.jpg',
      alt: '舞蹈演出',
      category: '演出',
      span: '',
      description: '晚宴上的舞蹈节目。',
    },
    {
      src: '/general_gallery/合唱演出.jpg',
      alt: '合唱演出',
      category: '演出',
      span: '',
      description: '大合唱环节，屏幕同步播放幕后制作过程。',
    },
    {
      src: '/general_gallery/外务合照.jpg',
      alt: '外务合照',
      category: '友会',
      span: '',
      description: '与各友会代表的合照。',
    },
    {
      src: '/general_gallery/嘉宾校友合照.jpg',
      alt: '嘉宾与校友合照',
      category: '校友',
      span: '',
      description: '历届校友与嘉宾回到同一个舞台上。',
    },
    {
      src: '/general_gallery/演出谢幕.jpg',
      alt: '演出谢幕',
      category: '演出',
      span: '',
      description: '演出者谢幕，背景是学会历年活动的照片墙。',
    },
    {
      src: '/general_gallery/谢幕烟火.jpg',
      alt: '谢幕烟火',
      category: '晚宴',
      span: 'md:col-span-2',
      description: '烟火落下，四十周年晚宴在这一刻画上句点。',
    },
  ],
  testimonials: [
    {
      quote: 'PBCUM 让我感觉这不只是一个学会，而是一个品牌。每场活动都经过精心策划，真的很有质感。',
      name: '若希',
      role: '文学院学生',
    },
    {
      quote: '我因为想练习华语而加入，最后却因为这里的社群——温暖、有干劲、有条理——而留了下来。',
      name: '哈菲兹',
      role: '新生会员',
    },
    {
      quote: '委员会将视觉一致性与专业度带入校园生活，这种用心在其他学会里很难见到。',
      name: '欣怡',
      role: '项目义工',
    },
    {
      quote: '人生短短三万天，不敬自由等何年',
      name: '骏涛',
      role: '外务副主席',
    }
  ],
  partners: ['马来亚大学', 'UM 学生事务处', 'PBCUM 校友会', '校园文化实验室', 'Redline Print', 'Moonstage Media'],

  /* ─── 学会活动 — society-wide dates ──────────────────────────────────
   * The calendar builds itself from the 五特活 and 七小组 content: put a
   * `date` on any of them and it appears, with no edit here or to the
   * calendar component. See src/data/calendar.js.
   *
   * This list is the exception — dates that belong to the society as a whole
   * and have no subpage to hang off. A dinner, a handover, an internal
   * meeting. Add your own freely.
   *
   *   date     'YYYY-MM-DD'   required; anything unparseable is skipped
   *   endDate  'YYYY-MM-DD'   optional, inclusive — for a multi-day thing
   *   title    what shows on the calendar
   *   label    the small badge, e.g. '特别活动'
   *   href     optional; where clicking goes. A '/#anchor' is fine.
   *   color    optional; defaults to the PBCUM red
   * ──────────────────────────────────────────────────────────────────── */
  otherEvents: [
    { date: '2025-09-06', title: '新学年迎新礼', label: '迎新', href: '/#activities' },
    { date: '2025-12-06', title: '年末联欢晚会', label: '特别活动', href: '/#activities' },
    { date: '2026-02-14', title: '情人节文化夜话', label: '特别活动', href: '/#activities' },
    { date: '2026-03-06', title: '四十周年纪念晚宴', label: '特别活动', href: '/#gallery' },
    { date: '2026-04-04', title: '校园文化寻根行', label: '文化探索', href: '/#activities' },
    { date: '2026-06-06', title: '年度总检讨大会', label: '内部活动', href: '/#activities' },
    { date: '2026-07-11', title: '新届委员交接典礼', label: '特别活动', href: '/#committee' },
    { date: '2026-08-01', title: '2026/27 学年备战会', label: '内部活动', href: '/#activities' },
    { date: '2026-08-15', title: '独立日文化分享会', label: '文化活动', href: '/#activities' },
    // Read off the 升讯团 26/27 届招募海报: 招募截至 2026 年 10 月 18 日晚上 11:59.
    // It lives here rather than on the group's page because it is a deadline,
    // not an activity — it would read oddly as a card in 常年活动.
    { date: '2026-10-18', title: '升讯团 26/27 届团委招募截止', label: '招募', href: '/departments/dept-06', color: '#1C2B4A' },
  ],
};

