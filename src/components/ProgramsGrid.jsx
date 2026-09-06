import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ────────────────────────────────────────────────────────────────────────
 * Motion presets
 * ──────────────────────────────────────────────────────────────────────── */

const easing = [0.22, 1, 0.36, 1];

/* ────────────────────────────────────────────────────────────────────────
 * Card colour
 * ──────────────────────────────────────────────────────────────────────── */

/**
 * The one colour an item is themed by, sampled from its own logo.
 * Regenerate with `python scripts/logo-colors.py` after swapping a logo.
 */
function itemColor(item) {
  return item.accentHex;
}

/** Darkens #RRGGBB by `amount` (0-1) so a flat card colour can form a gradient. */
function darken(hex, amount = 0.34) {
  const n = parseInt(hex.slice(1), 16);
  const f = 1 - amount;
  return `rgb(${Math.round(((n >> 16) & 255) * f)}, ${Math.round(((n >> 8) & 255) * f)}, ${Math.round((n & 255) * f)})`;
}

/** Gradient for the modal header bar and icon tile, built from the card colour. */
function colorGradient(color, dir = 'to right') {
  return `linear-gradient(${dir}, ${color}, ${darken(color)})`;
}

/** Returns stagger variants that honour prefers-reduced-motion. */
function useCardVariants() {
  const reduced = useReducedMotion();
  return {
    hidden: { opacity: 0, y: reduced ? 0 : 22 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : 0.6,
        delay: reduced ? 0 : i * 0.09,
        ease: easing,
      },
    }),
  };
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: easing },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 8,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

/* ────────────────────────────────────────────────────────────────────────
 * ProgramModal — shared overlay for both section types
 * ──────────────────────────────────────────────────────────────────────── */

