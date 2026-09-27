/**
 * IntroCard — the 简介 panel on every 七小组 and 五特活 page.
 *
 * The opening paragraph used to sit straight on the page background, and read
 * as plain body copy rather than the page's introduction. This gives it a
 * quiet white card of its own, dressed in the item's own accent colour so it
 * still belongs to that group or activity:
 *
 *   · a rail down the left edge, fading from the accent
 *   · a faint wash of the accent in the top-right corner
 *   · the same nested 回纹 L-bars the homepage cards carry, in that corner
 *
 * All three are decorative, aria-hidden and pointer-events-none. The accent is
 * a #RRGGBB hex — the two hex digits appended below are its alpha.
 */
export function IntroCard({ eyebrow, accent = '#A11217', children }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white px-7 py-8 shadow-soft sm:px-10 sm:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1.5"
        style={{ background: `linear-gradient(to bottom, ${accent}, ${accent}33)` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(circle at top right, ${accent}14, transparent 42%)` }}
      />
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 44 44"
        className="pointer-events-none absolute right-0 top-0 h-16 w-16 opacity-[0.18] sm:h-20 sm:w-20"
        style={{ color: accent }}
      >
        <rect x="0" y="0" width="44" height="3" fill="currentColor" />
        <rect x="41" y="0" width="3" height="44" fill="currentColor" />
        <rect x="9" y="9" width="29" height="3" fill="currentColor" fillOpacity="0.55" />
        <rect x="35" y="9" width="3" height="29" fill="currentColor" fillOpacity="0.55" />
        <rect x="18" y="18" width="16" height="2" fill="currentColor" fillOpacity="0.30" />
        <rect x="30" y="18" width="2" height="16" fill="currentColor" fillOpacity="0.30" />
      </svg>

      <div className="relative">
        <p
          className="font-latin text-[11px] font-semibold uppercase tracking-widest3"
          style={{ color: accent }}
        >
          {eyebrow}
        </p>
        <p className="mt-4 max-w-3xl whitespace-pre-line text-base leading-[1.95] text-black/70 sm:text-lg">
          {children}
        </p>
      </div>
    </div>
  );
}
