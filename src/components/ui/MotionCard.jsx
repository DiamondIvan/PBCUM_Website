import { motion } from 'framer-motion';

export function MotionCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
