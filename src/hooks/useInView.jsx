import { useEffect, useRef, useState } from 'react';

/**
 * useInView — Intersection Observer hook with prefers-reduced-motion support.
 *
 * When the OS has prefers-reduced-motion: reduce set, `inView` is immediately
 * true so that elements render without animation.
 *
 * @param {{ threshold?: number, rootMargin?: string }} options
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // fire once only
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options },
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

/**
 * Reveal — a convenience wrapper that applies the standard fade-up enter
 * animation when its target enters the viewport.
 *
 * Usage:
 *   <Reveal delay={0.1}>
 *     <YourContent />
 *   </Reveal>
 */
export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(22px)',
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
