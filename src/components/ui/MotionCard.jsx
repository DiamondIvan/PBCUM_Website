import { motion } from 'framer-motion';
import { HOVER_TRANSITION } from './animations';

export function MotionCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={HOVER_TRANSITION}
      className={className}
    >
      {children}
    </motion.div>
  );
}
