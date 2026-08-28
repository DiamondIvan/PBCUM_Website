import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Instagram, Mail } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Utilities Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

function copyToClipboard(text) {
  if (!text) return;
  navigator.clipboard?.writeText(text);
}

/** Returns true when the user has enabled the "prefer reduced motion" OS setting. */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Auto-scroll speed Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */
// 0.6 px per frame @ 60 fps Ã¢â€°Ë† 36 px/s.
// A 320px card takes ~9 s to pass Ã¢â‚¬â€ slow enough to read comfortably.
const SCROLL_SPEED = 0.6; // px / frame — baseline auto-scroll pace
const RESUME_DELAY = 2500; // ms idle before resuming after wheel/arrow pause
// Throw inertia constants:
const THROW_FRICTION = 0.92; // velocity multiplier per frame (~1.5s to decay)
const MAX_THROW = 25;        // max throw px/frame (caps wild flicks)


/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Avatar Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

function Avatar({ image, initials, color }) {
  const imageSrc = image ? `/committee_photo/${image}` : null;

  return (
    <div
      className={`flex h-[5.5rem] w-[5.5rem] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${color} text-2xl font-semibold text-white shadow-[0_20px_50px_rgba(17,24,39,0.18)]`}
    >
      {imageSrc ? (
        <img src={imageSrc} alt="" className="h-full w-full object-cover" />
      ) : (
        initials
      )}
    </div>
  );
}

function getAvatarState(member) {
  const isImageFile =
    typeof member.image === 'string' &&
    /\.(png|jpe?g|webp|gif|svg)$/i.test(member.image);

  return {
    image: isImageFile ? member.image : null,
    initials:
      member.initials ||
      (!isImageFile ? member.image : '') ||
      (member.name ? member.name.charAt(0) : ''),
  };
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ MemberCard Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

function MemberCard({
  member,
  index,
  activeEmail,
  setActiveEmail,
  activeCardRef,
  copiedEmail,
  onCopy,
  // isClone: cloned cards are aria-hidden and not interactive
  isClone,
}) {
  const avatar = getAvatarState(member);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.07, 0.42) }}
      /*
       * Card sizing:
       *  mobile  Ã¢â€ â€™ 82vw  (1.2 cards visible Ã¢â‚¬â€ clear swipe signal)
       *  sm      Ã¢â€ â€™ 46vw  (2 cards visible)
       *  md+     Ã¢â€ â€™ 320px fixed (3 cards + partial peek)
       * flex-shrink-0 prevents squishing inside the flex track.
       */
      className="group flex-shrink-0 w-[82vw] sm:w-[46vw] md:w-[320px] rounded-[32px] border border-black/6 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
      style={{ scrollSnapAlign: 'start' }}
      aria-hidden={isClone ? 'true' : undefined}
      // Cloned cards are purely visual duplicates Ã¢â‚¬â€ they must not be
      // reachable by keyboard or assistive tech
      inert={isClone ? '' : undefined}
    >
      <div className="flex items-start justify-between gap-4">
        <Avatar image={avatar.image} initials={avatar.initials} color={member.color} />
        <div className="mt-1 rounded-full border border-black/6 bg-[#fafafa] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest2 text-black/40">
          {member.role}
        </div>
      </div>
      <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-ink">
        {member.name}
      </h3>
      <p className="mt-2.5 text-sm leading-[1.8] text-black/55">
        placeholder
      </p>
      <div className="mt-7 flex items-center gap-2.5 text-black/35">
        <a
          href={member.instagram || '#'}
          target={member.instagram ? '_blank' : undefined}
          rel={member.instagram ? 'noreferrer' : undefined}
          aria-label={`${member.name} Ã§Å¡â€ž Instagram`}
          className="rounded-full border border-black/6 p-2.5 transition duration-300 hover:border-umred hover:text-umred"
          tabIndex={isClone ? -1 : undefined}
        >
          <Instagram className="h-3.5 w-3.5" />
        </a>
        <div className="relative flex items-center justify-center">
          <button
            type="button"
            onClick={(event) => {
              if (isClone) return;
              event.preventDefault();
              if (member.email) {
                const cardElement = event.currentTarget.closest('article');
                activeCardRef.current = cardElement;
                setActiveEmail(activeEmail === member.email ? null : member.email);
              }
            }}
            aria-label={`Ã¥Ââ€˜Ã©â€šÂ®Ã¤Â»Â¶Ã§Â»â„¢ ${member.name}`}
            tabIndex={isClone ? -1 : undefined}
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/6 p-0 transition duration-300 hover:border-umred hover:text-umred"
          >
            <Mail className="h-3.5 w-3.5" />
          </button>

          {!isClone && member.email && activeEmail === member.email && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute left-1/2 top-full z-20 mt-3 w-[220px] -translate-x-1/2 rounded-2xl border border-black/8 bg-white p-3 text-left shadow-[0_16px_40px_rgba(17,24,39,0.12)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                Contact
              </p>
              <div className="mt-2 rounded-xl border border-black/6 bg-[#fafafa] px-3 py-2">
                <p className="select-text break-all text-sm font-medium text-ink">
                  {member.email}
                </p>
              </div>
              <p className="mt-2 text-[11px] leading-5 text-black/55">
                Highlight the address and copy it manually, or use the button below.
              </p>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onCopy(member.email);
                }}
                className="mt-3 inline-flex items-center rounded-full bg-[#111827] px-3.5 py-2 text-[11px] font-semibold text-white transition hover:bg-[#1f2937]"
              >
                {copiedEmail === member.email ? 'Copied!' : 'Copy email'}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ ArrowButton Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

