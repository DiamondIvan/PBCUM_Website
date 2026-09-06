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
import { departments } from '../pages/departments';
import { events } from '../pages/events';

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
const totalPrograms = events.length + departments.length;

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

  gallery: [
    { title: '迎新典礼', category: '定向活动', span: 'md:col-span-2 md:row-span-2', tone: 'from-[#1f2937] via-[#111827] to-[#A11217]' },
    { title: '文化工作坊', category: '学习成长', span: 'md:row-span-2', tone: 'from-[#A11217] via-[#ef4444] to-[#fb7185]' },
    { title: '委员会风采', category: '团队人物', span: '', tone: 'from-[#0f172a] via-[#374151] to-[#6b7280]' },
    { title: '论坛舞台', category: '精彩活动', span: '', tone: 'from-[#7c2d12] via-[#a16207] to-[#f59e0b]' },
    { title: '周边商品预览', category: '品牌形象', span: 'md:col-span-2', tone: 'from-[#4b5563] via-[#111827] to-[#1d4ed8]' },
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

  /* ─── 活动日历 — Calendar Events ────────────────────────────────────
   * Each entry maps to a clickable day on the EventCalendar component.
   * type: 'wute' | 'qixiaozu' | 'other'
   * href: route to navigate to (e.g. '/events/event-01', '/departments/dept-03')
   *       or a page anchor (e.g. '/#activities') for generic events
   * ──────────────────────────────────────────────────────────────────── */
  calendarEvents: [
    // ── 2025 ──────────────────────────────────────────────────────────
    {
      date: '2025-09-06',
      title: '新学年迎新礼',
      type: 'other',
      label: '迎新',
      href: '/#activities',
    },
    {
      date: '2025-09-20',
      title: '相声组招新说明会',
      type: 'qixiaozu',
      label: '七小组',
      href: '/departments/dept-01',
    },
    {
      date: '2025-10-04',
      title: '文化组首次工作坊',
      type: 'qixiaozu',
      label: '七小组',
      href: '/departments/dept-02',
    },
    {
      date: '2025-10-18',
      title: '辩论组内部训练营',
      type: 'qixiaozu',
      label: '七小组',
      href: '/departments/dept-03',
    },
    {
      date: '2025-11-08',
      title: '活动一（五特活·01）',
      type: 'wute',
      label: '五特活',
      href: '/events/event-01',
    },
    {
      date: '2025-11-15',
      title: '摄影组外拍活动',
      type: 'qixiaozu',
      label: '七小组',
      href: '/departments/dept-03',
    },
    {
      date: '2025-11-29',
      title: '社服组义工日',
      type: 'qixiaozu',
      label: '七小组',
      href: '/departments/dept-07',
    },
    {
      date: '2025-12-06',
      title: '年末联欢晚会',
      type: 'other',
      label: '特别活动',
      href: '/#activities',
    },
    // ── 2026 ──────────────────────────────────────────────────────────
    {
      date: '2026-01-10',
      title: '华文班新学期开班',
      type: 'qixiaozu',
      label: '七小组',
      href: '/departments/dept-04',
    },
    {
      date: '2026-01-24',
      title: '活动二（五特活·02）',
      type: 'wute',
      label: '五特活',
      href: '/events/event-02',
    },
    {
      date: '2026-02-07',
      title: '升讯团社交媒体营',
      type: 'qixiaozu',
      label: '七小组',
      href: '/departments/dept-06',
    },
    {
      date: '2026-02-14',
      title: '情人节文化夜话',
      type: 'other',
      label: '特别活动',
      href: '/#activities',
    },
    {
      date: '2026-03-07',
      title: '活动三（五特活·03）',
      type: 'wute',
      label: '五特活',
      href: '/events/event-03',
    },
    {
      date: '2026-03-21',
      title: '摇篮手坊公开营',
      type: 'qixiaozu',
      label: '七小组',
      href: '/departments/dept-05',
    },
    {
      date: '2026-04-04',
      title: '校园文化寻根行',
      type: 'other',
      label: '文化探索',
      href: '/#activities',
    },
    {
      date: '2026-04-18',
      title: '活动四（五特活·04）',
      type: 'wute',
      label: '五特活',
      href: '/events/event-04',
    },
    {
      date: '2026-05-02',
      title: '华彩风华展演彩排',
      type: 'wute',
      label: '五特活',
      href: '/events/event-05',
    },
    {
      date: '2026-05-16',
      title: '活动五（五特活·05）',
      type: 'wute',
      label: '五特活',
      href: '/events/event-05',
    },
    {
      date: '2026-06-06',
      title: '年度总检讨大会',
      type: 'other',
      label: '内部活动',
      href: '/#activities',
    },
    {
      date: '2026-07-11',
      title: '新届委员交接典礼',
      type: 'other',
      label: '特别活动',
      href: '/#committee',
    },
    {
      date: '2026-08-01',
      title: '2026/27 学年备战会',
      type: 'other',
      label: '内部活动',
      href: '/#activities',
    },
    {
      date: '2026-08-15',
      title: '独立日文化分享会',
      type: 'other',
      label: '文化活动',
      href: '/#activities',
    },
  ],
};

