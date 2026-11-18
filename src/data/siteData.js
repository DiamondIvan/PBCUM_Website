export const sectionData = {
  /* ─── 执委会 ─────────────────────────────────────────────────────────
   * `dept` points a group lead to their group's page and accent colour.
   * `advisesSpecialActivities` puts the member in 特别活动咨询委员.
   *
   * Group leads are shown in the 七小组 order, not the order written here,
   * so they always line up with the group grid higher up the page.
   *
   *   image      filename in public/committee_photo/
   * Personal profile links require approval before publication.
   * ──────────────────────────────────────────────────────────────────── */
  committee: [
    { name: '刘善勤', role: '主席', image: 'sken.jpeg' },
    { name: '方骏涛', role: '外务副主席', image: 'ivan.jpeg' },
    { name: '彭凯铃', role: '内务副主席', image: 'kailing.jpeg' },
    { name: '苏冠霖', role: '总秘书', image: 'guanlin.jpeg' },
    { name: '陈彦德', role: '总财政', image: 'andy.jpeg' },
    { name: '徐伟伦', role: '副总秘书', image: 'weilun.jpeg' },
    { name: '温滢薪', role: '副总财政', image: 'yingxin.jpeg' },
    {
      name: '俞嘉希', role: '特别活动咨询委员', image: 'jiaxi.jpeg',
      advisesSpecialActivities: true,
      link: { section: 'activities', label: '五特活' },
    },

    { name: '林家修', role: '相声组组长', image: 'jiashiu.jpeg', dept: 'dept-01' },
    { name: '伍詠诗', role: '文化组组长', image: 'yongshi.jpeg', dept: 'dept-02' },
    { name: '符凌绮', role: '辩论组组长', image: 'lingqi.jpeg', dept: 'dept-03' },
    { name: '刘奕君', role: '华文班班长', image: 'yijun.jpeg', dept: 'dept-04' },
    { name: '陈永进', role: '摇篮手坊长', image: 'yongjin.jpeg', dept: 'dept-05' },
    { name: '林筱萱', role: '升讯团团长', image: 'xiaoxuan.jpeg', dept: 'dept-06' },
    { name: '陈丽文', role: '社服组组长', image: 'liwen.jpeg', dept: 'dept-07' },
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
  testimonials: [],
  partners: [],

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
    { date: '2026-10-18', title: '升讯团 26/27 届团委招募截止', time: '晚上 11:59', label: '招募', href: '/departments/dept-06', color: '#1C2B4A' },
  ],
};