function ArrowButton({ direction, disabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Ã¥Ââ€˜Ã¥Â·Â¦Ã¦Â»Å¡Ã¥Å Â¨' : 'Ã¥Ââ€˜Ã¥ÂÂ³Ã¦Â»Å¡Ã¥Å Â¨'}
      className={[
        // Hidden on touch screens Ã¢â‚¬â€ swipe handles navigation there
        'hidden md:flex',
        'items-center justify-center',
        'h-11 w-11 rounded-full',
        'border border-black/10 bg-white shadow-[0_4px_16px_rgba(17,24,39,0.08)]',
        'transition-all duration-200',
        disabled
          ? 'opacity-30 cursor-not-allowed'
          : 'hover:border-[#A11217] hover:text-[#A11217] hover:shadow-[0_8px_24px_rgba(161,18,23,0.14)] cursor-pointer',
      ].join(' ')}
    >
      {direction === 'left' ? (
        <ChevronLeft className="h-5 w-5" />
      ) : (
        <ChevronRight className="h-5 w-5" />
      )}
    </button>
  );
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ ScrollIndicator Ã¢â‚¬â€ thin progress bar, mobile only Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

function ScrollIndicator({ trackRef, count }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const max = scrollWidth - clientWidth;
      setProgress(max > 0 ? scrollLeft / max : 0);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    return () => el.removeEventListener('scroll', update);
  }, [trackRef]);

  // Thumb occupies a fraction of the bar proportional to visible cards
  // Use original count (not doubled) for the thumb size calculation
  const thumbPct = Math.min(60, Math.max(10, Math.round((1 / count) * 100) * 3));
  const maxTranslate = (100 / thumbPct - 1) * thumbPct;

  return (
    <div className="mt-5 flex justify-center md:hidden" role="presentation" aria-hidden="true">
      <div className="relative h-[3px] w-32 overflow-hidden rounded-full bg-black/8">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-[#A11217] transition-transform duration-150 ease-out"
          style={{
            width: `${thumbPct}%`,
            transform: `translateX(${progress * maxTranslate}%)`,
          }}
        />
      </div>
    </div>
  );
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ CommitteeGrid (carousel + marquee auto-scroll) Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

export function CommitteeGrid({ members }) {
  const [activeEmail, setActiveEmail] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const activeCardRef = useRef(null);
  const trackRef = useRef(null);

  // â”€â”€ Scroll loop refs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const rafId        = useRef(null);  // rAF handle
  const firstSetWidth = useRef(0);   // px width of original card set
  // throwVelocity: extra px/frame injected by a drag-throw; decays to 0
  // via FRICTION each frame, blending back into SCROLL_SPEED seamlessly.
  const throwVelocity = useRef(0);
  // isPaused: ONLY for wheel-scroll and arrow-button interactions â€”
  // never set during normal drag/release (those use throwVelocity instead).
  const isPaused = useRef(false);
  const resumeTimer = useRef(null);

  // â”€â”€ Drag state â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });
  // Velocity sampler: track cursor speed during drag for throw calculation
  const lastMove = useRef({ x: 0, t: 0 });
  const dragVelocity = useRef(0); // smoothed px/ms (positive = moving left = scroll right)

  /* â”€â”€â”€ Measure first-set width after mount â”€â”€â”€ */
  useEffect(() => {
    const el = trackRef.current;
    if (!el || prefersReducedMotion()) return;

    const raf = requestAnimationFrame(() => {
      const cards = el.querySelectorAll('article');
      const gap = 20; // gap-5 = 1.25rem â‰ˆ 20px
      let total = 0;
      for (let i = 0; i < members.length; i++) {
        if (cards[i]) total += cards[i].getBoundingClientRect().width + gap;
      }
      firstSetWidth.current = total;
    });
    return () => cancelAnimationFrame(raf);
  }, [members.length]);

  /* â”€â”€â”€ Unified rAF loop â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   * Net velocity per frame = SCROLL_SPEED (baseline) + throwVelocity (decaying).
   * After a throw, throwVelocity decays via FRICTION until it's negligible,
   * at which point the carousel has smoothly blended back to its normal pace.
   * The loop is only stopped for: prefers-reduced-motion, tab hidden,
   * wheel-scroll (isPaused), and active drag (user directly sets scrollLeft).
   */
  const startLoop = useCallback(() => {
    if (prefersReducedMotion()) return;
    if (rafId.current) return; // already running

    const tick = () => {
      const el = trackRef.current;
      if (!el || isPaused.current || document.visibilityState === 'hidden') {
        rafId.current = null;
        return;
      }

      // Decay throw velocity by friction each frame
      throwVelocity.current *= THROW_FRICTION;
      if (Math.abs(throwVelocity.current) < 0.05) throwVelocity.current = 0;

      const net = SCROLL_SPEED + throwVelocity.current;
      el.scrollLeft += net;

      // Seamless infinite loop reset
      const setWidth = firstSetWidth.current;
      if (setWidth > 0) {
        if (el.scrollLeft >= setWidth) el.scrollLeft -= setWidth;
        else if (el.scrollLeft < 0) el.scrollLeft += setWidth;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
  }, []);

  const stopLoop = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, []);

  /* â”€â”€â”€ Wheel / arrow pause helpers (these ARE timed, drag is NOT) â”€â”€â”€ */
  const interruptForWheel = useCallback(() => {
    isPaused.current = true;
    throwVelocity.current = 0;
    stopLoop();
    if (resumeTimer.current) { clearTimeout(resumeTimer.current); resumeTimer.current = null; }
  }, [stopLoop]);

  const scheduleResume = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      if (prefersReducedMotion()) return;
      isPaused.current = false;
      throwVelocity.current = 0;
      startLoop();
    }, RESUME_DELAY);
  }, [startLoop]);

  /* â”€â”€â”€ Start loop on mount â”€â”€â”€ */
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const t = setTimeout(() => { startLoop(); }, 300);
    return () => { clearTimeout(t); stopLoop(); if (resumeTimer.current) clearTimeout(resumeTimer.current); };
  }, [startLoop, stopLoop]);

  /* â”€â”€â”€ Pause loop when tab hidden; resume on return â”€â”€â”€ */
  useEffect(() => {
    const onChange = () => {
      if (document.visibilityState === 'hidden') {
        stopLoop();
      } else if (!isPaused.current && !prefersReducedMotion()) {
        startLoop();
      }
    };
    document.addEventListener('visibilitychange', onChange);
    return () => document.removeEventListener('visibilitychange', onChange);
  }, [startLoop, stopLoop]);

  /* â”€â”€â”€ Email popup: close on outside click â”€â”€â”€ */
  useEffect(() => {
    if (!activeEmail) return;
    const handleClickOutside = (event) => {
      if (activeCardRef.current && !activeCardRef.current.contains(event.target)) {
        setActiveEmail(null);
        activeCardRef.current = null;
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeEmail]);

  /* â”€â”€â”€ Arrow disabled state â”€â”€â”€ */
  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    return () => el.removeEventListener('scroll', updateArrows);
  }, [updateArrows]);

  /* â”€â”€â”€ Arrow click: one-card jump (uses timed pause, not inertia) â”€â”€â”€ */
  const scrollByCard = useCallback((direction) => {
    interruptForWheel();
    scheduleResume();
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.querySelector('article');
    const gap = 20;
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width + gap : 340;
    const behavior = prefersReducedMotion() ? 'instant' : 'smooth';
    el.scrollBy({ left: direction === 'right' ? cardWidth : -cardWidth, behavior });
  }, [interruptForWheel, scheduleResume]);

  /* â”€â”€â”€ Wheel â†’ horizontal (timed pause then auto-resume) â”€â”€â”€ */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      interruptForWheel();
      el.scrollBy({ left: e.deltaY, behavior: 'instant' });
      scheduleResume();
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [interruptForWheel, scheduleResume]);

  /* â”€â”€â”€ Drag: stop loop, track velocity, restart with throw on release â”€â”€â”€ */
  const onPointerDown = useCallback((e) => {
    if (e.button !== 0) return;
    const el = trackRef.current;
    if (!el) return;

    // Stop the loop â€” user now directly controls scrollLeft
    stopLoop();

    drag.current = { active: true, startX: e.clientX, scrollLeft: el.scrollLeft, moved: false };
    dragVelocity.current = 0;
    lastMove.current = { x: e.clientX, t: performance.now() };

    el.setPointerCapture(e.pointerId);
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
  }, [stopLoop]);

  const onPointerMove = useCallback((e) => {
    if (!drag.current.active) return;
    const el = trackRef.current;
    if (!el) return;

    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    if (drag.current.moved) el.scrollLeft = drag.current.scrollLeft - delta;

    // Sample velocity: exponential moving average in px/ms
    // Positive dragVelocity = cursor moving right = scrollLeft decreasing
    const now = performance.now();
    const dt = now - lastMove.current.t;
    if (dt > 0) {
      const rawVel = (e.clientX - lastMove.current.x) / dt;
      // Blend: 30% history, 70% new sample for responsiveness
      dragVelocity.current = dragVelocity.current * 0.3 + rawVel * 0.7;
    }
    lastMove.current = { x: e.clientX, t: now };
  }, []);

  const onPointerUp = useCallback((e) => {
    if (!drag.current.active) return;
    const el = trackRef.current;
    drag.current.active = false;

    if (el) {
      el.releasePointerCapture(e.pointerId);
      el.style.cursor = '';
      el.style.userSelect = '';
    }

    // Convert drag velocity (px/ms, cursor direction) to scroll-space px/frame.
    // Cursor moving right (positive dragVelocity) means scrollLeft was decreasing,
    // so the throw should continue decreasing scrollLeft â†’ negative throwVelocity.
    // Clamp to Â±MAX_THROW so a wild flick can't fling it uncontrollably.
    const pxPerFrame = dragVelocity.current * 16.67; // assume 60 fps
    throwVelocity.current = Math.max(-MAX_THROW, Math.min(MAX_THROW, -pxPerFrame));

    // Restart the loop immediately â€” it picks up throwVelocity and decays it
    // back to SCROLL_SPEED over the next ~1â€“2 seconds, feeling like inertia.
    isPaused.current = false;
    startLoop();
  }, [startLoop]);

  // Suppress click events that were actually drag-scrolls
  const onClickCapture = useCallback((e) => {
    if (drag.current.moved) {
      e.stopPropagation();
      drag.current.moved = false;
    }
  }, []);

  const handleCopy = (email) => {
    copyToClipboard(email);
    setCopiedEmail(email);
    window.setTimeout(() => setCopiedEmail(null), 1400);
  };

  return (
    <div className="mt-14">
      {/* Outer wrapper â€” positions arrow buttons at the edges */}
      <div className="relative">
        {/* â”€â”€ Left arrow â”€â”€ */}
        <div className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <ArrowButton
            direction="left"
            disabled={!canScrollLeft}
            onClick={() => scrollByCard('left')}
          />
        </div>

        {/* â”€â”€ Right arrow â”€â”€ */}
        <div className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2">
          <ArrowButton
            direction="right"
            disabled={!canScrollRight}
            onClick={() => scrollByCard('right')}
          />
        </div>

        {/* â”€â”€ Right-edge gradient fade â€” signals more content ahead â”€â”€ */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-[5] h-full w-28 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to left, #fafafa 10%, transparent 100%)',
            opacity: canScrollRight ? 1 : 0,
          }}
        />

        {/* â”€â”€ Left-edge gradient â€” appears once user has scrolled away from start â”€â”€ */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-[5] h-full w-28 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to right, #fafafa 10%, transparent 100%)',
            opacity: canScrollLeft ? 1 : 0,
          }}
        />

        {/* â”€â”€ Scroll track â”€â”€ */}
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClickCapture={onClickCapture}
          className="committee-carousel flex gap-5 overflow-x-auto pb-4 md:cursor-grab active:cursor-grabbing"
          style={{
            scrollSnapType: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* Original set â€” fully interactive */}
          {members.map((member, index) => (
            <MemberCard
              key={`orig-${index}`}
              member={member}
              index={index}
              activeEmail={activeEmail}
              setActiveEmail={setActiveEmail}
              activeCardRef={activeCardRef}
              copiedEmail={copiedEmail}
              onCopy={handleCopy}
              isClone={false}
            />
          ))}

          {/* Clone set â€” aria-hidden, inert, purely visual for seamless loop */}
          {members.map((member, index) => (
            <MemberCard
              key={`clone-${index}`}
              member={member}
              index={index}
              activeEmail={activeEmail}
              setActiveEmail={setActiveEmail}
              activeCardRef={activeCardRef}
              copiedEmail={copiedEmail}
              onCopy={handleCopy}
              isClone={true}
            />
          ))}

          {/* Trailing spacer keeps last card from being obscured by the gradient on mobile */}
          <div className="flex-shrink-0 w-4 md:hidden" aria-hidden="true" />
        </div>
      </div>

      {/* Mobile-only scroll progress bar â€” uses original count for thumb size */}
      <ScrollIndicator trackRef={trackRef} count={members.length} />
    </div>
  );
}

