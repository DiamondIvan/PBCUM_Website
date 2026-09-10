/**
 * calendar.js — collects everything dated, from wherever it already lives.
 *
 * The calendar used to read a hand-written list of 21 entries kept beside the
 * real content. It drifted, as those always do: four entries linked to the
 * wrong group and one named a 摄影组 that does not exist. This module removes
 * that list. Nothing here is a copy — every entry is derived from the same
 * CONTENT object its card and its detail page render from.
 *
 * ADDING A DATED ITEM
 * -------------------
 * Put a `date` on it. That is the whole procedure; this file needs no edit.
 *
 *     date: '2026-03-06',        // ISO YYYY-MM-DD, the day it starts
 *     endDate: '2026-03-08',     // optional, inclusive; omit for one day
 *
 * A date can sit on:
 *   · an event or department's own CONTENT      -> the item itself is dated
 *   · an entry in its `activities[]`            -> one dated activity
 *   · an entry in an event's `tourStops[]`      -> one stop of a tour
 *   · siteData's `otherEvents`                  -> society-wide dates that
 *                                                  have no subpage of their own
 *
 * Anything without a usable date is skipped in silence — no error, no
 * placeholder. That is deliberate: most items are undated most of the year.
 *
 * DATE FORMATS
 * ------------
 * ISO 'YYYY-MM-DD' for anything new. The existing tourStops use 'DD.MM.YYYY'
 * and 'DD.MM.YYYY-DD.MM.YYYY', so both are accepted rather than rewriting
 * content that is already correct.
 *
 * Dates are parsed at local midnight. 'YYYY-MM-DD' alone is read as UTC by the
 * Date constructor and lands on the previous day for anyone west of Greenwich.
 */

import { parseDate, parseRange, toKey } from './dates';
import { departments } from '../pages/departments';
import { events } from '../pages/events';
import { sectionData } from './siteData';

/* ─── Parsing ───────────────────────────────────────────────────────────────
   The helpers themselves live in ./dates.js, which imports nothing. Anything
   that only needs to read a date should import from there rather than from
   here — this module pulls in the whole content graph, and importing it from
   inside that graph forms a cycle. Re-exported so existing callers keep
   working, and so EventCalendar can take everything from one place. */

export { parseDate, toKey };

/* ─── Collection ────────────────────────────────────────────────────────── */

/**
 * One calendar entry. `color` is the item's own accent, sampled from its logo,
 * so a dot on the calendar matches the card and the page it leads to.
 */
function entry({ title, start, end, type, label, href, color, parent }) {
  return { title, start, end, type, label, href, color, parent, key: toKey(start) };
}

function collectFrom(items, { type, label, routeBase }) {
  const out = [];

  for (const item of items) {
    const href = item.slug ? `${routeBase}/${item.slug}` : undefined;
    const color = item.accentHex;

    // 1. the item itself
    const own = parseRange(item.date, item.endDate);
    if (own) {
      out.push(entry({
        title: item.title, start: own[0], end: own[1],
        type, label, href, color,
      }));
    }

    // 2. its recurring activities, when one has been given a date
    for (const a of item.activities ?? []) {
      const r = parseRange(a.date, a.endDate);
      if (r) {
        out.push(entry({
          title: a.name, start: r[0], end: r[1],
          type, label, href, color, parent: item.title,
        }));
      }
    }

    // 3. the stops of a multi-stop event — already dated, in DD.MM.YYYY
    for (const stop of item.tourStops ?? []) {
      const r = parseRange(stop.date, stop.endDate);
      if (r) {
        out.push(entry({
          title: stop.label, start: r[0], end: r[1],
          type, label, href, color, parent: item.title,
        }));
      }
    }
  }

  return out;
}

/**
 * Every dated thing on the site, sorted. Recomputed on import; there is no
 * cache to invalidate and nothing to wire up when content gains a date.
 */
export function collectCalendarEntries() {
  const all = [
    ...collectFrom(events, { type: 'wute', label: '五特活', routeBase: '/events' }),
    ...collectFrom(departments, { type: 'qixiaozu', label: '七小组', routeBase: '/departments' }),
    // Society-wide dates with no subpage of their own — the one list that is
    // still written by hand, because nothing else in the site describes them.
    ...(sectionData.otherEvents ?? []).flatMap((o) => {
      const r = parseRange(o.date, o.endDate);
      if (!r) return [];
      return [entry({
        title: o.title, start: r[0], end: r[1],
        type: 'other', label: o.label ?? '学会活动',
        href: o.href, color: o.color ?? '#A11217',
      })];
    }),
  ];

  return all.sort((a, b) => a.start - b.start);
}

/**
 * date-key -> entries falling on that day, with multi-day items repeated on
 * every day they cover so a range reads as a block rather than a single dot.
 */
export function buildDayMap(entries) {
  const map = {};
  for (const e of entries) {
    const cursor = new Date(e.start);
    // Guard against a reversed or absurd range rather than looping forever.
    const last = e.end >= e.start ? e.end : e.start;
    let guard = 0;
    while (cursor <= last && guard++ < 400) {
      (map[toKey(cursor)] ??= []).push(e);
      cursor.setDate(cursor.getDate() + 1);
    }
  }
  return map;
}