function ProgramModal({ item, type, onClose }) {
  const closeRef = useRef(null);
  const isEvent = type === 'event';
  const isImgIcon = typeof item.logo === 'string';
  const Icon = isImgIcon ? null : item.icon;
  // Same colour the card is tinted with, so opening a card does not change hue.
  const color = itemColor(item);

  useEffect(() => { closeRef.current?.focus(); }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={item.title}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <motion.div
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-[32px] bg-white shadow-[0_40px_120px_rgba(17,24,39,0.22)]"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar — matches the card's own logo colour */}
        {color && <div className="h-2 w-full" style={{ background: colorGradient(color) }} />}

        <div className="max-h-[85dvh] overflow-y-auto">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 px-6 sm:px-8 pt-6 sm:pt-7 pb-0">
            <div className="flex items-center gap-3.5 sm:gap-4">
              {!isImgIcon && (
                <div
                  className="flex h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-2xl shadow-sm"
                  style={color ? { background: colorGradient(color, 'to bottom right') } : undefined}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
              )}
              <div>
                <p className="font-latin text-[10px] font-semibold uppercase tracking-widest3 text-black/38">
                  {isEvent ? '五特活' : '七小组'}
                </p>
                <h2 className="mt-0.5 text-lg sm:text-xl font-semibold leading-tight text-ink">
                  {item.title}
                </h2>
              </div>
            </div>
            <button
              ref={closeRef}
              onClick={onClose}
              className="group flex h-10 w-10 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-black/50 transition-colors duration-200 hover:border-black/20 hover:bg-black/[0.08] hover:text-black/80"
              aria-label="关闭"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Centered logo (image icons only) */}
          {isImgIcon && (
            <div className="flex justify-center px-6 sm:px-8 pt-5 sm:pt-6 pb-2">
              <img src={item.logo} alt="" className="h-24 w-24 sm:h-28 sm:w-28 object-contain drop-shadow-lg" />
            </div>
          )}

          {/* Body */}
          <div className="px-6 sm:px-8 pt-4 sm:pt-5 pb-7 sm:pb-8">
            <p className="text-sm sm:text-base leading-[1.8] text-black/58">{item.teaser}</p>
            <div className="mt-4 sm:mt-5 rounded-[18px] border border-black/6 bg-[#fafafa] px-5 sm:px-6 py-4 sm:py-5">
              <p className="whitespace-pre-line text-xs sm:text-sm leading-[1.85] text-black/55">{item.detail}</p>
            </div>
            <Link
              to={isEvent ? `/events/${item.slug}` : `/departments/${item.slug}`}
              onClick={onClose}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-umred px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#881116] active:translate-y-0"
            >
              查看完整详情
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────────────────
 * ProgramCard — single card atom
 *
 * Color & motif system (per-logo extraction):
 *
 *  五特活 (events):
 *    item.accentHex → bottom gradient wash (45% card height, fades from
 *    ~30% colour at the base to transparent at top) + bottom-right corner
 *    回纹 L-bar fragment. Card background stays white; all text stays dark.
 *
 *  七小组 (departments):
 *    item.accentHex → 5px top accent bar + top-right corner 回纹 L-bar
 *    fragment. White card body, dark text, unchanged from previous.
 *
 *  Both corner motifs share the same nested-L-bar SVG shape; only their
 *  corner anchor (bottom-right vs top-right) differs. All decorative layers
 *  are aria-hidden and pointer-events-none.
 * ──────────────────────────────────────────────────────────────────────── */

function ProgramCard({ item, index, type, onOpen, variants }) {
  const isEvent = type === 'event';
  const isImgIcon = typeof item.logo === 'string';
  const Icon = isImgIcon ? null : item.icon;

  // A stale hex here is invisible until someone notices the card no longer
  // matches its logo — which is exactly how 新家 and 全中华 drifted.
  const color = itemColor(item);

  return (
    <motion.article
      custom={index}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      aria-label={`了解更多：${item.title}`}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(item)}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[28px] border border-black/6 bg-white p-7 shadow-soft outline-none transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-umred focus-visible:ring-offset-2"
    >
      {/* ── Hover colour wash (subtle red radial — both sections) ── */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_right,rgba(161,18,23,0.06),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* ── 五特活: bottom gradient wash ──────────────────────────────────
       *  Semi-transparent gradient rising from the card's bottom edge,
       *  covering the title/teaser zone (~45% of card height).
       *  Fades from ~30% colour at bottom → transparent at top.
       *  Dark text on the white-backed gradient stays fully readable.
       *  Slightly intensifies on hover as part of the lift animation.
       * ─────────────────────────────────────────────────────────────────── */}
      {color && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-[45%] rounded-b-[28px] opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(to top, ${color}4D 0%, ${color}1A 55%, transparent 100%)`,
          }}
        />
      )}

      {/* ── Top accent bar (5px) — both sections ─────────────────────────── */}
      {color && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-[5px]"
          style={{ backgroundColor: color }}
        />
      )}

      {/* ── Corner 回纹 fragment (both sections) ──────────────────────────
       *  Three nested filled L-bars stepping inward from the card corner,
       *  evoking a meander / 回纹 inlay. Same SVG shape for both sections;
       *  only the corner anchor changes:
       *    Events      → bottom-right (matches the bottom gradient zone)
       *    Departments → top-right    (matches the top accent bar zone)
       *  Opacity: 12% rest → 24% hover. overflow-hidden clips to border-radius.
       * ─────────────────────────────────────────────────────────────────── */}
      {color && (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          className={`pointer-events-none absolute ${
            isEvent ? 'bottom-0 right-0' : 'top-0 right-0'
          } opacity-[0.12] transition-opacity duration-300 group-hover:opacity-[0.24]`}
          style={{ color }}
        >
          {isEvent ? (
            /* Bottom-right L-bars: bars run along bottom and right edges, step inward */
            <>
              {/* Outer L — bottom + right, 3px */}
              <rect x="0"  y="41" width="44" height="3" fill="currentColor" />
              <rect x="41" y="0"  width="3"  height="44" fill="currentColor" />
              {/* Middle L — inset 9px, 3px thick, 55% */}
              <rect x="0"  y="32" width="35" height="3" fill="currentColor" fillOpacity="0.55" />
              <rect x="32" y="0"  width="3"  height="35" fill="currentColor" fillOpacity="0.55" />
              {/* Inner L — inset 18px, 2px thick, 30% */}
              <rect x="0"  y="24" width="26" height="2" fill="currentColor" fillOpacity="0.30" />
              <rect x="24" y="0"  width="2"  height="26" fill="currentColor" fillOpacity="0.30" />
            </>
          ) : (
            /* Top-right L-bars: bars run along top and right edges, step inward */
            <>
              {/* Outer L — top + right, 3px */}
              <rect x="0"  y="0" width="44" height="3" fill="currentColor" />
              <rect x="41" y="0" width="3"  height="44" fill="currentColor" />
              {/* Middle L — inset 9px, 3px thick, 55% */}
              <rect x="9"  y="9" width="29" height="3" fill="currentColor" fillOpacity="0.55" />
              <rect x="35" y="9" width="3"  height="29" fill="currentColor" fillOpacity="0.55" />
              {/* Inner L — inset 18px, 2px thick, 30% */}
              <rect x="18" y="18" width="16" height="2" fill="currentColor" fillOpacity="0.30" />
              <rect x="30" y="18" width="2"  height="16" fill="currentColor" fillOpacity="0.30" />
            </>
          )}
        </svg>
      )}

      {/* ── Icon / logo ── */}
      {isImgIcon ? (
        <div className="relative flex w-full justify-center">
          <img
            src={item.logo}
            alt=""
            className="h-28 w-28 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          {isEvent && (
            <span className="absolute right-0 top-0 font-latin text-[11px] font-bold tracking-widest2 text-black/22">
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </div>
      ) : (
        <div className="relative flex items-center justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110"
            style={color ? { background: colorGradient(color, 'to bottom right') } : undefined}
          >
            <Icon className="h-5 w-5 text-white" />
          </div>
          {isEvent && (
            <span className="font-latin text-[11px] font-bold tracking-widest2 text-black/22">
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </div>
      )}

      {/* ── Copy ── */}
      <div className="relative mt-5 flex flex-1 flex-col">
        <h3 className="whitespace-pre-line text-lg font-semibold leading-snug text-ink">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-1 text-sm leading-[1.75] text-black/55">
          {item.teaser}
        </p>
      </div>

      {/* ── Divider ── */}
      <div className="relative mt-5 h-px w-full bg-black/6 transition-colors duration-300 group-hover:bg-umred/20" />

      {/* ── 了解更多 — visible on touch/mobile, slides up on desktop hover ── */}
      <div className="relative mt-4 flex items-center gap-1.5">
        <span className="text-sm font-medium text-umred opacity-100 sm:translate-y-1 sm:opacity-0 transition-[transform,opacity] duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          {item.cta}
        </span>
        <ArrowUpRight className="h-4 w-4 text-umred opacity-100 sm:translate-y-1 sm:opacity-0 transition-[transform,opacity] duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100" />
      </div>
    </motion.article>
  );
}


/* ────────────────────────────────────────────────────────────────────────
 * WuteSection — 五特活 (editorial 3 + 2 grid)
 * ──────────────────────────────────────────────────────────────────────── */

export function WuteSection({ items }) {
  const [active, setActive] = useState(null);
  const variants = useCardVariants();
  const row1 = items.slice(0, 3);
  const row2 = items.slice(3);

  return (
    <>
      <div id="wute" className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {row1.map((item, i) => (
            <ProgramCard key={item.id} item={item} index={i} type="event" onOpen={setActive} variants={variants} />
          ))}
        </div>
        {row2.length > 0 && (
          <div className="mx-auto grid w-full gap-5 sm:grid-cols-2 lg:max-w-[67%]">
            {row2.map((item, i) => (
              <ProgramCard key={item.id} item={item} index={row1.length + i} type="event" onOpen={setActive} variants={variants} />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {active && <ProgramModal item={active} type="event" onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────────
 * QixiaozuSection — 七小组 (dense 4 + 3 directory grid)
 * ──────────────────────────────────────────────────────────────────────── */

export function QixiaozuSection({ items }) {
  const [active, setActive] = useState(null);
  const variants = useCardVariants();
  const row1 = items.slice(0, 4);
  const row2 = items.slice(4);

  return (
    <>
      <div id="qixiaozu" className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {row1.map((item, i) => (
            <ProgramCard key={item.id} item={item} index={i} type="group" onOpen={setActive} variants={variants} />
          ))}
        </div>
        {row2.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {row2.map((item, i) => (
              <ProgramCard key={item.id} item={item} index={row1.length + i} type="group" onOpen={setActive} variants={variants} />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {active && <ProgramModal item={active} type="group" onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}
