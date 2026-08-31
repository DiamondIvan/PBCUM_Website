import { ArrowRight, CalendarDays, ChevronLeft, MapPin } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { Navbar } from '../components/Navbar';
import { Reveal } from '../hooks/useInView.jsx';
import { getEventBySlug } from '../data/events';

/* ─── NotFound ──────────────────────────────────────────────────────── */

function NotFound({ type }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-soft-radial px-4 text-ink">
      <p className="font-latin text-xs font-semibold uppercase tracking-widest3 text-umred/68">404</p>
      <h1 className="text-3xl font-semibold">{type} 未找到</h1>
      <Link to="/#activities" className="btn-secondary">
        <ChevronLeft className="h-4 w-4" />
        返回活动列表
      </Link>
    </main>
  );
}

/* ─── TourSchedule ─────────────────────────────────────────────────── */

/**
 * Derives a display status from a date string.
 * Accepts DD.MM.YYYY (single day) or DD.MM.YYYY-DD.MM.YYYY (range).
 * Falls back to 'tbd' for any unparseable / '待定' string.
 */
function parseLocalDate(ddmmyyyy) {
  const m = ddmmyyyy.trim().match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (!m) return null;
  return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
}

function deriveStatus(dateStr) {
  if (!dateStr || dateStr === '待定') return 'tbd';

  // Split on the hyphen between two dates (e.g. '30.10.2026-1.11.2026')
  // A date part always ends with a 4-digit year before the hyphen.
  const rangeParts = dateStr.split(/(?<=\d{4})-/);
  const start = parseLocalDate(rangeParts[0]);
  if (!start) return 'tbd';

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (rangeParts.length > 1) {
    const end = parseLocalDate(rangeParts[1]);
    if (end) {
      if (end < today)   return 'past';
      if (start <= today) return 'current'; // running right now
    }
  }

  return start > today ? 'upcoming' : 'past';
}

const STATUS_CONFIG = {
  upcoming: {
    label: '即将举行',
    dot: 'bg-emerald-500',
    pill: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200',
  },
  current: {
    label: '进行中',
    dot: 'bg-blue-500 animate-pulse',
    pill: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200',
  },
  past: {
    label: '已结束',
    dot: 'bg-black/20',
    pill: 'bg-black/5 text-black/38 ring-1 ring-black/10',
  },
  tbd: {
    label: '待定',
    dot: 'bg-black/15',
    pill: 'bg-black/5 text-black/35 ring-1 ring-black/8',
  },
};

function TourSchedule({ stops, accent }) {
  if (!stops?.length) return null;
  return (
    <div className="mt-16 sm:mt-20">
      <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">全年时间线</p>
      <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
        每一阶段，都是扬帆的足迹。
      </h2>
      <div className="mt-8 divide-y divide-black/6 overflow-hidden rounded-[28px] border border-black/6 bg-white shadow-soft">
        {stops.map((stop, i) => {
          const status = deriveStatus(stop.date);
          const cfg = STATUS_CONFIG[status];
          const isPast = status === 'past';
          const hasLocation = stop.location && stop.location !== '待定';
          return (
            <div
              key={i}
              className={`group flex items-center gap-5 px-7 py-5 transition-colors duration-200 hover:bg-black/[0.015] ${
                isPast ? 'opacity-45' : ''
              }`}
            >
              {/* Step chip */}
              <span
                className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${
                  accent
                } font-latin text-sm font-bold text-white shadow-sm`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Phase label + optional venue */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-base font-semibold text-ink">{stop.label}</p>
                {hasLocation && (
                  <p className="mt-0.5 flex items-center gap-1.5 truncate text-sm text-black/45">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0 opacity-60" />
                    {stop.location}
                  </p>
                )}
              </div>

              {/* Date */}
              <div className="hidden flex-shrink-0 items-center gap-1.5 sm:flex">
                <CalendarDays className="h-4 w-4 text-black/28" />
                <span className="text-sm text-black/55">{stop.date}</span>
              </div>

              {/* Status badge */}
              <span
                className={`ml-2 flex flex-shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                  cfg.pill
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
                {cfg.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── EventDetailPage ───────────────────────────────────────────────── */

export function EventDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const event = getEventBySlug(slug);

  if (!event) return <NotFound type="活动" />;

  const Icon = event.icon;

  function goBack() {
    // If there's browser history, go back; otherwise fall to the activities section
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
        {/* Gradient hero panel */}
        <div className={`relative mx-4 overflow-hidden rounded-[36px] bg-gradient-to-br ${event.accent} sm:mx-6 lg:mx-8`}>
          {/* Noise / radial overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_44%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.22),transparent_50%)]" />

          <div className="relative px-8 py-14 text-white sm:px-14 sm:py-20 lg:py-28">
            {/* Back-link */}
            <button
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md transition-colors duration-200 hover:bg-white/18 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              返回活动列表
            </button>

            <div className="mt-10 max-w-5xl">
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
                {event.date}
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

        {/* ── Tour schedule (only for multi-stop events) ────────────── */}
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

        {/* ── Highlights ───────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <div className="mt-16 sm:mt-20">
            <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">精彩时刻</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
              那些让人难忘的瞬间。
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {event.highlights.map((h, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group relative overflow-hidden rounded-[28px] border border-black/6 bg-white p-8 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(161,18,23,0.05),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <span className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${event.accent} font-latin text-sm font-bold text-white`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="whitespace-pre-line mt-5 text-lg font-semibold leading-snug text-ink">{h.label}</h3>
                      <p className="mt-2 text-sm leading-[1.8] text-black/55">{h.caption}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

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
