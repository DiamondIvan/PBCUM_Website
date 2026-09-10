/**
 * publishing.js — tells finished content apart from scaffold, and strips the
 * scaffold out so an unfinished page can still be shown.
 *
 * Each event and department page starts as a scaffold whose fields hold a
 * worked example of what to write, marked with `// TODO`. Four of the 五特活
 * still do. Those strings were reaching the live site and rendering as the
 * page's date, location and opening line.
 *
 * The rule is read from the content itself rather than from a list someone has
 * to maintain: a field is scaffold while it carries the marker. Replace the
 * example with real words and it counts as written — nothing here to edit, and
 * no way for a flag to drift out of step with the writing.
 *
 * Two things are built on that:
 *
 *   isDraft(item)          is anything still unwritten?
 *   withoutScaffold(item)  the same item with every scaffold field removed
 *
 * `withoutScaffold` is what lets the four unfinished activities stay listed.
 * Both page layouts omit any section they have no data for, so an item whose
 * scaffold has been stripped degrades on its own to a short "being written"
 * page — title, logo and a note — instead of showing `// TODO: 活动日期` to a
 * visitor. Nothing needs a placeholder written for it by hand.
 */

const MARKER = '// TODO';

const isScaffoldString = (v) => typeof v === 'string' && v.includes(MARKER);

/** React elements and lucide icons — walk past them, they hold no words. */
const isReactish = (v) => typeof v === 'object' && v !== null && !!v.$$typeof;

/** True when any string anywhere in `value` still holds the scaffold marker. */
function hasMarker(value, depth = 0) {
  // Content objects are shallow — a guard is cheaper than trusting they stay so.
  if (depth > 6 || value == null) return false;
  if (typeof value === 'string') return value.includes(MARKER);
  if (Array.isArray(value)) return value.some((v) => hasMarker(v, depth + 1));
  if (isReactish(value)) return false;
  if (typeof value === 'object') {
    return Object.values(value).some((v) => hasMarker(v, depth + 1));
  }
  // Numbers, booleans, and the icon components themselves (plain functions).
  return false;
}

/** An item still carrying scaffold text anywhere in its content. */
export function isDraft(item) {
  return hasMarker(item);
}

/**
 * Deep copy with every scaffold field dropped.
 *
 * Returns `undefined` for anything that is entirely scaffold, which is what
 * makes it collapse cleanly: a gallery of five placeholder entries becomes no
 * gallery at all rather than five blank tiles, and the layout's existing
 * "render this section only if it has data" checks do the rest.
 */
function strip(value, depth = 0) {
  if (depth > 6 || value == null) return value;
  if (isScaffoldString(value)) return undefined;
  // Icons and React elements pass through untouched — they are not content.
  if (isReactish(value) || typeof value === 'function') return value;

  if (Array.isArray(value)) {
    const kept = value.map((v) => strip(v, depth + 1)).filter((v) => v !== undefined);
    return kept.length ? kept : undefined;
  }

  if (typeof value === 'object') {
    const out = {};
    for (const [key, v] of Object.entries(value)) {
      const cleaned = strip(v, depth + 1);
      if (cleaned !== undefined) out[key] = cleaned;
    }
    // An entry left with nothing but its own decoration — a gallery tile whose
    // caption was the only real field — is not worth rendering.
    return Object.keys(out).length ? out : undefined;
  }

  return value;
}

/**
 * An item safe to render: scaffold removed, and flagged so the page and its
 * card can say plainly that it is still being written.
 */
export function withoutScaffold(item) {
  if (!isDraft(item)) return item;
  return { ...strip(item), isDraft: true };
}

/** Only the items finished enough to link to. Preserves the given order. */
export function published(items) {
  return items.filter((item) => !isDraft(item));
}
