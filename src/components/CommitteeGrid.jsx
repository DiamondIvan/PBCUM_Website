import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Instagram, Mail } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

/* ─── Utilities ─────────────────────────────────────────────────────────── */

function copyToClipboard(text) {
  if (!text) return;
  navigator.clipboard?.writeText(text);
}

/** Returns true when the user has enabled the 'prefer reduced motion' OS setting. */
function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ─── Auto-scroll constants ─────────────────────────────────────────────── */
const SCROLL_SPEED = 0.6; // px / frame — baseline auto-scroll pace
const RESUME_DELAY = 2500; // ms idle before resuming after wheel/arrow pause
const THROW_FRICTION = 0.92; // velocity multiplier per frame (~1.5s to decay)
const MAX_THROW = 25; // max throw px/frame (caps wild flicks)

/* ─── Avatar ────────────────────────────────────────────────────────────── */

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

/* ─── MemberCard ────────────────────────────────────────────────────────── */

function MemberCard({
  member,
  index,
  activeEmail,
  setActiveEmail,
  activeCardRef,
  copiedEmail,
  onCopy,
  isClone,
}) {
  const avatar = getAvatarState(member);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.07, 0.42) }}
      className="group flex-shrink-0 w-[82vw] max-w-[340px] sm:w-[46vw] md:w-[320px] rounded-[32px] border border-black/6 bg-white p-6 sm:p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
      style={{ scrollSnapAlign: 'start' }}
      aria-hidden={isClone ? 'true' : undefined}
      inert={isClone ? '' : undefined}
    >
      <div className="flex items-start justify-between gap-4">
        <Avatar image={avatar.image} initials={avatar.initials} color={member.color} />
        <div className="mt-1 rounded-full border border-black/6 bg-[#fafafa] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest2 text-black/40">
          {member.role}
        </div>
      </div>
      <h3 className="mt-6 sm:mt-7 text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-ink">
        {member.name}
      </h3>
      <p className="mt-2 text-sm leading-[1.8] text-black/55">
        PBCUM 执委会成员
      </p>
      <div className="mt-6 sm:mt-7 flex items-center gap-3 text-black/35">
        <a
          href={member.instagram || '#'}
          target={member.instagram ? '_blank' : undefined}
          rel={member.instagram ? 'noreferrer' : undefined}
          aria-label={`${member.name} 的 Instagram`}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/6 transition duration-300 hover:border-umred hover:text-umred"
          tabIndex={isClone ? -1 : undefined}
        >
          <Instagram className="h-4 w-4" />
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
            aria-label={`发邮件给 ${member.name}`}
            tabIndex={isClone ? -1 : undefined}
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/6 p-0 transition duration-300 hover:border-umred hover:text-umred"
          >
            <Mail className="h-4 w-4" />
          </button>

          {!isClone && member.email && activeEmail === member.email && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute left-1/2 top-full z-20 mt-3 w-[min(240px,calc(100vw-3rem))] -translate-x-1/2 rounded-2xl border border-black/8 bg-white p-3.5 text-left shadow-[0_16px_40px_rgba(17,24,39,0.14)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                联系方式
              </p>
              <div className="mt-2 rounded-xl border border-black/6 bg-[#fafafa] px-3 py-2">
                <p className="select-text break-all text-xs sm:text-sm font-medium text-ink">
                  {member.email}
                </p>
              </div>
              <p className="mt-2 text-[11px] leading-5 text-black/55">
                长按可复制地址，或点击下方按钮。
              </p>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onCopy(member.email);
                }}
                className="mt-3 inline-flex items-center rounded-full bg-[#111827] px-3.5 py-2 text-[11px] font-semibold text-white transition hover:bg-[#1f2937]"
              >
                {copiedEmail === member.email ? '已复制！' : '复制电邮'}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ─── ArrowButton ───────────────────────────────────────────────────────── */

