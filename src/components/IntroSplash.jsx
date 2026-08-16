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
  UNMOUNT_BUF: 120,
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

  // Prefers-reduced-motion check (once, at mount)
  const reducedMotion = useRef(
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ).current;

  useEffect(() => {
    if (!show) {
      onDone?.();
      return;
    }

    let beatTimer, unmountTimer, maxWaitTimer;

    /* ── startSequence: fires after load event (or max-wait cap) ──────── */
    function startSequence() {
      if (reducedMotion) {
        // Respect reduced-motion: skip animation entirely, unmount immediately
        setMounted(false);
        onDone?.();
        return;
      }

      beatTimer = setTimeout(() => {
        setAnimating(true);

        unmountTimer = setTimeout(() => {
          setMounted(false);
          onDone?.();
        }, T.SLIDE_DUR + T.UNMOUNT_BUF);
      }, T.BEAT_PAUSE);
    }

    /* ── waitForLoad: waits for window 'load', with 5 s cap ──────────── */
    function waitForLoad() {
      if (document.readyState === 'complete') {
        startSequence();
        return;
      }

      maxWaitTimer = setTimeout(() => {
        window.removeEventListener('load', onLoad);
        startSequence();
      }, T.MAX_WAIT);

      function onLoad() {
        clearTimeout(maxWaitTimer);
        startSequence();
      }

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
      clearTimeout(unmountTimer);
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
  };

  const topPanel = {
    ...panelCommon,
    top: 0,
    // Warm cream — noticeably lighter than dark, clearly distinct from the
    // homepage's pure-white background so the reveal edge stays visible
    background: 'linear-gradient(180deg, #f5f0ea 0%, #ede7df 100%)',
    transform: animating ? 'translateY(-100%)' : 'translateY(0)',
  };

  const bottomPanel = {
    ...panelCommon,
    bottom: 0,
    background: 'linear-gradient(0deg, #f5f0ea 0%, #ede7df 100%)',
    transform: animating ? 'translateY(100%)' : 'translateY(0)',
  };

  const logoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '140px',
    height: 'auto',
    // Own bounding-box center as origin — shield is not top-bottom symmetric.
    // No rotation — logo shrinks and fades in place only.
    transformOrigin: 'center center',
    transform: animating
      ? 'translate(-50%, -50%) scale(0)'
      : 'translate(-50%, -50%) scale(1)',
    opacity: animating ? 0 : 1,
    transition: `transform ${T.SLIDE_DUR}ms ${EASE}, opacity ${Math.round(T.SLIDE_DUR * 0.75)}ms ${EASE}, filter ${T.SLIDE_DUR}ms ${EASE}`,
    // Softer shadow on light panels — less black, more brand-red warmth
    filter: animating
      ? 'drop-shadow(0 0 0px rgba(161,18,23,0))'
      : 'drop-shadow(0 0 20px rgba(161,18,23,0.35)) drop-shadow(0 6px 18px rgba(0,0,0,0.18))',
    willChange: 'transform, opacity',
    zIndex: 10,
    userSelect: 'none',
    WebkitUserDrag: 'none',
  };

  const seamLine = {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: '1px',
    transform: 'translateY(-50%)',
    // Slightly stronger on light panels so the seam is visible
    background:
      'linear-gradient(90deg, transparent 0%, rgba(161,18,23,0.45) 25%, rgba(161,18,23,0.90) 50%, rgba(161,18,23,0.45) 75%, transparent 100%)',
    opacity: animating ? 0 : 1,
    transition: `opacity ${Math.round(T.SLIDE_DUR * 0.35)}ms ${EASE}`,
    pointerEvents: 'none',
    zIndex: 5,
  };

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden',
        // Disable pointer events once animating — never traps clicks or scroll
        pointerEvents: animating ? 'none' : 'all',
      }}
    >
      {/* TOP panel */}
      <div style={topPanel}>
        {/* Subtle brand warmth tint — lighter on cream background */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(161,18,23,0.06) 0%, transparent 55%)',
        }} />
        {/* Bottom edge accent toward the seam — stronger on light panels */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(161,18,23,0.35) 50%, transparent)',
        }} />
      </div>

      {/* BOTTOM panel */}
      <div style={bottomPanel}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(200deg, rgba(161,18,23,0.05) 0%, transparent 50%)',
        }} />
        {/* Top edge accent toward the seam */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
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
