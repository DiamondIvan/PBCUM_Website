import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ────────────────────────────────────────────────────────────────────────
 * Motion presets
 * ──────────────────────────────────────────────────────────────────────── */

const easing = [0.22, 1, 0.36, 1];

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
  const Icon = item.icon;

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
        {/* Top accent bar */}
        <div className={`h-2 w-full bg-gradient-to-r ${item.accent}`} />

        {/* Header row */}
        <div className="flex items-start justify-between gap-4 px-8 pt-7 pb-0">
          <div className="flex items-center gap-4">
            <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-sm`}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-latin text-[10px] font-semibold uppercase tracking-widest3 text-black/38">
                {isEvent ? '五特活' : '七小组'}
              </p>
              <h2 className="mt-0.5 text-xl font-semibold leading-tight text-ink">
                {item.title}
              </h2>
            </div>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            className="group flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-black/50 transition-colors duration-200 hover:border-black/20 hover:bg-black/[0.08] hover:text-black/80"
            aria-label="关闭"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 pt-5 pb-8">
          <p className="text-base leading-[1.8] text-black/58">{item.teaser}</p>
          <div className="mt-5 rounded-[18px] border border-black/6 bg-[#fafafa] px-6 py-5">
            <p className="text-sm leading-[1.85] text-black/55">{item.detail}</p>
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
      </motion.div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────────────────
 * ProgramCard — single card atom
 * ──────────────────────────────────────────────────────────────────────── */

function ProgramCard({ item, index, type, onOpen, variants }) {
  const isEvent = type === 'event';
  const Icon = item.icon;

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
      {/* Hover wash */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_right,rgba(161,18,23,0.06),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon bubble + optional sequence number */}
      <div className="relative flex items-center justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-sm transition-transform duration-300 group-hover:scale-110`}>
          <Icon className="h-5 w-5" />
        </div>
        {isEvent && (
          <span className="font-latin text-[11px] font-bold tracking-widest2 text-black/22">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>

      {/* Copy */}
      <div className="relative mt-5 flex flex-1 flex-col">
        <h3 className="text-lg font-semibold leading-snug text-ink">{item.title}</h3>
        <p className="mt-2 line-clamp-1 text-sm leading-[1.75] text-black/55">{item.teaser}</p>
      </div>

      {/* Divider */}
      <div className="relative mt-5 h-px w-full bg-black/6 transition-colors duration-300 group-hover:bg-umred/20" />

      {/* 了解更多 — slides up on hover */}
      <div className="relative mt-4 flex items-center gap-1.5">
        <span className="translate-y-1 text-sm font-medium text-umred opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {item.cta}
        </span>
        <ArrowUpRight className="h-4 w-4 translate-y-1 text-umred opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
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
          <div
            className="mx-auto grid gap-5 sm:grid-cols-2"
            style={{ maxWidth: row2.length === 1 ? '33.5%' : '67%' }}
          >
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
