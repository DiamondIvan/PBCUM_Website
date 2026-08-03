import { motion } from 'framer-motion';
import { MOTION } from './animations';

export function AnimatedSection({ children, className = '', id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: MOTION.duration, ease: MOTION.ease }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold leading-[1.25] tracking-[-0.04em] text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-[1.8] text-black/58">{description}</p>
      ) : null}
    </div>
  );
}
