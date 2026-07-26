import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

export function TestimonialsCarousel({ testimonials }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[index];

  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[34px] border border-black/6 bg-white p-6 shadow-soft sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.quote}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            <Quote className="h-8 w-8 text-umred/30" />
            <p className="mt-6 text-2xl font-medium leading-[1.55] tracking-[-0.03em] text-ink sm:text-3xl">{current.quote}</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-umred text-sm font-semibold text-white">
                {current.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
              <div>
                <p className="font-semibold text-ink">{current.name}</p>
                <p className="text-sm text-black/50">{current.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="rounded-[34px] border border-black/6 bg-[linear-gradient(180deg,#fff,#f7f7f7)] p-6 shadow-soft sm:p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-black/40">Carousel controls</p>
        <div className="mt-5 flex gap-3">
          <button type="button" onClick={() => setIndex((currentIndex) => (currentIndex - 1 + testimonials.length) % testimonials.length)} className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-ink transition hover:border-umred hover:text-umred">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => setIndex((currentIndex) => (currentIndex + 1) % testimonials.length)} className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-ink transition hover:border-umred hover:text-umred">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-8 space-y-3">
          {testimonials.map((testimonial, testimonialIndex) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setIndex(testimonialIndex)}
              className={`w-full rounded-[24px] border px-5 py-4 text-left transition ${testimonialIndex === index ? 'border-umred/20 bg-umred/5' : 'border-black/6 bg-white hover:border-black/10'}`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-ink">{testimonial.name}</span>
                <span className="text-xs uppercase tracking-[0.22em] text-black/38">0{testimonialIndex + 1}</span>
              </div>
              <p className="mt-2 text-sm text-black/54">{testimonial.role}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
