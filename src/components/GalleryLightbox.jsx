import { AnimatePresence, motion } from 'framer-motion';
import { Expand, X } from 'lucide-react';
import { useMemo, useState } from 'react';

export function GalleryLightbox({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeItem = useMemo(() => (activeIndex === null ? null : items[activeIndex]), [activeIndex, items]);

  return (
    <>
      <div className="grid auto-rows-[180px] gap-4 md:grid-cols-3 md:auto-rows-[220px]">
        {items.map((item, index) => (
          <motion.button
            key={item.title}
            type="button"
            whileHover={{ y: -6, scale: 1.01 }}
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded-[30px] ${item.span} border border-black/6 bg-black text-left shadow-soft`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.tone} transition-transform duration-700 group-hover:scale-105`} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.48))]" />
            <div className="relative flex h-full flex-col justify-between p-5 text-white">
              <div className="flex items-center justify-between text-sm text-white/74">
                <span>{item.category}</span>
                <Expand className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-white/64">PBCUM</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[34px] border border-white/12 bg-white shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className={`h-[42vh] bg-gradient-to-br ${activeItem.tone} p-6 text-white sm:h-[52vh] sm:p-8`}>
                <button type="button" aria-label="Close lightbox" onClick={() => setActiveIndex(null)} className="ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-md transition hover:bg-white/18">
                  <X className="h-5 w-5" />
                </button>
                <div className="mt-24 sm:mt-40">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/64">{activeItem.category}</p>
                  <h3 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">{activeItem.title}</h3>
                </div>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-[1.2fr_0.8fr] sm:p-8">
                <p className="text-sm leading-7 text-black/65">
                  A stylized gallery moment that can hold photography, poster art, or social highlights without breaking the premium visual language.
                </p>
                <div className="rounded-[24px] bg-[#fafafa] p-5 text-sm text-black/55">
                  Perfect for posters, event photography, and story-driven social highlights.
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
