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

export const sectionData = {
  stats: [
    { label: '活跃会员', value: '1,200+', icon: Users },
    { label: '创立年份', value: '60+', icon: Crown },
    { label: '精彩活动', value: '180+', icon: Sparkles },
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
  activities: [
    {
      title: '月夜文化论坛',
      date: '2026年3月',
      category: '夜话交流会',
      summary: '一个融合语言、故事与学生声音的精心策划夜间活动，在电影感氛围中共话文化。',
      accent: 'from-[#A11217] to-[#6D0E12]',
    },
    {
      title: '校园文化寻根行',
      date: '2026年4月',
      category: '文化体验',
      summary: '一场亲密的边走边谈体验，带领学生重新连结场所记忆、文化身份与历史情感。',
      accent: 'from-[#1f2937] to-[#111827]',
    },
    {
      title: '华彩风华展演',
      date: '2026年5月',
      category: '艺术展演',
      summary: '一场融合音乐、表演与视觉设计的精致舞台盛事，呈现学会高水准的品牌形象。',
      accent: 'from-[#b91c1c] to-[#f97316]',
    },
  ],
  committee: [
    { name: '梁文', role: '主席', image: '梁', color: 'from-[#A11217] to-[#6D0E12]' },
    { name: '陈爱娜', role: '副主席', image: '陈', color: 'from-[#111827] to-[#374151]' },
    { name: '黄嘉慧', role: '秘书', image: '黄', color: 'from-[#7c2d12] to-[#ef4444]' },
    { name: '吴明恩', role: '财政', image: '吴', color: 'from-[#7f1d1d] to-[#dc2626]' },
    { name: '林美萱', role: '活动主任', image: '林', color: 'from-[#991b1b] to-[#f59e0b]' },
    { name: '李大威', role: '媒体主任', image: '李', color: 'from-[#312e81] to-[#0f172a]' },
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
  ],
  partners: ['马来亚大学', 'UM 学生事务处', 'PBCUM 校友会', '校园文化实验室', 'Redline Print', 'Moonstage Media'],
};
