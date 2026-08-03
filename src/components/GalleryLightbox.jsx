import { AnimatePresence, motion } from 'framer-motion';
import { Expand, X } from 'lucide-react';
import { useMemo, useState } from 'react';

export function GalleryLightbox({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeItem = useMemo(() => (activeIndex === null ? null : items[activeIndex]), [activeIndex, items]);

  return (
    <>
      <div className="grid auto-rows-[190px] gap-4 md:grid-cols-3 md:auto-rows-[230px]">
        {items.map((item, index) => (
          <motion.button
            key={item.title}
            type="button"
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded-[32px] ${item.span} border border-black/6 bg-black text-left shadow-soft`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.tone} transition-transform duration-300 group-hover:scale-106`} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.52))]" />
            <div className="relative flex h-full flex-col justify-between p-6 text-white">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  {item.category}
                </span>
                <Expand className="h-4 w-4 opacity-70 transition duration-300 group-hover:opacity-100" />
              </div>
              <div>
                <p className="font-latin text-[10px] uppercase tracking-widest3 text-white/55">PBCUM</p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">{item.title}</h3>
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
            aria-label={activeItem.title}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/68 px-4 py-6 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ y: 32, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[36px] border border-white/12 bg-white shadow-[0_30px_120px_rgba(0,0,0,0.38)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-[42vh] bg-gradient-to-br ${activeItem.tone} p-7 text-white sm:h-[52vh] sm:p-10`}>
                <div className="flex justify-end">
                  <button
                    type="button"
                    aria-label="关闭图片"
                    onClick={() => setActiveIndex(null)}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/14 text-white backdrop-blur-md transition hover:bg-white/22"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-20 sm:mt-36">
                  <span className="inline-block rounded-full bg-white/14 px-3 py-1 text-[11px] uppercase tracking-widest2 text-white/75 backdrop-blur-sm">
                    {activeItem.category}
                  </span>
                  <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                    {activeItem.title}
                  </h3>
                </div>
              </div>
              <div className="grid gap-5 p-7 sm:grid-cols-[1.2fr_0.8fr] sm:p-9">
                <p className="text-sm leading-[1.85] text-black/62">
                  每一帧记忆，都是学会风采最真实的呈现。这里珍藏着我们共同走过的精彩瞬间。
                </p>
                <div className="rounded-[22px] bg-[#f8f8f8] p-5 text-sm leading-[1.75] text-black/52">
                  活动摄影、设计海报与社交媒体精选内容，尽在相册呈现。
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
