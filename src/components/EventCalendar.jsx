/**
 * EventCalendar — the homepage 活动日历.
 *
 * Takes no props and needs no maintenance. It calls collectCalendarEntries(),
 * which derives everything dated from the same CONTENT objects the cards and
 * detail pages render from. Put a `date` on an event, a department, one of its
 * activities or a tour stop and it appears here on the next render; this file
 * is never edited to add content. See src/data/calendar.js.
 *
 * Two views of the same data:
 *
 *   grid  a month at a time — good for browsing a year, poor on a phone, where
 *         seven columns leave ~44px cells before gaps and most of them empty
 *   list  what is coming up, then what has passed — answers the question a
 *         phone visitor actually has
 *
 * The default follows the viewport (list under md, grid from md up) and the
 * toggle overrides it, so the grid stays reachable on a phone for looking back
 * through the year.
 *
 * Colour comes from each item's own accent, sampled from its logo, so a dot
 * here matches the card and the page it leads to. Past dates are muted rather
 * than hidden — this is a record as well as a plan.
 */

import { useEffect, useMemo, useRef, useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, List, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { buildDayMap, collectCalendarEntries, toKey } from '../data/calendar';

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];
const MAX_DOTS = 3; // beyond this a day shows "+N"

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

/* ─── Entry pill, shared by the day popup and the list view ─────────────── */

function EntryRow({ e, past, onPick }) {
  return (
    <button
      type="button"
      onClick={() => onPick(e)}
      className={`flex w-full items-start gap-3 rounded-2xl px-3 py-2.5 text-left transition-colors duration-200 hover:bg-black/[0.04] ${
        past ? 'opacity-55' : ''
      }`}
    >
      <span
        className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
        style={{ backgroundColor: e.color }}
      />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-ink">{e.title}</span>
        <span className="mt-0.5 block text-[11px] text-black/45">
          {e.parent ? `${e.parent} · ${e.label}` : e.label}
        </span>
      </span>
    </button>
  );
}

/* ─── Month grid ────────────────────────────────────────────────────────── */

