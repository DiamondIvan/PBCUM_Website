import { motion } from 'framer-motion';

export function AnimatedSection({ children, className = '', id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.32em] text-umred/70">{eyebrow}</p> : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-black/60">{description}</p> : null}
    </div>
  );
}
