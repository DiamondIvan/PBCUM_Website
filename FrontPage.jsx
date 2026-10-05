import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Languages,
  MessageCircleMore,
  Sparkles,
} from 'lucide-react';
import { sectionData } from './src/data/siteData';
import { departments } from './src/pages/departments';
import { events } from './src/pages/events';
import { AnimatedSection, SectionHeading } from './src/components/ui/SectionHeading';
import { GradientOrbs } from './src/components/ui/GradientOrbs';
import { MotionCard } from './src/components/ui/MotionCard';
import { StatCounter } from './src/components/ui/StatCounter';
import { GalleryLightbox } from './src/components/GalleryLightbox';
import { TestimonialsCarousel } from './src/components/TestimonialsCarousel';
import { CommitteeGrid } from './src/components/CommitteeGrid';
import { SponsorMarquee } from './src/components/SponsorMarquee';
import { Footer } from './src/components/Footer';
import { Navbar } from './src/components/Navbar';
import { WuteSection, QixiaozuSection } from './src/components/ProgramsGrid';
import { EventCalendar } from './src/components/EventCalendar';

/* ─── Hero static data ─────────────────────────────────────────────── */

const heroBadges = [
  '马来亚大学华文学会',
  '创立于 1962 年',
  '文化 · 社群 · 卓越',
];

const joinHighlights = [
  '精致的学会体验，以文化为核心驱动力。',
  '领导力路径、语言沉浸式体验，以及高水准的校园活动。',
  '一个充满热情、用心经营、值得期待的温馨社群。',
];

/* ─── HeroGallerySlider — auto-cycles through sectionData.gallery ──── */

