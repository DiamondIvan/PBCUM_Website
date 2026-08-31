/**
 * EventPageShared.jsx
 *
 * Shared sub-components imported by every per-event detail page.
 * Keep this file stable — per-event customisation lives in each
 * EventXXPage.jsx, not here.
 */

import { CalendarDays, ChevronLeft, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── NotFoundEvent ─────────────────────────────────────────────────── */

export function NotFoundEvent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-soft-radial px-4 text-ink">
      <p className="font-latin text-xs font-semibold uppercase tracking-widest3 text-umred/68">404</p>
      <h1 className="text-3xl font-semibold">活动未找到</h1>
      <Link to="/#activities" className="btn-secondary">
        <ChevronLeft className="h-4 w-4" />
        返回活动列表
      </Link>
    </main>
  );
}

/* ─── TourSchedule helpers ──────────────────────────────────────────── */

/**
 * Parses a DD.MM.YYYY string into a local Date.
 * Returns null if the string does not match the expected format.
 */
export function parseLocalDate(ddmmyyyy) {
  const m = ddmmyyyy.trim().match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (!m) return null;
  return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
}

/**
 * Derives a display status from a date string.
 * Accepts DD.MM.YYYY (single day) or DD.MM.YYYY-DD.MM.YYYY (range).
 * Falls back to 'tbd' for any unparseable / '待定' string.
 *
 * Returns: 'upcoming' | 'current' | 'past' | 'tbd'
 */
export function deriveStatus(dateStr) {
  if (!dateStr || dateStr === '待定') return 'tbd';
  const rangeParts = dateStr.split(/(?<=\d{4})-/);
  const start = parseLocalDate(rangeParts[0]);
  if (!start) return 'tbd';
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (rangeParts.length > 1) {
    const end = parseLocalDate(rangeParts[1]);
    if (end) {
      if (end < today)    return 'past';
      if (start <= today) return 'current';
    }
  }
  return start > today ? 'upcoming' : 'past';
}

export const STATUS_CONFIG = {
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

/* ─── TourSchedule ──────────────────────────────────────────────────── */

/**
 * Full-year timeline strip for multi-stop / multi-phase events.
 * Renders nothing when stops is empty or undefined.
 *
 * Props:
 *   stops    — array of { label, date, location } from the event data
 *   accent   — Tailwind gradient string for the step chip (e.g. event.accent)
 *   title    — optional eyebrow override (default: '全年时间线')
 *   subtitle — optional h2 override
 */
export function TourSchedule({
  stops,
  accent,
  title = '全年时间线',
  subtitle = '每一阶段，都是扬帆的足迹。',
}) {
  if (!stops?.length) return null;
  return (
    <div className="mt-16 sm:mt-20">
      <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">
        {title}
      </p>
      <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
        {subtitle}
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
              className={`group flex items-center gap-3.5 sm:gap-5 px-4 py-4 sm:px-7 sm:py-5 transition-colors duration-200 hover:bg-black/[0.015] ${isPast ? 'opacity-45' : ''}`}
            >
              <span className={`flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${accent} font-latin text-xs sm:text-sm font-bold text-white shadow-sm`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm sm:text-base font-semibold text-ink">{stop.label}</p>
                <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs sm:text-sm text-black/45">
                  {hasLocation && (
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0 opacity-60" />
                      {stop.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1 sm:hidden text-black/55">
                    <CalendarDays className="h-3 w-3 flex-shrink-0 text-black/35" />
                    {stop.date}
                  </span>
                </div>
              </div>
              <div className="hidden flex-shrink-0 items-center gap-1.5 sm:flex">
                <CalendarDays className="h-4 w-4 text-black/28" />
                <span className="text-sm text-black/55">{stop.date}</span>
              </div>
              <span className={`ml-1 sm:ml-2 flex flex-shrink-0 items-center gap-1 sm:gap-1.5 rounded-full px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold ${cfg.pill}`}>
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
