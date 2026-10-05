import { useEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────────────────────────────────────────
 * shouldShowSplash()
 *
 * Returns true only when we are on "/" AND the browser performed a genuine
 * hard navigation (typed URL / F5 reload). Specifically:
 *
 *   navType === 'navigate'  → fresh address-bar entry
 *   navType === 'reload'    → F5 / Ctrl-R hard reload
 *
 * Why NOT sessionStorage alone:
 *   sessionStorage survives a hard reload (F5), so a flag set on first visit
 *   would incorrectly suppress the splash after reload. Navigation Timing
 *   gives us true browser intent independently.
 *
 * Why NOT NavTiming alone:
 *   On a fresh tab, every route is 'navigate', including /join, /events, etc.
 *   We only want the splash on '/', so we check pathname too.
 * ──────────────────────────────────────────────────────────────────────── */
function shouldShowSplash() {
  if (window.location.pathname !== '/') return false;
  const navEntry = performance.getEntriesByType('navigation')[0];
  const navType  = navEntry?.type ?? 'navigate'; // safe fallback for old browsers
  return navType === 'navigate' || navType === 'reload';
}

/* ─────────────────────────────────────────────────────────────────────────
 * Timing (milliseconds)
 *
 *  BEAT_PAUSE   300 ms  — silent hold after window 'load', feels intentional
 *  SLIDE_DUR    900 ms  — panel slide + logo exit (quick & premium)
 *  UNMOUNT_BUF  120 ms  — buffer after slide so CSS fully settles before unmount
 *  MAX_WAIT    5000 ms  — if window 'load' never fires, proceed anyway
 *
 *  Total perceived animation ≈ 1.2 s  (within the 1.2–1.8 s target)
 * ──────────────────────────────────────────────────────────────────────── */
const T = {
  BEAT_PAUSE:  300,
  SLIDE_DUR:   900,
  // Bumped from 120 → 200 ms: gives slower Android devices more headroom
  // for the CSS transition to visually complete before the element unmounts.
  UNMOUNT_BUF: 200,
  MAX_WAIT:    5000,
};

// Strong ease-out — same curve on panels AND logo so all feel like one motion
const EASE = 'cubic-bezier(0.76, 0, 0.24, 1)';

/* ─────────────────────────────────────────────────────────────────────────
 * <IntroSplash onDone={fn} />
 *
 * Covers the viewport with a top+bottom panel split until the page has
 * fully loaded, then simultaneously:
 *   • Top panel slides to translateY(-100%)
 *   • Bottom panel slides to translateY(+100%)
 *   • Logo spins (360°) + shrinks (scale 0) + fades (opacity 0)
 *
 * The homepage is already rendered behind the overlay from first paint —
 * no "load the page after" step needed.
 * ──────────────────────────────────────────────────────────────────────── */
export function IntroSplash({ onDone }) {
  // Evaluate once on mount — stable ref, no re-computation
  const show = useRef(shouldShowSplash()).current;

  const [animating, setAnimating] = useState(false);
  const [mounted,   setMounted]   = useState(show);
  const topPanelRef = useRef(null);
  const doneRef     = useRef(false);

  // Prefers-reduced-motion check (once, at mount)
  const reducedMotion = useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ).current;

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setMounted(false);
    onDone?.();
  };

  useEffect(() => {
    if (!show) {
      finish();
      return;
    }

    let beatTimer, fallbackTimer, maxWaitTimer;

    /* ── startSequence: fires after load/interactive state (or max-wait cap) ──────── */
    function startSequence() {
      if (reducedMotion) {
        // Respect reduced-motion: skip animation entirely, unmount immediately
        finish();
        return;
      }

      beatTimer = setTimeout(() => {
        setAnimating(true);

        // Fallback safety timer: in case transitionend is dropped or suppressed
        // by battery-saver / backgrounding, ensure splash unmounts reliably.
        fallbackTimer = setTimeout(() => {
          finish();
        }, T.SLIDE_DUR + 500);
      }, T.BEAT_PAUSE);
    }

    /* ── waitForLoad: wait for page readiness with safety cap ──────────── */
    function waitForLoad() {
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        startSequence();
        return;
      }

      maxWaitTimer = setTimeout(() => {
        window.removeEventListener('load', onLoad);
        window.removeEventListener('DOMContentLoaded', onLoad);
        startSequence();
      }, T.MAX_WAIT);

      function onLoad() {
        clearTimeout(maxWaitTimer);
        startSequence();
      }

      window.addEventListener('DOMContentLoaded', onLoad, { once: true });
      window.addEventListener('load', onLoad, { once: true });
    }

    /* ── Background-tab guard: wait until tab is visible ─────────────── */
    function onVisibilityChange() {
      if (document.visibilityState === 'visible') {
        document.removeEventListener('visibilitychange', onVisibilityChange);
        waitForLoad();
      }
    }

    if (document.visibilityState === 'visible') {
      waitForLoad();
    } else {
      document.addEventListener('visibilitychange', onVisibilityChange);
    }

    return () => {
      clearTimeout(beatTimer);
      clearTimeout(fallbackTimer);
      clearTimeout(maxWaitTimer);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty — one-shot on mount

  if (!mounted) return null;

  /* ── Styles ──────────────────────────────────────────────────────────── */

  const transition = `transform ${T.SLIDE_DUR}ms ${EASE}`;

  const panelCommon = {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '50%',
    willChange: 'transform',
    transition,
    overflow: 'hidden',
    pointerEvents: 'none',
  };

  const topPanel = {
    ...panelCommon,
    top: 0,
    // Warm cream background
    background: 'linear-gradient(180deg, #f5f0ea 0%, #ede7df 100%)',
    transform: animating ? 'translate3d(0, -100%, 0)' : 'translate3d(0, 0, 0)',
  };

  const bottomPanel = {
    ...panelCommon,
    bottom: 0,
    background: 'linear-gradient(0deg, #f5f0ea 0%, #ede7df 100%)',
    transform: animating ? 'translate3d(0, 100%, 0)' : 'translate3d(0, 0, 0)',
  };

  const logoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 'clamp(100px, 18vw, 140px)',
    maxWidth: '80vw',
    height: 'auto',
    transformOrigin: 'center center',
    transform: animating
      ? 'translate3d(-50%, -50%, 0) scale(0)'
      : 'translate3d(-50%, -50%, 0) scale(1)',
    opacity: animating ? 0 : 1,
    // Note: dropped 'filter' from CSS transition because animating blur/drop-shadow
    // on Android causes severe frame drops and visual stutter. Opacity handles the fade smoothly.
    transition: `transform ${T.SLIDE_DUR}ms ${EASE}, opacity ${Math.round(T.SLIDE_DUR * 0.75)}ms ${EASE}`,
    filter: 'drop-shadow(0 0 20px rgba(161,18,23,0.35)) drop-shadow(0 6px 18px rgba(0,0,0,0.18))',
    willChange: 'transform, opacity',
    zIndex: 10,
    userSelect: 'none',
    WebkitUserDrag: 'none',
    pointerEvents: 'none',
  };

  const seamLine = {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: '1px',
    transform: 'translate3d(0, -50%, 0)',
    background:
      'linear-gradient(90deg, transparent 0%, rgba(161,18,23,0.45) 25%, rgba(161,18,23,0.90) 50%, rgba(161,18,23,0.45) 75%, transparent 100%)',
    opacity: animating ? 0 : 1,
    transition: `opacity ${Math.round(T.SLIDE_DUR * 0.35)}ms ${EASE}`,
    pointerEvents: 'none',
    zIndex: 5,
  };

  const handlePanelTransitionEnd = (e) => {
    // Only respond to the transform completion on the panel itself
    if (e.target === topPanelRef.current && e.propertyName === 'transform') {
      finish();
    }
  };

  return (
    <div
      aria-hidden="true"
      className="intro-splash-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        zIndex: 9999,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* TOP panel — triggers unmount via onTransitionEnd */}
      <div
        ref={topPanelRef}
        onTransitionEnd={handlePanelTransitionEnd}
        style={topPanel}
      >
        {/* Subtle brand warmth tint — lighter on cream background */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(160deg, rgba(161,18,23,0.06) 0%, transparent 55%)',
        }} />
        {/* Bottom edge accent toward the seam */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', pointerEvents: 'none',
          background: 'linear-gradient(90deg, transparent, rgba(161,18,23,0.35) 50%, transparent)',
        }} />
      </div>

      {/* BOTTOM panel */}
      <div style={bottomPanel}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(200deg, rgba(161,18,23,0.05) 0%, transparent 50%)',
        }} />
        {/* Top edge accent toward the seam */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1px', pointerEvents: 'none',
          background: 'linear-gradient(90deg, transparent, rgba(161,18,23,0.35) 50%, transparent)',
        }} />
      </div>

      {/* Seam accent line */}
      <div style={seamLine} />

      {/* Logo — centered exactly on the seam */}
      <img
        src="/pbcum-logo-transparent.png"
        alt="PBCUM"
        draggable={false}
        style={logoStyle}
      />
    </div>
  );
}