function HeroGallerySlider({ items }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  const current = items[index];

  return (
    <div className="relative mt-10 overflow-hidden rounded-[22px]" style={{ height: '13rem' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="absolute inset-0 overflow-hidden rounded-[22px]"
        >
          {/* The photograph itself. Entries without one fall back to their
              gradient, which is all this slider used to show. */}
          {current.src ? (
            <img
              src={current.src}
              alt=""
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${current.tone ?? ''}`} />
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.48))] rounded-[22px]" />
          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
            <span className="self-start rounded-full bg-white/14 px-3 py-1 text-[10px] uppercase tracking-widest2 backdrop-blur-sm">
              {current.category}
            </span>
            <div>
              <p className="font-latin text-[9px] uppercase tracking-widest3 text-white/55">PBCUM</p>
              <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.03em]">
                {current.alt ?? current.title}
              </h3>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Dot indicators.
          The visible mark stays 6px; the button around it is 28x44, which is
          the tap area. Not the full 44 wide — eight of these sit side by side
          and 8x44 does not fit a 375px phone — but comfortably over the 24x24
          WCAG 2.5.8 floor, where a 6px dot was not. Names come from the photo
          each dot leads to, so a screen reader announces something better
          than "button". */}
      <div className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2">
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`查看第 ${i + 1} 张照片：${item.alt ?? item.category ?? ''}`}
            aria-current={i === index ? 'true' : undefined}
            className="group/dot flex h-11 w-7 items-center justify-center"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/45 group-hover/dot:bg-white/70'
                }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── IconCard ──────────────────────────────────────────────────────── */

function IconCard({ icon: Icon, title, description }) {
  return (
    <MotionCard className="group relative overflow-hidden rounded-[30px] border border-white/62 bg-white p-8 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(161,18,23,0.07),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col gap-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-umred/10 text-umred transition duration-300 group-hover:scale-110 group-hover:bg-umred group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-ink">{title}</h3>
          <p className="mt-3 text-sm leading-[1.85] text-black/60">{description}</p>
        </div>
      </div>
    </MotionCard>
  );
}

/* ─── HeroSection ───────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-34 lg:pt-38">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-72"
        style={{
          background:
            'radial-gradient(circle at 20% 18%, rgba(161,18,23,0.14), transparent 22%), radial-gradient(circle at 82% 30%, rgba(17,24,39,0.08), transparent 18%), linear-gradient(180deg, rgba(255,255,255,0.97), rgba(245,245,247,0.92))',
        }}
      />
      <GradientOrbs />
      <div className="mx-auto grid max-w-7xl items-center gap-12 sm:gap-16 px-4 pb-20 sm:px-6 sm:pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-32">
        {/* Left column */}
        <div className="max-w-3xl">
          <div className="mb-7 sm:mb-9 flex flex-wrap gap-2 sm:gap-2.5">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-black/8 bg-white/78 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium tracking-wider sm:tracking-widest2 text-black/55 shadow-[0_10px_30px_rgba(17,24,39,0.05)] backdrop-blur-md"
              >
                {badge}
              </span>
            ))}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl text-4xl font-semibold leading-[1.15] tracking-[-0.04em] sm:text-6xl lg:text-[5.2rem]"
          >
            扎实为经<br />·
            <span className="block text-umred">回馈为纬</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
            className="mt-6 sm:mt-8 max-w-2xl text-base leading-[1.85] text-black/58 sm:text-lg"
          >
            PBCUM 汇聚一群珍视语言、认同文化、追求有意义校园生活的学子。我们为文化、领导力与现代学生生活，打造一个精致的数字家园。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.22 }}
            className="mt-8 sm:mt-10 flex flex-col gap-3.5 sm:flex-row sm:gap-4"
          >
            <a href="#join" className="btn-primary">
              加入我们的大家庭
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#about" className="btn-secondary">
              探索 PBCUM
              <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>
          <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
            {sectionData.stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
            ))}
          </div>
        </div>

        {/* Right column – hero card */}
        <div className="relative lg:pl-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, ease: 'easeOut', delay: 0.18 }}
            className="relative overflow-hidden rounded-[32px] sm:rounded-[38px] border border-white/62 bg-white/78 p-4 sm:p-5 shadow-[0_40px_120px_rgba(17,24,39,0.13)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0.05))]" />
            {/* Main gradient panel */}
            <div className="relative rounded-[26px] sm:rounded-[32px] bg-hero-gradient p-6 sm:p-8 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-latin text-[10px] sm:text-[11px] uppercase tracking-widest3 text-white/68">
                    PBCUM 体验
                  </p>
                  <h2 className="mt-2.5 sm:mt-3 text-xl sm:text-2xl font-semibold leading-tight">
                    为马大学子打造的优质文化社群
                  </h2>
                </div>
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/14 backdrop-blur-md">
                  <Languages className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
              </div>
              <HeroGallerySlider items={sectionData.gallery} />
            </div>
            {/* Stats row */}
            <div className="relative mt-4 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-[24px] sm:rounded-[30px] border border-black/6 bg-[#fbfbfb] p-6 sm:p-7 shadow-[0_20px_60px_rgba(17,24,39,0.06)]"
              >
                <p className="font-latin text-[10px] sm:text-[11px] uppercase tracking-widest3 text-black/58">即将举办</p>
                <h3 className="mt-2.5 sm:mt-3 text-xl sm:text-2xl font-semibold leading-snug text-ink">月夜文化论坛</h3>
                <p className="mt-2.5 sm:mt-3 text-sm leading-[1.8] text-black/58">
                  一场融合交流、表演与视觉叙事的精彩夜间体验。
                </p>
                <div className="mt-5 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-umred/10 px-4 py-2 text-sm font-medium text-umred">
                  <Sparkles className="h-3.5 w-3.5" />
                  优质校园活动
                </div>
              </motion.div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                <div className="rounded-[24px] sm:rounded-[28px] border border-black/6 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.06)]">
                  <p className="text-sm font-medium text-black/58">会员增长</p>
                  <div className="mt-3 sm:mt-4 flex items-end gap-2">
                    <span className="font-latin text-3xl sm:text-4xl font-bold tracking-[-0.04em] text-ink">1.2K</span>
                    {/* emerald-700, not 600: at 12px the lighter green came in
                        at 3.8:1 on white, under the 4.5:1 AA floor. */}
                    <span className="mb-1 text-xs sm:text-sm text-emerald-700">+18% 今年</span>
                  </div>
                </div>
                <div className="rounded-[24px] sm:rounded-[28px] border border-black/6 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.06)]">
                  <p className="text-sm font-medium text-black/58">校园覆盖</p>
                  <div className="mt-3 sm:mt-4 flex items-center gap-2.5 sm:gap-3 text-sm font-medium text-ink">
                    <div className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-500" />
                    活跃于各学院及学生空间
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── AboutSection ──────────────────────────────────────────────────── */

function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-white py-20 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
        {/* Left – brand card */}
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[38px] bg-[linear-gradient(160deg,rgba(161,18,23,0.97),rgba(81,11,14,0.97))] p-6 sm:p-11 text-white shadow-soft">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_44%)]" />
          <div className="relative">
            <p className="font-latin text-[11px] uppercase tracking-widest3 text-white/65">关于 PBCUM</p>
            <h2 className="mt-4 text-2xl font-semibold leading-[1.25] tracking-[-0.04em] sm:text-4xl">
              以语言为桥，以文化为魂，以领导力为志。
            </h2>
            <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base leading-[1.85] text-white/75">
              我们创造的每一段体验，都帮助学生以自信的姿态表达自我，建立深厚的友谊，并以令人骄傲的方式代表学会。每一个触点，都经过精心雕琢，精致而有温度。
            </p>
            {/* Points: single column on mobile to prevent extreme narrow squishing, 2 cols on sm+ */}
            <div className="mt-8 sm:mt-9 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
              {sectionData.aboutPoints.map((point) => (
                <div key={point.title} className="rounded-[20px] sm:rounded-[22px] border border-white/12 bg-white/10 p-4 sm:p-5 backdrop-blur-md">
                  <point.icon className="h-5 w-5 text-white/88" />
                  <h3 className="mt-3 sm:mt-4 text-base font-semibold">{point.title}</h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-[1.72] text-white/68">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right – stat cards */}
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
          {sectionData.aboutStats.map((stat) => (
            <MotionCard
              key={stat.label}
              className="rounded-[28px] sm:rounded-[32px] border border-black/6 bg-[linear-gradient(180deg,#fff,#f8f8f8)] p-6 sm:p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-latin text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest2 text-black/58">
                    {stat.label}
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-end gap-2">
                    <span className="font-latin text-4xl sm:text-5xl font-bold tracking-[-0.05em] text-ink">
                      {stat.value}
                    </span>
                  </div>
                </div>
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-umred/10 text-umred">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm leading-[1.8] text-black/55">{stat.description}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─── WhyJoinSection ────────────────────────────────────────────────── */

function WhyJoinSection() {
  return (
    <AnimatedSection id="join-us" className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="为什么加入"
          title="一个让你感受到用心、充满活力、值得全力投入的学会体验。"
          description="不只是一个学会，更是通向领导力、文化自信与珍贵校园回忆的跳板。"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {sectionData.features.map((feature) => (
            <IconCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─── ActivitiesSection (五特活 / 七小组) ─────────────────────────────────────────────── */

function ActivitiesSection() {
  return (
    <>
      {/* ── 五特活 ── editorial grid, white background ────────────────
          The heading only appears if there is something under it. While the
          remaining activities are still being written they are filtered out
          (see src/data/publishing.js), and a section title standing over an
          empty grid reads as a page that failed to load rather than one with
          nothing to say yet. */}
      {events.length > 0 && (
        <AnimatedSection id="activities" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="五大特别活动"
              title="每一项活动，都是一段难以忘怀的体验。"
              description="从舞台演出到文化探索，五特活是 PBCUM 最具代表性的年度项目。点击任意卡片，了解更多。"
            />
            <div className="mt-14">
              <WuteSection items={events} />
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* ── 七小组 ── dense directory grid, tinted background ───────── */}
      {departments.length > 0 && (
        <AnimatedSection id="groups" className="bg-[#fafafa] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="七大工作小组"
              title="找到属于你的位置，发现你的舞台。"
              description="七小组涵盖创意、技术、公关等多元领域，总有一个团队等待你的加入。"
            />
            <div className="mt-14">
              <QixiaozuSection items={departments} />
            </div>
          </div>
        </AnimatedSection>
      )}
    </>
  );
}

/* ─── CommitteeSection ──────────────────────────────────────────────── */

function CommitteeSection() {
  return (
    <AnimatedSection id="committee" className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* The previous heading and standfirst described the cards ("每张个人
            卡片都经过精心设计，而非仓促拼凑") rather than the people on them. A
            visitor here wants to know who runs the society, so that is what
            this says. How to reach a group is said once, in the note beside
            the group-lead cards, rather than twice. */}
        <SectionHeading
          eyebrow="执委会"
          title="带领学会前行的，是这一群人。"
          description="执行委员统筹学会的日常运作与年度活动，七小组则各由一位负责人带领。"
        />
        <CommitteeGrid members={sectionData.committee} />
      </div>
    </AnimatedSection>
  );
}

/* ─── CalendarSection ───────────────────────────────────────────────────
 * Its own section rather than a tile inside the gallery grid: the calendar is
 * navigable content, not a photograph, and one grid cell capped it at a single
 * column's width.
 * ──────────────────────────────────────────────────────────────────────── */

/**
 * The 回纹 the programme cards carry, blown up as a watermark. It lives on the
 * section rather than on the calendar card: the card's header and legend are
 * both occupied, and a motif there landed on top of the view toggle.
 */
function HuiwenWatermark({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      className={`pointer-events-none absolute text-umred ${className}`}
    >
      <rect x="0" y="0" width="44" height="3" fill="currentColor" />
      <rect x="41" y="0" width="3" height="44" fill="currentColor" />
      <rect x="9" y="9" width="29" height="3" fill="currentColor" fillOpacity="0.55" />
      <rect x="35" y="9" width="3" height="29" fill="currentColor" fillOpacity="0.55" />
      <rect x="18" y="18" width="16" height="2" fill="currentColor" fillOpacity="0.30" />
      <rect x="30" y="18" width="2" height="16" fill="currentColor" fillOpacity="0.30" />
    </svg>
  );
}

/* ─── HistorySection — 学会简史 ──────────────────────────────────────────
 * Sits at the foot of the page: a reader who has come this far has seen what
 * the society does, and this is what it came from. The three dated milestones
 * are pulled out of the prose because a closure and a twelve-year fight to
 * reopen carry more weight as a timeline than as a clause.
 * ──────────────────────────────────────────────────────────────────────── */

const HISTORY_MILESTONES = [
  /* ── 第一章 ──────────────────────────────────────────────────────────── */
  {
    era: '1962–1970',
    chapter: '创立与早期发展',
    body:
      '学会于 1962 年创立于马来亚大学，' +
      '这一年份来自学会内部一份成立史讲稿，' +
      '为目前所掌握资料中唯一明确记载创立年份的来源，' +
      '与“第 10 届执委会倒推约 1962 年”这一线索大致吸合。' +
      '学会创立初期规模不大，' +
      '活动以文化艺术、文学讲座及出版文学刊物为主。' +
      '1960 年代的详细记录与创会人名单目前仍待核实，' +
      '这段空白本身也是历史的一部分：' +
      '它说明了学生社团在早年依靠口耳相传与零星记录维系的常态。',
    bullets: [
      '活动以文化艺术、文学讲座及出版刊物为主',
      '至 1971 年已具备稳定的年度改选机制',
    ],
    note: '1962 年创立目前仅有单一史料记载，1960 年代的会议记录与创会人名单现仍待核实。',
  },
  /* ── 第二章 ──────────────────────────────────────────────────────────── */
  {
    era: '1971–1973',
    chapter: '路向转变与健康文艺实践',
    body:
      '1971 年 6 月第 10 届执委会改选后，学会明确将“关注社会现实、服务基层”列为方针，' +
      '活动方向从一般性联谊转向贴近社会基层的文艺实践，' +
      '与香港銀星艺术团在马演出后激起的“健康文艺”风潮相呼应。' +
      '这一时期活跃于学会的代表人物为吴建成与杨亚柒。',
    bullets: [
      '1971 年 9 月 16 日：《看，生活多美丽》文娱晚会，马大东姑礼堂，约 60—70 人出席',
      '1972 年 4 月 30 日—5 月 5 日（另 5 月 7 日加演）：《春自人间来》联演，逾 10 个艺术团体参与',
      '1972 年：约 80 人的南马巡回演出，走访马六甲、新山、鹻势等地',
      '1973 年 4 月 9—15 日：《春自人间来》大汇演，联合 19 个艺术团体，马大东姑礼堂',
      '1973 年中：第 13 届改选，杨亚柒当选主席，姚丽芳出任总秘书',
    ],
    note: '南马巡回演出的具体月份，现存两份内部记录分别写作 7 月或 8 月，确切日期尚待考证。',
  },
  /* ── 第三章 ──────────────────────────────────────────────────────────── */
  {
    era: '1974–1985',
    chapter: '《春雷》、查禁与历史中断',
    muted: true,
    body:
      '1974 年，学会与多个团体联合筹备《春雷》文艺大汇演，' +
      '计划于 5 月 23—24 日在雪兰莪中华大会堂演出，最终未获当局批准而被迫放弃。' +
      '同年 12 月，警方突袭八打箃再也一处由学会成员租住的排屋，' +
      '搜获《春雷》演出道具（仿制木枪与旧军服），官方媒体随即指控学会涉及颜覆活动。' +
      '吴建成与杨亚柒依据《1960 年内部安全法令》（ISA）被拘捕；' +
      '其后，马来西亚国会发布《白皮书》，正式下令关闭学会，学会进入长达十余年的中断期。',
    quoteContext:
      '杨亚柒被扣留约五年，获释后因长期单独监禁而出现严重精神状况，' +
      '于 1980 年 7 月 3 日在吉打北部老家辞世，得年二十九岁。' +
      '家人在其身后发现一封遗书，其中写道：',
    quote:
      '「本人对于一切……在心理对于本人的残害表示最严重的抗议……' +
      '本人严正地要求这一切的残害与束缚刁难即刻地停止。」',
    quoteAttr: '—— 杨亚柒遗书（转引自学会内部成立史讲稿）',
    bodyAfterQuote:
      '吴建成被扣留约八年，至 1982 年获释，其后投身华文教育界，' +
      '先后出任江沙崇华独中、吉兰丹中华独中及吉隆坡尊孔独中校长。' +
      '中断期间，一批关心学会存续的成员组成复办笹委会，' +
      '历经多次签名运动与陈情，啵持争取复办逾六年。',
    bullets: [
      '1974 年 12 月 3 日：数千名大专生示威，声援华玲农民',
      '1974 年 12 月 7—8 日：警方进入马大校园展开搜捕行动',
      '1974 年 12 月 9 日：警方突袭搜获《春雷》道具，吴建成、杨亚柒依 ISA 被捕',
      '1974 年 12 月 19 日（另一记录作 29 日）：国会《白皮书》发布，学会遇令关闭',
      '1979 年 12 月 17 日：复办笹委会提交首封注册申请信',
      '1981 年 12 月 31 日—1982 年 1 月 10 日：第一次签名运动，收集 2,067 人签名',
      '1983/1984 年：第二次签名运动，收集 2,316 人签名',
      '1984/1985 年：复办笹委会获批主办复办后首场活动——中秋晚会',
    ],
    note:
      '《白皮书》发布日期（12 月 19 日或 29 日）两说并存，尚未核实；' +
      '杨亚柒获释经过及逃世细节，均转引自档案库尚未收录、亦未能核实的外部文件。',
  },
  /* ── 第四章 ──────────────────────────────────────────────────────────── */
  {
    era: '1986–1990年代',
    chapter: '复办与组织重建',
    body:
      '1986 年 12 月 2 日，Ungku Aziz 皇家教授正式通知执委，' +
      '学会已获大学理事会批准成立；同月，大学公共关系部于 Rumah Universiti 召开记者招待会，' +
      '由校长亲自宣布学会复办。首届会员大会于 1987 年 1 月 3 日召开，' +
      '学会由此进入漫长的重建阶段。',
    bullets: [
      '复办初期延续“股长制”：训育、学术、文学、文娱、联谊、编辑各股长分工负责',
      '1990 年代起增设组织秘书、外务副主席、内务副主席，架构渐趋明确',
      '1990 年代委员规模有所收缩，学会稳步积累经验，重新站稳脚步',
    ],
  },
  /* ── 第五章 ──────────────────────────────────────────────────────────── */
  {
    era: '约 2000–2016',
    chapter: '延续、调整与公共参与',
    body:
      '进入 2000 年代，学会确立了以总秘书处、总财政处为核心，' +
      '配合辩论组、华文班、社服组、文化组、相声组、摇篮手组等多个组别的运作架构，' +
      '构成此后近二十年的基本骨架。学会亦在此期间更主动参与公共议题，' +
      '以第 22 届（2007/2008 年度）为代表：该届就华文学会注册自由、母语教育等议题积极表态，' +
      '并与多所大专的华文学会联合发声，同时着手推行更规范的内部治理。',
    bullets: [
      '2007 年：参与全国大专华文学会注册运动，主张学生组织自由',
      '2007 年：五校华文学会联合声援遵校方起诉的博大学生李松荣',
      '年度文化品牌持续运转：辩论、相声观摩会、摇篮手发表会、“全中华”生活营',
      '废除执委不得兼任其他社团职务的条规；推行更规范的财务与会务制度',
    ],
    note:
      '囿于现有资料，2000 年代其余各届及 2010 年代前期的具体情形暂时未能逐一还原；' +
      '第 22 届仅作为例证，并不代表其他年度没有类似的公共参与。',
  },
  /* ── 第六章 ──────────────────────────────────────────────────────────── */
  {
    era: '2017–2026',
    chapter: '冻结、复苏与制度传承',
    body:
      '2017 年，学会遇校方冻结，具体经过（冻结主体、原因、起止日期）现存资料尚未逐一核实。' +
      '时任总秘书李洲意学长在冻结期间发起联署声明名单，为争取各界声援奠定了基础。' +
      '学会其后恢复运作，并在第 40 届（2025/2026 年度）任内迎来重要的制度建设：' +
      '首次系统整理历届执委名录、完成现行《章程》修订，并建立传承档案制度。' +
      '这部简史本身，也是这一重建工作的产物。',
    bullets: [
      '2017 年：学会遇校方冻结（详情尚待核实）',
      '2025/2026 年：第 40 届任内举办四十周年纪念晚室',
      '2025/2026 年：首次系统整理《历届执行委员会名录》',
      '2026 年 7 月 20 日：现行《章程》经会员大会通过，翡日起生效',
      '建立传承档案制度，为历史延续奠立基础',
    ],
    note: '2017 年冻结事件现仅有一份 27 页影像资料，尚待逐页转录及核实。',
  },
];

function HistorySection() {
  return (
    <AnimatedSection id="history" className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <HuiwenWatermark className="-right-12 top-12 h-44 w-44 opacity-[0.05] sm:h-64 sm:w-64" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="学会简史"
          title="六十年，两个阶段，一个学会。"
          description="马来亚大学华文学会（Persatuan Bahasa Cina Universiti Malaya，缩写 PBCUM）是马大规模最大的华人学生组织。学会不仅致力于推广华文与中华文化，在促进各民族学生交流方面亦扮演着重要角色。"
        />

        {/* Timeline — six eras, one node each */}
        <ol className="mt-14 space-y-0">
          {HISTORY_MILESTONES.map((m, i) => (
            <li key={m.era} className="relative flex gap-6 pb-12 last:pb-0 sm:gap-8">
              {/* Vertical rail — omitted on the last item so it does not trail past the node */}
              {i < HISTORY_MILESTONES.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`absolute left-[7px] top-4 h-full w-px bg-gradient-to-b ${m.muted
                    ? 'from-zinc-300/70 to-zinc-200/20'
                    : 'from-umred/30 to-umred/5'
                    }`}
                />
              )}
              {/* Node dot — grey for the 1974–1985 era, red for all others */}
              <span
                aria-hidden="true"
                className={`relative mt-1.5 h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 ${m.muted ? 'border-zinc-400 bg-zinc-50' : 'border-umred bg-white'
                  }`}
              />

              <div className="min-w-0 flex-1">
                {/* Era date range */}
                <p
                  className={`font-latin text-[11px] font-semibold uppercase tracking-widest3 ${m.muted ? 'text-zinc-500' : 'text-umred/68'
                    }`}
                >
                  {m.era}
                </p>
                {/* Chapter title */}
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-ink sm:text-2xl">
                  {m.chapter}
                </h3>
                {/* Body prose */}
                <p className="mt-3 max-w-2xl text-base leading-[1.9] text-black/62">{m.body}</p>

                {/* Sentence before the blockquote — rendered only when a quote is present */}
                {m.quoteContext && (
                  <p className="mt-3 max-w-2xl text-base leading-[1.9] text-black/62">
                    {m.quoteContext}
                  </p>
                )}

                {/* Blockquote — present only in Chapter 3 */}
                {m.quote && (
                  <blockquote className="mt-4 border-l-2 border-zinc-300 pl-4">
                    <p className="text-sm italic leading-[1.85] text-black/55">{m.quote}</p>
                    {m.quoteAttr && (
                      <footer className="mt-2 text-xs text-black/38">{m.quoteAttr}</footer>
                    )}
                  </blockquote>
                )}

                {/* Continuation prose after the blockquote */}
                {m.bodyAfterQuote && (
                  <p className="mt-3 max-w-2xl text-base leading-[1.9] text-black/62">
                    {m.bodyAfterQuote}
                  </p>
                )}

                {/* Key-event bullet list */}
                {m.bullets?.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {m.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm leading-[1.75] text-black/55"
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${m.muted ? 'bg-zinc-400' : 'bg-umred/45'
                            }`}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Source note — where the PDF flags uncertainty or single-source records */}
                {m.note && (
                  <p className="mt-3.5 text-xs italic leading-[1.75] text-black/38">
                    ※ {m.note}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        {/* What the society runs today — the sections above, named in one place. */}
      </div>
    </AnimatedSection>
  );
}

function CalendarSection() {
  return (
    <AnimatedSection id="calendar" className="relative isolate overflow-hidden bg-soft-radial py-24 sm:py-32">
      {/* Behind everything, and out of the way of the card itself. overflow-hidden
          on the section keeps them from widening the page. */}
      <HuiwenWatermark className="-left-10 top-8 h-40 w-40 -scale-x-100 opacity-[0.07] sm:h-56 sm:w-56" />
      <HuiwenWatermark className="-right-10 bottom-8 h-40 w-40 -scale-y-100 opacity-[0.07] sm:h-56 sm:w-56" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="活动日历"
          title="学会全年的行事历，一目了然。"
          description="点击有标记的日期，查看当天的活动详情并前往该活动的页面。"
        />
        <div className="mx-auto mt-14 max-w-3xl">
          {/* Takes no props — it collects everything dated itself. */}
          <EventCalendar />
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─── GallerySection ────────────────────────────────────────────────── */

function GallerySection() {
  return (
    <AnimatedSection id="gallery" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="精彩相册"
          title="以编辑视角构建的砌砖式相册，支持灯箱浏览。"
          description="用影像讲述每一个珍贵时刻，以精致的空间节奏展现视觉故事。"
        />
        <div className="mt-14">
          <GalleryLightbox items={sectionData.gallery} />
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─── TestimonialsSection ───────────────────────────────────────────── */

function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="会员心声"
          title="以优雅的玻璃感轮播，呈现真实的学生故事。"
          description="简短而有力的真实反馈，让版块保持简洁的同时，依然充满温度。"
        />
        <div className="mt-14">
          <TestimonialsCarousel testimonials={sectionData.testimonials} />
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─── SponsorsSection ───────────────────────────────────────────────── */

function SponsorsSection() {
  return (
    <AnimatedSection id="partners" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-black/58">
              赞助商 / 合作伙伴
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
              携手前行，共创文化影响力。
            </h2>
          </div>
        </div>
        <SponsorMarquee items={sectionData.partners} />
      </div>
    </AnimatedSection>
  );
}

/* ─── JoinCtaSection ────────────────────────────────────────────────── */

function JoinCtaSection() {
  return (
    <AnimatedSection id="join" className="bg-[#fafafa] py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[42px] bg-hero-gradient px-6 py-10 text-white shadow-[0_40px_120px_rgba(161,18,23,0.28)] sm:px-14 sm:py-18">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.09),transparent_34%)]" />
          <div className="relative grid gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="font-latin text-[10px] sm:text-[11px] uppercase tracking-widest3 text-white/65">加入我们</p>
              <h2 className="mt-4 sm:mt-5 max-w-2xl text-3xl font-semibold leading-[1.2] tracking-[-0.04em] sm:text-5xl">
                带着你的热忱与理想，加入 PBCUM。
              </h2>
              <p className="mt-5 sm:mt-7 max-w-xl text-sm sm:text-base leading-[1.85] text-white/75">
                我们正在建设一个精致、包容、面向未来的学会。如果你希望在推动文化的同时，成长为一名领导者，这里就是你的归属之地。
              </p>
              <div className="mt-8 sm:mt-9 flex flex-col gap-3.5 sm:flex-row sm:gap-4">
                <a href="mailto:pbcum41@gmail.com" className="btn-primary bg-white text-umred hover:bg-white/95 shadow-none">
                  联系执委会
                  <MessageCircleMore className="h-4 w-4" />
                </a>
                <a href="#footer" className="btn-ghost-white">
                  查看社交媒体
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
              {joinHighlights.map((item, index) => (
                <div key={item} className="rounded-[22px] sm:rounded-[28px] border border-white/14 bg-white/10 p-5 sm:p-7 backdrop-blur-md">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-white/14 text-white">
                    <span className="font-latin text-xs sm:text-sm font-bold">0{index + 1}</span>
                  </div>
                  <p className="mt-4 sm:mt-6 text-xs sm:text-sm leading-[1.85] text-white/82">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─── HomePage ──────────────────────────────────────────────────────── */

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-soft-radial text-ink">
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <WhyJoinSection />
        <ActivitiesSection />
        <CommitteeSection />
        <GallerySection />
        <CalendarSection />
        <TestimonialsSection />
        <SponsorsSection />
        <JoinCtaSection />
        <HistorySection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
