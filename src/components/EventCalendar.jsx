import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ─── Colour tokens per event type ─────────────────────────────────────── */
const TYPE_STYLES = {
  wute: {
    dot: 'bg-[#A11217]',
    badge: 'bg-[#A11217]/10 text-[#A11217]',
    ring: 'ring-[#A11217]/30',
  },
  qixiaozu: {
    dot: 'bg-[#0369a1]',
    badge: 'bg-[#0369a1]/10 text-[#0369a1]',
    ring: 'ring-[#0369a1]/30',
  },
  other: {
    dot: 'bg-[#7c3aed]',
    badge: 'bg-[#7c3aed]/10 text-[#7c3aed]',
    ring: 'ring-[#7c3aed]/30',
  },
};

/* ─── Helpers ───────────────────────────────────────────────────────────── */

function toKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function buildEventMap(events) {
  const map = {};
  for (const ev of events) {
    if (!map[ev.date]) map[ev.date] = [];
    map[ev.date].push(ev);
  }
  return map;
}

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];

/* ─── EventCalendar ─────────────────────────────────────────────────────── */

/**
 * @param {{ events: Array<{date:string, title:string, type:'wute'|'qixiaozu'|'other', label:string, href:string}> }} props
 */
export function EventCalendar({ events = [] }) {
  const navigate = useNavigate();

  // Default to the month of the first upcoming/past event that has a real date,
  // falling back to today's month.
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState(null); // { year, month, day }
  const popupRef = useRef(null);

  const eventMap = buildEventMap(events);

  /* Build calendar grid for current view ─── */
  const firstDay = new Date(viewYear, viewMonth, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const cells = []; // null = padding, number = day
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  // Pad to complete last row
  while (cells.length % 7 !== 0) cells.push(null);

  const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
  });

  function prevMonth() {
    if (viewMonth === 0) {
      setViewYear((y) => y - 1);
      setViewMonth(11);
    } else {
      setViewMonth((m) => m - 1);
    }
    setSelectedDay(null);
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewYear((y) => y + 1);
      setViewMonth(0);
    } else {
      setViewMonth((m) => m + 1);
    }
    setSelectedDay(null);
  }

  function handleDayClick(day) {
    if (!day) return;
    const key = toKey(viewYear, viewMonth, day);
    if (!eventMap[key]) return;
    if (selectedDay?.day === day && selectedDay?.month === viewMonth && selectedDay?.year === viewYear) {
      setSelectedDay(null);
    } else {
      setSelectedDay({ year: viewYear, month: viewMonth, day });
    }
  }

  /* Close popup on outside click ─── */
  useEffect(() => {
    function onPointerDown(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setSelectedDay(null);
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  const selectedKey =
    selectedDay ? toKey(selectedDay.year, selectedDay.month, selectedDay.day) : null;
  const selectedEvents = selectedKey ? (eventMap[selectedKey] ?? []) : [];

  const isToday = (day) =>
    day === today.getDate() &&
    viewMonth === today.getMonth() &&
    viewYear === today.getFullYear();

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-black/6 bg-white shadow-soft">
      {/* ── Top gradient accent ────────────────────────────────────── */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#A11217] via-[#7c3aed] to-[#0369a1]" />

      {/* ── Header ────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 pt-5 pb-3">
        <button
          type="button"
          id="cal-prev-month"
          onClick={prevMonth}
          className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-black/6 active:scale-95"
          aria-label="上一月"
        >
          <ChevronLeft className="h-4 w-4 text-black/50" />
        </button>
        <span className="text-xs font-semibold tracking-[-0.01em] text-ink">
          {monthLabel}
        </span>
        <button
          type="button"
          id="cal-next-month"
          onClick={nextMonth}
          className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-black/6 active:scale-95"
          aria-label="下一月"
        >
          <ChevronRight className="h-4 w-4 text-black/50" />
        </button>
      </div>

      {/* ── Weekday labels ────────────────────────────────────────── */}
      <div className="grid grid-cols-7 px-3 pb-1">
        {WEEKDAYS.map((w) => (
          <div key={w} className="py-0.5 text-center font-latin text-[9px] font-semibold uppercase tracking-wider text-black/30">
            {w}
          </div>
        ))}
      </div>

      {/* ── Day grid ──────────────────────────────────────────────── */}
      <div className="grid flex-1 grid-cols-7 content-start gap-y-0.5 px-3 pb-3">
        {cells.map((day, idx) => {
          if (day === null) {
            return <div key={`pad-${idx}`} />;
          }
          const key = toKey(viewYear, viewMonth, day);
          const dayEvents = eventMap[key] ?? [];
          const hasEvents = dayEvents.length > 0;
          const isSelected =
            selectedDay?.day === day &&
            selectedDay?.month === viewMonth &&
            selectedDay?.year === viewYear;

          // Dominant event type for dot colouring
          const dominantType = hasEvents ? dayEvents[0].type : null;

          return (
            <button
              type="button"
              key={key}
              id={`cal-day-${key}`}
              onClick={() => handleDayClick(day)}
              disabled={!hasEvents}
              className={[
                'relative flex flex-col items-center justify-center rounded-xl py-1 text-[11px] transition-all duration-200',
                hasEvents
                  ? 'cursor-pointer hover:bg-black/5 active:scale-95'
                  : 'cursor-default',
                isSelected
                  ? 'bg-ink text-white shadow-sm'
                  : isToday(day)
                  ? 'font-bold text-umred'
                  : hasEvents
                  ? 'font-semibold text-ink'
                  : 'text-black/35',
              ].join(' ')}
              aria-label={hasEvents ? `${day}日，${dayEvents.length}个活动` : `${day}日`}
            >
              <span>{day}</span>
              {/* Event dots */}
              {hasEvents && !isSelected && (
                <span className="mt-0.5 flex gap-px">
                  {dayEvents.slice(0, 3).map((ev, i) => (
                    <span
                      key={i}
                      className={`h-1 w-1 rounded-full ${TYPE_STYLES[ev.type]?.dot ?? 'bg-black/40'}`}
                    />
                  ))}
                </span>
              )}
              {isSelected && (
                <span className="mt-0.5 h-1 w-1 rounded-full bg-white/70" />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Legend ────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-black/6 px-4 py-2.5">
        {[
          { type: 'wute', label: '五特活' },
          { type: 'qixiaozu', label: '七小组' },
          { type: 'other', label: '其他' },
        ].map(({ type, label }) => (
          <span key={type} className="flex items-center gap-1 text-[9px] text-black/45">
            <span className={`h-1.5 w-1.5 rounded-full ${TYPE_STYLES[type].dot}`} />
            {label}
          </span>
        ))}
      </div>

      {/* ── Event popup ───────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedDay && selectedEvents.length > 0 && (
          <motion.div
            ref={popupRef}
            role="dialog"
            aria-modal="false"
            aria-label={`${selectedDay.day}日 活动`}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute inset-x-3 bottom-[56px] z-20 overflow-hidden rounded-[22px] border border-black/8 bg-white shadow-[0_12px_48px_rgba(0,0,0,0.16)] backdrop-blur-xl"
          >
            {/* Popup header */}
            <div className="flex items-center justify-between border-b border-black/6 px-4 py-3">
              <p className="text-xs font-semibold text-ink">
                {viewYear}年{viewMonth + 1}月{selectedDay.day}日
              </p>
              <button
                type="button"
                id="cal-popup-close"
                onClick={() => setSelectedDay(null)}
                className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-black/6"
                aria-label="关闭"
              >
                <X className="h-3.5 w-3.5 text-black/50" />
              </button>
            </div>

            {/* Event list */}
            <ul className="flex max-h-48 flex-col gap-0 divide-y divide-black/5 overflow-y-auto">
              {selectedEvents.map((ev, i) => {
                const styles = TYPE_STYLES[ev.type] ?? TYPE_STYLES.other;
                const isExternal = !ev.href.startsWith('/');

                function handleClick() {
                  setSelectedDay(null);
                  navigate(ev.href);
                }

                return (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={handleClick}
                      className="group/item flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-black/3"
                    >
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${styles.badge} ring-1 ${styles.ring} text-[8px] font-bold`}>
                        {ev.type === 'wute' ? '特' : ev.type === 'qixiaozu' ? '组' : '活'}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[11px] font-semibold leading-snug text-ink group-hover/item:text-umred transition-colors">
                          {ev.title}
                        </p>
                        <p className="mt-0.5 text-[9px] text-black/45">{ev.label}</p>
                      </div>
                      <ChevronRight className="mt-1 h-3 w-3 shrink-0 text-black/25 transition group-hover/item:translate-x-0.5 group-hover/item:text-black/50" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