function MonthGrid({ year, month, dayMap, today, onPickDay, selectedKey }) {
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <>
      <div className="grid grid-cols-7 gap-1">
        {WEEKDAYS.map((w) => (
          <div
            key={w}
            className="py-1 text-center font-latin text-[10px] font-semibold uppercase tracking-wider text-black/30"
          >
            {w}
          </div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (!day) return <div key={`pad-${i}`} />;

          const date = new Date(year, month, day);
          const key = toKey(date);
          const entries = dayMap[key] ?? [];
          const isToday = key === toKey(today);
          const isPast = date < today;
          const isSelected = key === selectedKey;

          return (
            <button
              key={key}
              type="button"
              disabled={entries.length === 0}
              aria-label={
                entries.length
                  ? `${year} 年 ${month + 1} 月 ${day} 日，${entries.length} 项活动`
                  : undefined
              }
              onClick={() => onPickDay(key)}
              className={`relative flex aspect-square flex-col items-center justify-center rounded-xl text-sm transition-colors duration-200 ${
                entries.length
                  ? 'cursor-pointer font-semibold text-ink hover:bg-black/[0.05]'
                  : 'cursor-default text-black/25'
              } ${isSelected ? 'bg-black/[0.06]' : ''} ${
                isPast && entries.length ? 'opacity-55' : ''
              }`}
            >
              <span
                className={
                  isToday
                    ? 'flex h-6 w-6 items-center justify-center rounded-full bg-umred font-semibold text-white shadow-[0_2px_8px_rgba(161,18,23,0.35)]'
                    : undefined
                }
              >
                {day}
              </span>

              {entries.length > 0 && (
                <span className="mt-0.5 flex items-center gap-0.5">
                  {entries.slice(0, MAX_DOTS).map((e, n) => (
                    <span
                      key={n}
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: e.color }}
                    />
                  ))}
                  {entries.length > MAX_DOTS && (
                    <span className="font-latin text-[9px] font-bold leading-none text-black/45">
                      +{entries.length - MAX_DOTS}
                    </span>
                  )}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}

/* ─── List ──────────────────────────────────────────────────────────────── */

function AgendaList({ entries, today, onPick }) {
  const upcoming = entries.filter((e) => e.end >= today);
  const past = entries.filter((e) => e.end < today).reverse();

  const stamp = (e) =>
    e.start.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric' }) +
    (toKey(e.end) !== toKey(e.start)
      ? ` – ${e.end.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric' })}`
      : '');

  const Group = ({ title, list, muted }) =>
    list.length === 0 ? null : (
      <div className={muted ? 'mt-6 opacity-60' : ''}>
        <p className="px-3 font-latin text-[10px] font-semibold uppercase tracking-widest2 text-black/35">
          {title}
        </p>
        <div className="mt-1.5 flex flex-col">
          {list.map((e, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="w-20 flex-shrink-0 pt-3 pl-3 font-latin text-[11px] text-black/45">
                {stamp(e)}
              </span>
              <div className="min-w-0 flex-1">
                <EntryRow e={e} past={muted} onPick={onPick} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  if (entries.length === 0) {
    return (
      <p className="px-3 py-8 text-center text-sm text-black/40">
        目前还没有已排定日期的活动。
      </p>
    );
  }

  return (
    <div className="max-h-[26rem] overflow-y-auto pb-1">
      <Group title="即将举行" list={upcoming} />
      <Group title="已结束" list={past} muted />
    </div>
  );
}

/* ─── EventCalendar ─────────────────────────────────────────────────────── */

export function EventCalendar() {
  const navigate = useNavigate();
  const popupRef = useRef(null);

  const entries = useMemo(() => collectCalendarEntries(), []);
  const dayMap = useMemo(() => buildDayMap(entries), [entries]);
  const today = useMemo(startOfToday, []);

  /* Open on a month that has something in it: the next upcoming entry, or the
     most recent past one once the schedule has run out. Opening on the current
     month shows an empty grid whenever the calendar is a season out of date. */
  const initial = useMemo(() => {
    const pick = entries.find((e) => e.end >= today) ?? entries[entries.length - 1];
    const d = pick ? pick.start : today;
    return { year: d.getFullYear(), month: d.getMonth() };
  }, [entries, today]);

  const [viewYear, setViewYear] = useState(initial.year);
  const [viewMonth, setViewMonth] = useState(initial.month);
  const [selectedKey, setSelectedKey] = useState(null);
  // 'auto' follows the viewport; picking a view pins it.
  const [view, setView] = useState('auto');

  const step = (delta) => {
    setSelectedKey(null);
    const d = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
  };

  useEffect(() => {
    if (!selectedKey) return;
    const onDown = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) setSelectedKey(null);
    };
    const onKey = (e) => e.key === 'Escape' && setSelectedKey(null);
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [selectedKey]);

  const go = (e) => {
    setSelectedKey(null);
    if (e.href) navigate(e.href);
  };

  const selected = selectedKey ? (dayMap[selectedKey] ?? []) : [];
  const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
  });

  /* Visibility for the two views. The display value has to be passed in: an
     element that is `flex` needs `md:flex` to come back, and `md:block` would
     silently override it and stack its children. */
  const showFor = (which, display = 'block') => {
    if (view === which) return display === 'flex' ? 'flex' : '';
    if (view !== 'auto') return 'hidden';
    return which === 'grid' ? `hidden md:${display}` : `${display === 'flex' ? 'flex' : ''} md:hidden`;
  };
  const gridClass = showFor('grid');
  const listClass = showFor('list');

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[32px] border border-black/6 bg-white shadow-soft">
      {/* Brand bar, as on the programme modals and the join card. */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#A11217] via-[#C2477A] to-[#8B5E10]" />

      {/* Header — month navigation, and the view toggle */}
      <div className="flex items-center justify-between gap-3 border-b border-black/6 px-5 py-4">
        <div className={`items-center gap-1 ${showFor('grid', 'flex')}`}>
          <button
            id="cal-prev-month"
            type="button"
            onClick={() => step(-1)}
            aria-label="上个月"
            className="flex h-8 w-8 items-center justify-center rounded-full text-black/45 transition-colors duration-200 hover:bg-black/5 hover:text-ink"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="min-w-[7rem] text-center text-sm font-semibold tracking-[-0.02em] text-ink">
            {monthLabel}
          </span>
          <button
            id="cal-next-month"
            type="button"
            onClick={() => step(1)}
            aria-label="下个月"
            className="flex h-8 w-8 items-center justify-center rounded-full text-black/45 transition-colors duration-200 hover:bg-black/5 hover:text-ink"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <span className={`text-sm font-semibold text-ink ${listClass}`}>活动一览</span>

        <div className="flex items-center gap-1 rounded-full border border-black/8 bg-black/[0.03] p-0.5">
          <button
            type="button"
            onClick={() => setView('list')}
            aria-label="列表检视"
            aria-pressed={view === 'list'}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-200 ${
              view === 'list' ? 'bg-white text-ink shadow-sm' : 'text-black/40 hover:text-ink'
            }`}
          >
            <List className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setView('grid')}
            aria-label="月历检视"
            aria-pressed={view === 'grid'}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-200 ${
              view === 'grid' ? 'bg-white text-ink shadow-sm' : 'text-black/40 hover:text-ink'
            }`}
          >
            <CalendarDays className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="relative px-4 py-4">
        <div className={gridClass}>
          <MonthGrid
            year={viewYear}
            month={viewMonth}
            dayMap={dayMap}
            today={today}
            selectedKey={selectedKey}
            onPickDay={setSelectedKey}
          />
        </div>
        <div className={listClass}>
          <AgendaList entries={entries} today={today} onPick={go} />
        </div>

        {/* Day popup — a day may hold several entries, so it always offers a
            choice rather than guessing which one was meant. */}
        {selected.length > 0 && (
          <div
            ref={popupRef}
            className="absolute inset-x-4 bottom-4 z-20 rounded-[22px] border border-black/8 bg-white p-3 shadow-[0_16px_50px_rgba(17,24,39,0.16)]"
          >
            <div className="flex items-center justify-between px-2 pb-1">
              <p className="text-[11px] font-semibold text-black/45">
                {new Date(
                  ...selectedKey.split('-').map((v, i) => (i === 1 ? +v - 1 : +v)),
                ).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <button
                id="cal-popup-close"
                type="button"
                onClick={() => setSelectedKey(null)}
                aria-label="关闭"
                className="flex h-6 w-6 items-center justify-center rounded-full text-black/35 transition-colors hover:bg-black/5 hover:text-ink"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="max-h-52 overflow-y-auto">
              {selected.map((e, i) => (
                <EntryRow key={i} e={e} past={e.end < today} onPick={go} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-black/6 bg-[#fcfbfa] px-5 py-3">
        {[
          ['五特活', '#A11217'],
          ['七小组', '#1A3A9E'],
          ['学会活动', '#6B7280'],
        ].map(([label, color]) => (
          <span key={label} className="flex items-center gap-1.5 text-[10px] text-black/45">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
            {label}
          </span>
        ))}
        <span className="ml-auto text-[10px] text-black/30">已结束的日期会淡化显示</span>
      </div>
    </div>
  );
}
