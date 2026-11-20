import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { sectionData } from './src/data/siteData';
import { emblemDetails, societyGoals, societyPurposes } from './src/data/about';
import { historyMilestones, historySource } from './src/data/history';
import { departments } from './src/pages/departments';
import { events } from './src/pages/events';
import { SectionHeading } from './src/components/ui/SectionHeading';
import { GradientOrbs } from './src/components/ui/GradientOrbs';
import { GalleryLightbox } from './src/components/GalleryLightbox';
import { TestimonialsCarousel } from './src/components/TestimonialsCarousel';
import { CommitteeGrid } from './src/components/CommitteeGrid';
import { SponsorMarquee } from './src/components/SponsorMarquee';
import { Footer } from './src/components/Footer';
import { Navbar } from './src/components/Navbar';
import { WuteSection, QixiaozuSection } from './src/components/ProgramsGrid';
import { EventCalendar } from './src/components/EventCalendar';

const galleryAlbums = [
  {
    title: '五特活',
    items: events.flatMap((event) => {
      const photos = event.gallery ?? event.photoSections?.flatMap((section) => section.photos.slice(0, 1)) ?? [];
      return photos.filter((photo) => photo.src).slice(0, 2);
    }),
  },
  { title: '七小组', items: departments.flatMap((group) => (group.gallery ?? []).filter((photo) => photo.src).slice(0, 1)) },
  { title: '四十周年纪念晚宴', items: sectionData.gallery },
];

const heroPhotos = [
  ...events.flatMap(({ gallery }) => (gallery ?? []).filter((photo) => photo.src).slice(0, 1)),
  ...galleryAlbums[1].items.slice(0, 1),
  ...sectionData.gallery.slice(0, 1),
];