function ArrowButton({ direction, disabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? '向左滚动' : '向右滚动'}
      className={[
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

/* ─── ScrollIndicator — thin progress bar on mobile ─────────────────────── */

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

/* ─── CommitteeGrid (carousel + marquee auto-scroll) ────────────────────── */

export function CommitteeGrid({ members }) {
  const [activeEmail, setActiveEmail] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const activeCardRef = useRef(null);
  const trackRef = useRef(null);

  // Scroll loop refs
  const rafId = useRef(null);
  const firstSetWidth = useRef(0);
  const throwVelocity = useRef(0);
  const isPaused = useRef(false);
  const resumeTimer = useRef(null);

  // Drag state
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false, isTouch: false });
  const lastMove = useRef({ x: 0, t: 0 });
  const dragVelocity = useRef(0);

  /* Measure first-set width after mount */
  useEffect(() => {
    const el = trackRef.current;
    if (!el || prefersReducedMotion()) return;

    const raf = requestAnimationFrame(() => {
      const cards = el.querySelectorAll('article');
      const gap = 20; // gap-5 = 1.25rem ≈ 20px
      let total = 0;
      for (let i = 0; i < members.length; i++) {
        if (cards[i]) total += cards[i].getBoundingClientRect().width + gap;
      }
      firstSetWidth.current = total;
    });
    return () => cancelAnimationFrame(raf);
  }, [members.length]);

  /* Unified rAF loop */
  const startLoop = useCallback(() => {
    if (prefersReducedMotion()) return;
    if (rafId.current) return;

    const tick = () => {
      const el = trackRef.current;
      if (!el || isPaused.current || document.visibilityState === 'hidden') {
        rafId.current = null;
        return;
      }

      throwVelocity.current *= THROW_FRICTION;
      if (Math.abs(throwVelocity.current) < 0.05) throwVelocity.current = 0;

      const net = SCROLL_SPEED + throwVelocity.current;
      el.scrollLeft += net;

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

  /* Start loop on mount */
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const t = setTimeout(() => { startLoop(); }, 300);
    return () => { clearTimeout(t); stopLoop(); if (resumeTimer.current) clearTimeout(resumeTimer.current); };
  }, [startLoop, stopLoop]);

  /* Pause loop when tab hidden; resume on return */
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

  /* Email popup: close on outside click */
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

  /* Arrow disabled state */
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

  /* Arrow click */
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

  /* Wheel → horizontal (desktop) */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      interruptForWheel();
      el.scrollBy({ left: e.deltaY, behavior: 'instant' });
      scheduleResume();
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [interruptForWheel, scheduleResume]);

  /* Pointer / Drag handlers */
  const onPointerDown = useCallback((e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    const el = trackRef.current;
    if (!el) return;

    stopLoop();

    const isTouch = e.pointerType === 'touch';
    drag.current = { active: true, startX: e.clientX, scrollLeft: el.scrollLeft, moved: false, isTouch };
    dragVelocity.current = 0;
    lastMove.current = { x: e.clientX, t: performance.now() };

    if (!isTouch) {
      el.setPointerCapture(e.pointerId);
      el.style.cursor = 'grabbing';
      el.style.userSelect = 'none';
    }
  }, [stopLoop]);

  const onPointerMove = useCallback((e) => {
    if (!drag.current.active) return;
    const el = trackRef.current;
    if (!el) return;

    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    if (drag.current.moved) el.scrollLeft = drag.current.scrollLeft - delta;

    const now = performance.now();
    const dt = now - lastMove.current.t;
    if (dt > 0) {
      const rawVel = (e.clientX - lastMove.current.x) / dt;
      dragVelocity.current = dragVelocity.current * 0.3 + rawVel * 0.7;
    }
    lastMove.current = { x: e.clientX, t: now };
  }, []);

  const onPointerUp = useCallback((e) => {
    if (!drag.current.active) return;
    const el = trackRef.current;
    drag.current.active = false;

    if (el && !drag.current.isTouch && el.hasPointerCapture?.(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
      el.style.cursor = '';
      el.style.userSelect = '';
    }

    const pxPerFrame = dragVelocity.current * 16.67;
    throwVelocity.current = Math.max(-MAX_THROW, Math.min(MAX_THROW, -pxPerFrame));

    isPaused.current = false;
    startLoop();
  }, [startLoop]);

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
    <div className="mt-10 sm:mt-14">
      <div className="relative">
        {/* Left arrow */}
        <div className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <ArrowButton
            direction="left"
            disabled={!canScrollLeft}
            onClick={() => scrollByCard('left')}
          />
        </div>
        {/* Right arrow */}
        <div className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2">
          <ArrowButton
            direction="right"
            disabled={!canScrollRight}
            onClick={() => scrollByCard('right')}
          />
        </div>
        {/* Right-edge gradient fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-[5] h-full w-20 sm:w-28 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to left, #fafafa 10%, transparent 100%)',
            opacity: canScrollRight ? 1 : 0,
          }}
        />
        {/* Left-edge gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-[5] h-full w-20 sm:w-28 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to right, #fafafa 10%, transparent 100%)',
            opacity: canScrollLeft ? 1 : 0,
          }}
        />
        {/* Scroll track */}
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClickCapture={onClickCapture}
          className="committee-carousel flex gap-4 sm:gap-5 overflow-x-auto pb-4 md:cursor-grab active:cursor-grabbing"
          style={{
            scrollSnapType: 'none',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            touchAction: 'pan-y',
          }}
        >
          {/* Original set */}
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
          {/* Clone set */}
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
          <div className="flex-shrink-0 w-4 md:hidden" aria-hidden="true" />
        </div>
      </div>
      <ScrollIndicator trackRef={trackRef} count={members.length} />
    </div>
  );
}
