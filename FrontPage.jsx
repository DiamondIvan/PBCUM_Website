import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Languages,
  MessageCircleMore,
  Sparkles,
} from 'lucide-react';
import { sectionData } from './src/data/siteData';
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
import { ActivityShowcase } from './src/components/ActivityShowcase';
import { useMousePosition } from './src/hooks/useMousePosition';
import { useScrollProgress } from './src/hooks/useScrollProgress';

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

/* ─── IconCard ──────────────────────────────────────────────────────── */

function IconCard({ icon: Icon, title, description }) {
  return (
    <MotionCard className="group relative overflow-hidden rounded-[30px] border border-white/62 bg-white p-8 shadow-soft backdrop-blur-xl transition duration-350 hover:-translate-y-1.5 hover:shadow-card-hover">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(161,18,23,0.07),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col gap-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-umred/10 text-umred transition duration-400 group-hover:scale-110 group-hover:bg-umred group-hover:text-white">
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
  const { x, y } = useMousePosition();
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-34 lg:pt-38">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-72"
        style={{
          background: `radial-gradient(circle at ${x}% ${y}%, rgba(161,18,23,0.15), transparent 20%), linear-gradient(180deg, rgba(255,255,255,0.97), rgba(245,245,247,0.92))`,
        }}
      />
      <GradientOrbs />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 pb-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-32">
        {/* Left column */}
        <div className="max-w-3xl">
          <div className="mb-9 flex flex-wrap gap-2.5">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-black/8 bg-white/78 px-4 py-2 text-sm font-medium tracking-widest2 text-black/55 shadow-[0_10px_30px_rgba(17,24,39,0.05)] backdrop-blur-md"
              >
                {badge}
              </span>
            ))}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="max-w-4xl text-5xl font-semibold leading-[1.12] tracking-[-0.05em] text-ink sm:text-7xl lg:text-[5.2rem]"
          >
            扎实为经<br />·
            <span className="block text-umred">回馈为纬</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.12 }}
            className="mt-8 max-w-2xl text-base leading-[1.85] text-black/58 sm:text-lg"
          >
            PBCUM 汇聚一群珍视语言、认同文化、追求有意义校园生活的学子。我们为文化、领导力与现代学生生活，打造一个精致的数字家园。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.22 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
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
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
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
            className="relative overflow-hidden rounded-[38px] border border-white/62 bg-white/78 p-5 shadow-[0_40px_120px_rgba(17,24,39,0.13)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0.05))]" />
            {/* Main gradient panel */}
            <div className="relative rounded-[32px] bg-hero-gradient p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-latin text-[11px] uppercase tracking-widest3 text-white/68">
                    PBCUM 体验
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight">
                    为马大学子打造的优质文化社群
                  </h2>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/14 backdrop-blur-md">
                  <Languages className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { title: '语言圈子', description: '沉浸式语言练习，增强表达信心与文化流利度。' },
                  { title: '品牌化活动', description: '精心策划的活动，以高水准视觉呈现打造独特体验。' },
                  { title: '领导力成长', description: '通过委员会工作与项目统筹，承担真实责任与挑战。' },
                  { title: '校园人脉网络', description: '以共同志向与相互支持为基础建立的校园社群。' },
                ].map((item) => (
                  <div key={item.title} className="rounded-[22px] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-white/72">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Stats row */}
            <div className="relative mt-4 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-[30px] border border-black/6 bg-[#fbfbfb] p-7 shadow-[0_20px_60px_rgba(17,24,39,0.06)]"
              >
                <p className="font-latin text-[11px] uppercase tracking-widest3 text-black/42">即将举办</p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug text-ink">月夜文化论坛</h3>
                <p className="mt-3 text-sm leading-[1.8] text-black/58">
                  一场融合交流、表演与视觉叙事的精彩夜间体验。
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-umred/10 px-4 py-2 text-sm font-medium text-umred">
                  <Sparkles className="h-3.5 w-3.5" />
                  优质校园活动
                </div>
              </motion.div>
              <div className="grid gap-4">
                <div className="rounded-[28px] border border-black/6 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.06)]">
                  <p className="text-sm font-medium text-black/45">会员增长</p>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="font-latin text-4xl font-bold tracking-[-0.04em] text-ink">1.2K</span>
                    <span className="mb-1 text-sm text-emerald-600">+18% 今年</span>
                  </div>
                </div>
                <div className="rounded-[28px] border border-black/6 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.06)]">
                  <p className="text-sm font-medium text-black/45">校园覆盖</p>
                  <div className="mt-4 flex items-center gap-3 text-sm font-medium text-ink">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
    <AnimatedSection id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
        {/* Left – brand card */}
        <div className="relative overflow-hidden rounded-[38px] bg-[linear-gradient(160deg,rgba(161,18,23,0.97),rgba(81,11,14,0.97))] p-9 text-white shadow-soft sm:p-11">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_44%)]" />
          <div className="relative">
            <p className="font-latin text-[11px] uppercase tracking-widest3 text-white/65">关于 PBCUM</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.25] tracking-[-0.04em] sm:text-4xl">
              以语言为桥，以文化为魂，以领导力为志。
            </h2>
            <p className="mt-6 max-w-xl text-base leading-[1.85] text-white/75">
              我们创造的每一段体验，都帮助学生以自信的姿态表达自我，建立深厚的友谊，并以令人骄傲的方式代表学会。每一个触点，都经过精心雕琢，精致而有温度。
            </p>
            <div className="mt-9 grid grid-cols-2 gap-4">
              {sectionData.aboutPoints.map((point) => (
                <div key={point.title} className="rounded-[22px] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                  <point.icon className="h-5 w-5 text-white/88" />
                  <h3 className="mt-4 font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-[1.72] text-white/68">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right – stat cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {sectionData.aboutStats.map((stat) => (
            <MotionCard
              key={stat.label}
              className="rounded-[32px] border border-black/6 bg-[linear-gradient(180deg,#fff,#f8f8f8)] p-8 shadow-soft transition duration-350 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-latin text-[11px] font-semibold uppercase tracking-widest2 text-black/38">
                    {stat.label}
                  </p>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="font-latin text-5xl font-bold tracking-[-0.05em] text-ink">
                      {stat.value}
                    </span>
                  </div>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-umred/10 text-umred">
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-6 text-sm leading-[1.8] text-black/55">{stat.description}</p>
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

/* ─── ActivitiesSection ─────────────────────────────────────────────── */

function ActivitiesSection() {
  return (
    <AnimatedSection id="activities" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="精彩活动"
          title="每一场活动，都是优质文化品牌的精彩呈现。"
          description="工作坊、展演、论坛与社交活动，以清晰的视觉识别精心策划。"
        />
        <div className="mt-14">
          <ActivityShowcase events={sectionData.activities} />
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ─── CommitteeSection ──────────────────────────────────────────────── */

function CommitteeSection() {
  return (
    <AnimatedSection id="committee" className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="委员会"
          title="认识我们清晰、温暖、精致呈现的领导团队。"
          description="每个职位都有充裕的展示空间，每张个人卡片都经过精心设计，而非仓促拼凑。"
        />
        <CommitteeGrid members={sectionData.committee} />
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
            <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-black/38">
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
    <AnimatedSection id="join" className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[42px] bg-hero-gradient px-9 py-14 text-white shadow-[0_40px_120px_rgba(161,18,23,0.28)] sm:px-14 sm:py-18">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.09),transparent_34%)]" />
          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="font-latin text-[11px] uppercase tracking-widest3 text-white/65">加入我们</p>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.2] tracking-[-0.05em] sm:text-5xl">
                带着你的语言、你的热忱与你的理想，加入 PBCUM。
              </h2>
              <p className="mt-7 max-w-xl text-base leading-[1.85] text-white/75">
                我们正在建设一个精致、包容、面向未来的学会。如果你希望在推动文化的同时，成长为一名领导者，这里就是你的归属之地。
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:pbcum@um.edu.my" className="btn-primary bg-white text-umred hover:bg-white/95 shadow-none">
                  联系委员会
                  <MessageCircleMore className="h-4 w-4" />
                </a>
                <a href="#footer" className="btn-ghost-white">
                  查看社交媒体
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {joinHighlights.map((item, index) => (
                <div key={item} className="rounded-[28px] border border-white/14 bg-white/10 p-7 backdrop-blur-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/14 text-white">
                    <span className="font-latin text-sm font-bold">0{index + 1}</span>
                  </div>
                  <p className="mt-6 text-sm leading-[1.85] text-white/82">{item}</p>
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
  const progress = useScrollProgress();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-soft-radial text-ink">
      {/* Scroll progress indicator */}
      <div className="fixed left-0 top-0 z-50 h-[2.5px] w-full bg-black/5">
        <motion.div className="h-full origin-left bg-umred" style={{ scaleX: progress }} />
      </div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyJoinSection />
      <ActivitiesSection />
      <CommitteeSection />
      <GallerySection />
      <TestimonialsSection />
      <SponsorsSection />
      <JoinCtaSection />
      <Footer />
    </div>
  );
}

export default HomePage;
