import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MOTION } from './ui/animations';

const navItems = [
  { label: '关于我们', id: 'about' },
  { label: '五特活', id: 'activities' },
  { label: '七小组', id: 'groups' },
  { label: '执委会', id: 'committee' },
  { label: '相册', id: 'gallery' },
  { label: '活动日历', id: 'calendar' },
  { label: '联系我们', id: 'footer' },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const barRef = useRef(null);
  const toggleRef = useRef(null);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const nextScrolled = latest > 20;
    setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
  });

  /* Dismissing the open mobile menu.
     Previously the only way out was the X or picking a link — tapping the page
     behind it did nothing, which is the first thing most people try on a phone.
     Escape covers the keyboard, and the page is held still underneath so the
     menu cannot be scrolled away from. */
  useEffect(() => {
    if (!mobileOpen) return undefined;

    const desktop = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = () => { if (desktop.matches) setMobileOpen(false); };
    if (desktop.matches) {
      closeOnDesktop();
      return undefined;
    }
    desktop.addEventListener('change', closeOnDesktop);
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onDown = (e) => {
      if (barRef.current && !barRef.current.contains(e.target)) setMobileOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    // pointerdown rather than click: it fires before the menu's own links, so a
    // tap that lands outside never also activates something underneath.
    document.addEventListener('pointerdown', onDown);
    return () => {
      desktop.removeEventListener('change', closeOnDesktop);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [mobileOpen]);

  // A route change with the menu still open would leave it covering the new
  // page. Every in-menu control closes it already; this covers back/forward.
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname === '/') {
      const targetId = item.id;
      // Allow the mobile menu close and overflow lock release to settle before scrolling
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `/#${targetId}`);
          }
        }, 50);
      });
    } else {
      navigate(`/#${item.id}`);
    }
  };

  const handleLogoClick = (e) => {
    setMobileOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
    }
  };

  return (
    <header className="fixed left-0 top-0 z-40 w-full px-4 pt-3 sm:px-6 sm:pt-4 pointer-events-none">
      {/* First thing in the tab order on every page. Hidden until focused, so
          a keyboard user can jump the nav instead of tabbing through it on all
          fourteen pages. Every layout wraps its content in <main id="main">. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-5 focus:z-50 focus:rounded-full focus:bg-umred focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-glow pointer-events-auto"
      >
        跳至主要内容
      </a>
      <motion.div
        ref={barRef}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -16, opacity: 0 }}
        transition={{ duration: MOTION.duration * 0.8, ease: MOTION.ease }}
        className={`mx-auto max-w-7xl rounded-[24px] sm:rounded-[28px] border transition-[background-color,border-color,box-shadow] duration-300 pointer-events-auto ${
          mobileOpen
            ? 'border-black/8 bg-white/95 shadow-xl backdrop-blur-2xl'
            : scrolled
            ? 'border-black/8 bg-white/90 shadow-nav backdrop-blur-2xl'
            : 'border-white/35 bg-white/60 shadow-[0_8px_32px_rgba(17,24,39,0.05)] backdrop-blur-xl'
        }`}
      >
        {/* Desktop & Main Header bar */}
        <div className="flex items-center justify-between gap-5 px-5 py-3.5 sm:px-8 sm:py-4.5">
          <Link to="/" onClick={handleLogoClick} className="group inline-flex min-h-[44px] items-center gap-3.5 sm:gap-4">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-glow transition duration-300 group-hover:rotate-6 group-hover:scale-105">
              <img src="/pbcum.jpg" alt="PBCUM logo" className="h-full w-full object-cover" />
            </div>
            <div className="leading-snug">
              <div className="font-latin text-base sm:text-lg font-bold tracking-tight text-ink">PBCUM</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest2 text-black/58">马来亚大学华文学会</div>
            </div>
          </Link>

          <nav aria-label="网站导航" className="hidden items-center gap-0.5 xl:gap-1 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item)}
                className="cursor-pointer rounded-full px-3.5 py-2.5 text-base font-medium text-black/58 transition duration-300 hover:bg-black/5 hover:text-ink xl:px-3 xl:py-3"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white text-ink transition hover:border-umred/20 hover:text-umred shrink-0 xl:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="网站导航"
          hidden={!mobileOpen}
          className="max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-black/6 px-5 pb-5 pt-3 xl:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-black/70 hover:bg-black/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
