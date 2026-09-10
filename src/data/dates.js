/**
 * dates.js — the date helpers, kept free of every other module.
 *
 * These used to live in calendar.js. The trouble was that calendar.js reads the
 * content (`events`, `departments`, `siteData`) in order to derive what is
 * dated, so anything importing a helper from it pulled the whole content graph
 * in behind. EventPageLayout wanted one function, `parseDate`, and by taking it
 * from calendar.js closed a loop:
 *
 *   pages/events/index -> QZH -> EventPageLayout -> calendar -> pages/events/index
 *
 * A cycle like that survives only while nothing in it *runs* during module
 * evaluation. `events` became a filtered list — `published(allEvents)`, a call
 * — which is exactly that, and the cycle started throwing "Cannot access 'qzh'
 * before initialization" on reload.
 *
 * Nothing here imports anything, so no cycle can form through it.
 */

/** 'YYYY-MM-DD' or 'D.M.YYYY' -> Date at local midnight, or null. */
export function parseDate(value) {
  if (typeof value !== 'string') return null;
  const s = value.trim();
  if (!s || s === '待定') return null;

  const iso = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (iso) return new Date(+iso[1], +iso[2] - 1, +iso[3]);

  const dmy = s.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (dmy) return new Date(+dmy[3], +dmy[2] - 1, +dmy[1]);

  return null;
}

/** Local-midnight 'YYYY-MM-DD'. Used as the map key and for sorting. */
export function toKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/**
 * Splits a value that may itself be a range into [start, end].
 * Accepts '30.10.2026-1.11.2026' as well as a separate endDate field.
 */
export function parseRange(dateValue, endValue) {
  if (typeof dateValue === 'string' && !endValue) {
    // Split only between a year and a following day, so '2026-03-06' survives.
    const parts = dateValue.split(/(?<=\d{4})\s*-\s*/);
    if (parts.length === 2) {
      const a = parseDate(parts[0]);
      const b = parseDate(parts[1]);
      if (a) return [a, b ?? a];
    }
  }
  const start = parseDate(dateValue);
  if (!start) return null;
  return [start, parseDate(endValue) ?? start];
}