function HeroGallerySlider({ items }) {
  const [index, setIndex] = useState(0);

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

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-36 lg:pt-40">
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
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl text-4xl font-semibold leading-[1.15] tracking-[-0.04em] sm:text-5xl xl:text-6xl"
          >
            马来亚大学华文学会
          </motion.h1>
          <p lang="ms" className="mt-3 font-latin text-sm font-semibold text-umred sm:text-base">
            Persatuan Bahasa Cina Universiti Malaya（PBCUM）
          </p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
            className="mt-6 sm:mt-8 max-w-2xl text-base leading-[1.85] text-black/58 sm:text-lg"
          >
            马来亚大学华文学会是马大的学生社团。学会通过华语学习、文艺演出、辩论、生活营与社区服务，推动中华文化交流，并让学生在活动筹办与服务中学习。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.22 }}
            className="mt-8 sm:mt-10 flex flex-col gap-3.5 sm:flex-row sm:gap-4"
          >
            <Link to="/join" className="btn-primary">
              入会咨询
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#about" className="btn-secondary">
              认识学会
              <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              { href: '#activities', count: events.length, label: '五特活' },
              { href: '#groups', count: departments.length, label: '七小组' },
            ].map(({ href, count, label }) => (
              <a key={href} href={href} className="rounded-2xl border border-black/10 bg-white p-4 hover:border-umred">
                <span className="font-latin text-2xl font-bold text-umred">{count}</span>
                <span className="ml-2 text-sm font-semibold">{label}</span>
              </a>
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
              <h2 className="text-xl font-semibold sm:text-2xl">学会精彩瞬间</h2>
              <HeroGallerySlider items={heroPhotos} />
              <a href="#gallery" className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold">
                浏览精彩相册 <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
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
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">关于我们</h2>
            <p className="mt-5 max-w-2xl text-base leading-[1.85] text-black/70">
              马来亚大学华文学会由马大学生筹办。学会设有七小组，并通过五项特别活动接触大专生、中学生、华小学生及社区伙伴。活动包括语言学习、相声、辩论、音乐创作、文化表演、升学资讯与社区服务。
            </p>
            <a href="#history" className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-umred">
              阅读学会简史 <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <section aria-labelledby="society-theme" className="rounded-3xl border border-umred/15 bg-umred/[0.04] p-6 sm:p-8">
            <h3 id="society-theme" className="text-base font-semibold text-umred">学会主题</h3>
            <p className="mt-3 text-2xl font-semibold text-ink">{historySource.motto}</p>
            <dl className="mt-5 space-y-3 text-base leading-relaxed">
              <div className="flex items-baseline gap-3">
                <dt className="shrink-0 font-semibold">扎实</dt>
                <dd className="text-black/70">自我完备，扎下坚实的基础。</dd>
              </div>
              <div className="flex items-baseline gap-3">
                <dt className="shrink-0 font-semibold">回馈</dt>
                <dd className="text-black/70">面向世界，饮水思源。</dd>
              </div>
            </dl>
          </section>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 sm:gap-6">
          {[
            { id: 'society-purposes', title: '三大宗旨', items: societyPurposes },
            { id: 'society-goals', title: '五大目标', items: societyGoals },
          ].map(({ id, title, items }) => (
            <section key={id} aria-labelledby={id} className="rounded-3xl border border-black/10 p-6 sm:p-8">
              <h3 id={id} className="text-xl font-semibold text-ink">{title}</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-[1.75] text-black/70 marker:font-semibold marker:text-umred">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ol>
            </section>
          ))}
        </div>

        <section aria-labelledby="society-emblem" className="mt-8 rounded-3xl border border-black/10 p-6 sm:p-8">
          <h3 id="society-emblem" className="text-xl font-semibold text-ink">会徽及其含义</h3>
          <div className="mt-6 grid items-center gap-6 md:grid-cols-[10rem_1fr] lg:gap-10">
            <img
              src="/pbcum.jpg"
              alt="马来亚大学华文学会会徽"
              width={850}
              height={850}
              loading="lazy"
              decoding="async"
              className="mx-auto h-36 w-36 object-contain md:h-40 md:w-40"
            />
            <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {emblemDetails.map(({ symbol, meaning }) => (
                <div key={symbol}>
                  <dt className="font-semibold text-ink">{symbol}</dt>
                  <dd className="mt-1 leading-[1.75] text-black/70">{meaning}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <p className="mt-5 text-sm leading-relaxed text-black/60">
          据第四十届《马大华文学会简介》第 4–5、10–11 张整理。
        </p>
      </div>
    </section>
  );
}

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
        <section id="activities" className="bg-white py-24 sm:py-32">
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
        </section>
      )}

      {/* ── 七小组 ── dense directory grid, tinted background ───────── */}
      {departments.length > 0 && (
        <section id="groups" className="bg-[#fafafa] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="七大工作小组"
              title="找到属于你的位置，发现你的舞台。"
              description="认识七小组的例常活动、演出、比赛与服务项目。"
            />
            <div className="mt-14">
              <QixiaozuSection items={departments} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ─── CommitteeSection ──────────────────────────────────────────────── */

function CommitteeSection() {
  return (
    <section id="committee" className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* The previous heading and standfirst described the cards ("每张个人
            卡片都经过精心设计，而非仓促拼凑") rather than the people on them. A
            visitor here wants to know who runs the society, so that is what
            this says. How to reach a group is said once, in the note beside
            the group-lead cards, rather than twice. */}
        <SectionHeading
          eyebrow="执委会"
          title="执委会架构与成员"
          description="执行委员统筹学会的日常运作与年度活动，七小组则各由一位负责人带领。"
        />
        <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6">
          <p className="font-semibold text-ink">马来亚大学华文学会</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-black/70">
            <li><a href="#committee-officers" className="underline">执行委员</a>，负责母会事务</li>
            <li><a href="#committee-leads" className="underline">七小组负责人</a>，统筹各组活动</li>
            <li><a href="#committee-activity-advisers" className="underline">特别活动咨询委员</a></li>
          </ul>
        </div>
        <CommitteeGrid members={sectionData.committee} />
      </div>
    </section>
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

function HistorySection() {
  return (
    <section id="history" className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <HuiwenWatermark className="-right-12 top-12 h-44 w-44 opacity-[0.05] sm:h-64 sm:w-64" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="学会简史"
          description="从早期文艺活动、学会复办到档案传承，按时期回顾学会的发展。"
        />

        <p className="mt-5 text-sm leading-relaxed text-black/65">
          据<cite>《{historySource.title}》</cite>整理。该书由{historySource.edition}，下方沿用原文页码。
        </p>
        <ol className="mt-14 space-y-0">
          {historyMilestones.map((m, i) => (
            <li key={m.era} className="relative flex gap-6 pb-12 last:pb-0 sm:gap-8">
              {/* Vertical rail — omitted on the last item so it does not trail past the node */}
              {i < historyMilestones.length - 1 && (
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

                {m.note && (
                  <p className="mt-4 max-w-2xl border-l-2 border-umred/25 pl-3 text-sm leading-relaxed text-black/65">
                    {m.note}
                  </p>
                )}
                <p className="mt-3 text-xs text-black/60">
                  《简史》{m.pages}{m.additionalSource && `、${m.additionalSource}`}
                </p>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}

function CalendarSection() {
  return (
    <section id="calendar" className="relative isolate overflow-hidden bg-soft-radial py-24 sm:py-32">
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
    </section>
  );
}

/* ─── GallerySection ────────────────────────────────────────────────── */

function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="精彩相册"
          title="历届活动照片"
          description="按活动类别浏览，点击照片可查看说明。"
        />
        {galleryAlbums.filter(({ items }) => items.length > 0).map(({ title, items }) => (
          <section key={title} className="mt-10">
            <h3 className="mb-5 text-2xl font-semibold">{title}</h3>
            <GalleryLightbox items={items} />
          </section>
        ))}
      </div>
    </section>
  );
}

/* ─── TestimonialsSection ───────────────────────────────────────────── */

function TestimonialsSection() {
  if (sectionData.testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="会员心声"
          title="会员分享"
          description="学长姐和现届会员分享他们参与活动、筹办项目与服务社区的经历。"
        />
        <div className="mt-14">
          <TestimonialsCarousel testimonials={sectionData.testimonials} />
        </div>
      </div>
    </section>
  );
}

/* ─── SponsorsSection ───────────────────────────────────────────────── */

function SponsorsSection() {
  if (sectionData.partners.length === 0) return null;

  return (
    <section id="partners" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-black/58">
              赞助商 / 合作伙伴
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
              学会赞助与合作
            </h2>
          </div>
        </div>
        <SponsorMarquee items={sectionData.partners} />
      </div>
    </section>
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
        <ActivitiesSection />
        <CommitteeSection />
        <GallerySection />
        <CalendarSection />
        <TestimonialsSection />
        <SponsorsSection />
        <HistorySection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
