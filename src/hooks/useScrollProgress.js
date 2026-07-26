import { useScroll, useTransform } from 'framer-motion';

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, (value) => value);
}
