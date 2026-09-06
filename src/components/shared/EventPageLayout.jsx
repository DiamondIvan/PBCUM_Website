/**
 * EventPageLayout.jsx — the one layout every 五特活 page renders through.
 *
 * Each of the five activities keeps its own page file holding its own words and
 * passes them here as `content`. The words are edited per activity; the markup
 * is not — so all five pages stay identically structured and none can drift.
 *
 * Sections, in order:
 *
 *   1  Hero          accent banner, title, hook, date / location / 五特活 chips
 *   2  活动简介       the intro paragraph
 *   3  全年时间线     TourSchedule — only for multi-stop events (tourStops)
 *   4  精彩相册       gallery grid, opens a lightbox
 *   5  精彩时刻       horizontally scrolling highlight cards
 *   6  参与未来       closing CTA
 *
 * Sections whose field is absent are not rendered, so an activity still
 * gathering material shows a shorter page rather than empty headings.
 */

import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GalleryLightbox, ImageDetailModal } from '../GalleryLightbox';
import { Navbar } from '../Navbar';
import { NotFoundEvent, TourSchedule } from './EventPageShared';
import { Reveal } from '../../hooks/useInView.jsx';
import { parseDate } from '../../data/calendar';

/** The `date` field feeds both this chip and the homepage calendar, so it is
 *  stored as ISO. Shown here in the form a reader expects; anything that is
 *  not a date (a placeholder, 待定) passes through untouched. */
function formatDate(value) {
  const d = parseDate(value);
  if (!d) return value;
  return d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function EventPageLayout({ content: event }) {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [activeHighlight, setActiveHighlight] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (!event) return <NotFoundEvent />;

  const Icon = event.icon;

  function goBack() {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/#activities');
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-soft-radial text-ink">
      <Navbar />

      {/* ── Hero banner ─────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-24 sm:pt-28">
        <div className={`relative mx-4 overflow-hidden rounded-[36px] bg-gradient-to-br ${event.accent} sm:mx-6 lg:mx-8`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_44%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.22),transparent_50%)]" />

          <div className="relative px-8 py-14 text-white sm:px-14 sm:py-20 lg:py-28">
            <button
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md transition-colors duration-200 hover:bg-white/18 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              返回活动列表
            </button>

            {/* The activity's own logo, matching the card it was opened from.
                Sits on a light card because the marks are dark-on-transparent
                and would disappear against the accent gradient. */}
            {event.logo && (
              <div className="mt-10 flex h-24 w-24 items-center justify-center rounded-[24px] border border-white/25 bg-white/95 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:h-28 sm:w-28">
                <img src={event.logo} alt="" className="h-full w-full object-contain" />
              </div>
            )}

            <div className={`${event.logo ? 'mt-8' : 'mt-10'} max-w-5xl`}>
              <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-white/58">
                {event.eyebrow}
              </p>
              <h1 className="mt-4 whitespace-pre-line text-4xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                {event.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-[1.8] text-white/75 sm:text-xl">
                {event.hook}
              </p>
            </div>

            {/* Date + location badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                <CalendarDays className="h-4 w-4 opacity-75" />
                {formatDate(event.date)}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                <MapPin className="h-4 w-4 opacity-75" />
                {event.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                <Icon className="h-4 w-4 opacity-75" />
                五特活
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content wrapper ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* ── Intro paragraph ──────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <div className="mt-16 sm:mt-20">
            <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">活动简介</p>
            <p className="mt-5 max-w-3xl whitespace-pre-line text-justify text-xl leading-[1.85] text-black/68 sm:text-2xl">
              {event.intro}
            </p>
          </div>
        </Reveal>

        {/* ── Tour schedule (only for multi-stop / timeline events) ── */}
        {event.tourStops?.length > 0 && (
          <Reveal delay={0.06}>
            <TourSchedule stops={event.tourStops} accent={event.accent} />
          </Reveal>
        )}

        {/* ── Gallery ──────────────────────────────────────────────── */}
        <Reveal delay={0.08}>
          <div className="mt-16 sm:mt-20">
            <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">精彩相册</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
              每一帧，都是故事。
            </h2>
            <div className="mt-8">
              <GalleryLightbox items={event.gallery} />
            </div>
          </div>
        </Reveal>

        {/* ── Highlights (Horizontal Scrollable Carousel) ──────────── */}
        <Reveal delay={0.05}>
          <div className="mt-16 sm:mt-20">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">精彩时刻</p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
                  那些让人难忘的瞬间。
                </h2>
              </div>

              {/* Scroll buttons */}
              {event.highlights?.length > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scroll('left')}
                    aria-label="向前滑动"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/60 shadow-sm transition-all duration-200 hover:border-black/20 hover:bg-black/5 hover:text-ink active:scale-95"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    aria-label="向后滑动"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/60 shadow-sm transition-all duration-200 hover:border-black/20 hover:bg-black/5 hover:text-ink active:scale-95"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Horizontal scrolling track */}
            <div
              ref={scrollRef}
              className="mt-8 flex gap-5 overflow-x-auto pb-5 pt-1 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {event.highlights?.map((h, i) => (
                <div
                  key={i}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveHighlight(h)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveHighlight(h)}
                  className="group relative flex w-[300px] flex-shrink-0 cursor-pointer snap-start flex-col overflow-hidden rounded-[28px] border border-black/6 bg-white shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-umred sm:w-[340px] md:w-[360px]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(161,18,23,0.05),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Photo header — only when image is provided */}
                  {h.image ? (
                    <div className="relative h-48 w-full overflow-hidden bg-black/5">
                      <img
                        src={h.image}
                        alt={h.label}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : null}

                  {/* Text content */}
                  <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="whitespace-pre-line text-lg font-semibold leading-snug text-ink">{h.label}</h3>
                    <p className="mt-2 text-sm leading-[1.8] text-black/55">{h.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Highlights Lightbox Modal ────────────────────────────── */}
        <AnimatePresence>
          {activeHighlight && (
            <ImageDetailModal
              item={activeHighlight}
              onClose={() => setActiveHighlight(null)}
            />
          )}
        </AnimatePresence>

        {/* ── Closing CTA ──────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <div className="mt-16 mb-20 sm:mt-20 sm:mb-28">
            <div className={`relative overflow-hidden rounded-[36px] bg-gradient-to-br ${event.accent} px-9 py-14 text-white shadow-[0_30px_90px_rgba(17,24,39,0.18)] sm:px-14 sm:py-18`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_40%)]" />
              <div className="relative max-w-2xl">
                <p className="font-latin text-[11px] uppercase tracking-widest3 text-white/58">参与未来</p>
                <h2 className="mt-5 text-3xl font-semibold leading-[1.2] tracking-[-0.04em] sm:text-4xl">
                  {event.closingLine}
                </h2>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={event.ctaHref}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-umred shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
                  >
                    {event.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    onClick={goBack}
                    className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/18"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    查看其他活动
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
