import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

export function TestimonialsCarousel({ testimonials }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[index];

  return (
    <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
      {/* Main quote card */}
      <div className="rounded-[36px] border border-black/6 bg-white p-8 shadow-soft sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.quote}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.38, ease: 'easeOut' }}
            className="relative"
          >
            <Quote className="h-9 w-9 text-umred/28" />
            <p className="mt-7 text-2xl font-medium leading-[1.65] tracking-[-0.02em] text-ink sm:text-3xl">
              {current.quote}
            </p>
            <div className="mt-9 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-umred text-base font-semibold text-white shadow-glow">
                {current.name[0]}
              </div>
              <div>
                <p className="font-semibold text-ink">{current.name}</p>
                <p className="mt-0.5 text-sm text-black/48">{current.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls panel */}
      <div className="rounded-[36px] border border-black/6 bg-[linear-gradient(180deg,#fff,#f8f8f8)] p-7 shadow-soft sm:p-8">
        <p className="text-[11px] uppercase tracking-widest3 text-black/38">切换评价</p>
        <div className="mt-5 flex gap-2.5">
          <button
            type="button"
            aria-label="上一条评价"
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-ink transition duration-200 hover:border-umred hover:text-umred"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="下一条评价"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-ink transition duration-200 hover:border-umred hover:text-umred"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-7 space-y-3">
          {testimonials.map((testimonial, testimonialIndex) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setIndex(testimonialIndex)}
              className={`w-full rounded-[22px] border px-5 py-4 text-left transition duration-200 ${
                testimonialIndex === index
                  ? 'border-umred/22 bg-umred/6 shadow-sm'
                  : 'border-black/6 bg-white hover:border-black/12 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-ink">{testimonial.name}</span>
                <span className="font-latin text-[11px] uppercase tracking-widest2 text-black/35">
                  0{testimonialIndex + 1}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-black/50">{testimonial.role}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
