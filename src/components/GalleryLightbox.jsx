import { AnimatePresence, motion } from 'framer-motion';
import { Expand, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * ImageDetailModal — Full-screen lightbox modal for a single photo item
 */
export function ImageDetailModal({ item, onClose }) {
  const closeRef = useRef(null);
  // The element that was focused before the modal opened, so focus can be put
  // back where the user left it rather than dropped on <body>.
  const returnFocusRef = useRef(null);

  // Same pattern as ProgramModal: focus the close control on open, close on
  // Escape. Without this a keyboard user who opens the lightbox — the most
  // widely reused modal in the app — has no keyboard way to close it.
  useEffect(() => {
    if (!item) return undefined;
    returnFocusRef.current = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      // Only restore if focus is still somewhere in the (now unmounting) modal;
      // if the user has since clicked elsewhere, leave their choice alone.
      returnFocusRef.current?.focus?.();
    };
  }, [item, onClose]);

  // Hold the page still behind the overlay. ProgramModal already does this;
  // without it a swipe on a phone scrolls the page under the photo, and closing
  // the lightbox leaves the reader somewhere they never navigated to.
  useEffect(() => {
    if (!item) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [item]);

  if (!item) return null;

  const title = item.alt || item.label || item.title || '';
  const imageSrc = item.src || item.image || null;
  const category = item.category || '精彩瞬间';
  const tone = item.tone || 'from-[#1f2937] to-[#111827]';
  const description = item.description || item.caption || '每一帧记忆，都是学会风采最真实的呈现。这里珍藏着我们共同走过的精彩瞬间。';
  const detail = item.detail;

  // Rendered into <body> so the overlay is never trapped inside a transformed
  // ancestor (e.g. <Reveal>), which would make `fixed` resolve against that
  // element instead of the viewport and push the modal below the fold.
  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/68 px-4 py-6 backdrop-blur-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 32, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative max-h-[90dvh] overflow-y-auto w-full max-w-4xl rounded-[28px] sm:rounded-[36px] border border-white/12 bg-white shadow-[0_30px_120px_rgba(0,0,0,0.38)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[32dvh] overflow-hidden sm:h-[48dvh]">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className={`h-full bg-gradient-to-br ${tone}`} />
          )}
          {/* Overlay controls + caption always on top */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.0)_40%,rgba(0,0,0,0.65))] p-5 sm:p-10">
            <div className="flex justify-end">
              <button
                ref={closeRef}
                type="button"
                aria-label="关闭图片"
                onClick={onClose}
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/14 text-white backdrop-blur-md transition hover:bg-white/22"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-10 sm:left-10 sm:right-10">
              <span className="inline-block rounded-full bg-white/14 px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-widest2 text-white/80 backdrop-blur-sm">
                {category}
              </span>
              <h3 className="mt-2 sm:mt-3 text-xl sm:text-4xl font-semibold tracking-[-0.04em] text-white">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Content body with custom description & optional detail note */}
        <div className={`grid gap-4 sm:gap-5 p-5 sm:p-9 ${detail ? 'sm:grid-cols-[1.3fr_0.7fr]' : ''}`}>
          <div className="space-y-1.5 sm:space-y-2">
            <p className="font-latin text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest2 text-umred/70">照片故事</p>
            <p className="text-sm sm:text-base leading-[1.85] text-black/68">
              {description}
            </p>
          </div>
          {detail && (
            <div className="flex flex-col justify-center rounded-[20px] sm:rounded-[22px] border border-black/5 bg-[#f8f8f8] p-4 sm:p-5 text-xs sm:text-sm leading-[1.75] text-black/55">
              <p className="font-latin text-[10px] font-semibold uppercase tracking-widest2 text-black/58 mb-1">详细说明</p>
              <p>{detail}</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}

/**
 * GalleryLightbox
 * @param {{
 *   items: Array<{ src?: string|null, alt: string, category: string, span?: string, tone: string, description?: string, detail?: string }>
 * }} props
 */
export function GalleryLightbox({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      {/* grid-flow-dense backfills any hole a span leaves, so adding or removing
          a photograph cannot open a gap the way it did before. */}
      <div className="grid auto-rows-[190px] gap-4 md:grid-cols-3 md:auto-rows-[230px] md:grid-flow-row-dense">
        {items.map((item, index) => (
          <motion.button
            key={index}
            type="button"
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded-[28px] sm:rounded-[32px] ${item.span} border border-black/6 bg-black text-left shadow-soft`}
          >
            {/* Photo or gradient background.
                lazy + async: this grid is the one place the site renders a large
                number of photographs at once — 社服组 alone puts 91 through it.
                Loading them all eagerly made that page fetch 51 MB before a phone
                could show anything. The tiles sit in fixed `auto-rows` with the
                image absolutely positioned, so the row height never depends on
                the image and deferring it shifts nothing. */}
            {item.src ? (
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${item.tone} transition-transform duration-300 group-hover:scale-106`} />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.52))]" />
            <div className="relative flex h-full flex-col justify-between p-5 sm:p-6 text-white">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  {item.category}
                </span>
                <Expand className="h-4 w-4 opacity-70 transition duration-300 group-hover:opacity-100" />
              </div>
              <div>
                <p className="font-latin text-[10px] uppercase tracking-widest3 text-white/55">PBCUM</p>
                <h3 className="mt-1.5 sm:mt-2 text-lg sm:text-2xl font-semibold tracking-[-0.03em]">{item.alt}</h3>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <ImageDetailModal
            item={activeItem}
            onClose={() => setActiveIndex(null)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

