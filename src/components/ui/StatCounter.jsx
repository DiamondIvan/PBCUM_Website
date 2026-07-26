import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function useCount(target) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: '-12% 0px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, Number(target.toString().replace(/[^\d.]/g, '')), { duration: 1.4, ease: 'easeOut' });
      return controls.stop;
    }
    return undefined;
  }, [count, inView, target]);

  return { nodeRef, rounded };
}

export function StatCounter({ value, label, icon: Icon }) {
  const { nodeRef, rounded } = useCount(value);

  return (
    <div ref={nodeRef} className="rounded-[24px] border border-black/6 bg-white/80 p-4 shadow-[0_10px_30px_rgba(17,24,39,0.05)] backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-umred/10 text-umred">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <motion.div className="text-2xl font-semibold tracking-[-0.04em] text-ink">{rounded}</motion.div>
          <p className="text-xs uppercase tracking-[0.22em] text-black/42">{label}</p>
        </div>
      </div>
    </div>
  );
}
