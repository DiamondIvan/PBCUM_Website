import { useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/* Drives the digits through plain React state rather than handing a
   MotionValue to JSX as a child: that pattern relies on framer-motion
   patching the DOM node outside React's render cycle, which was found to
   silently never kick in for some of the four hero cards (stuck at "0"
   indefinitely). An explicit setState on every tick has no such failure mode. */
function useCount(target) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: '-12% 0px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return undefined;
    const numericTarget = Number(target.toString().replace(/[^\d.]/g, '')) || 0;
    const controls = animate(0, numericTarget, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest).toLocaleString()),
    });
    return controls.stop;
  }, [inView, target]);

  return { nodeRef, display };
}

export function StatCounter({ value, label, icon: Icon }) {
  const { nodeRef, display } = useCount(value);

  return (
    <div
      ref={nodeRef}
      className="rounded-[22px] border border-black/6 bg-white/82 p-3 sm:p-4 shadow-[0_10px_32px_rgba(17,24,39,0.06)] backdrop-blur-md"
    >
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-umred/10 text-umred">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
        <div className="min-w-0">
          <div className="font-latin text-xl sm:text-[1.6rem] font-bold leading-none tracking-[-0.04em] text-ink">
            {display}
          </div>
          <p className="mt-1 truncate text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest2 text-black/58">{label}</p>
        </div>
      </div>
    </div>
  );
}
