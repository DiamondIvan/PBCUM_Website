import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MOTION } from './ui/animations';

const navItems = [
  { label: '关于我们', id: 'about' },
  { label: '精彩活动', id: 'activities' },
  { label: '执委会', id: 'committee' },
  { label: '相册', id: 'gallery' },
  { label: '联系我们', id: 'footer' },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const nextScrolled = latest > 20;
    setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
  });

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname === '/') {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${item.id}`);
      }
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
    <header className="fixed left-0 top-0 z-40 w-full px-4 pt-3 sm:px-6 sm:pt-4">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -16, opacity: 0 }}
        transition={{ duration: MOTION.duration * 0.8, ease: MOTION.ease }}
        className={`mx-auto max-w-7xl rounded-[24px] sm:rounded-[28px] border transition-[background-color,border-color,box-shadow] duration-300 ${
          mobileOpen
            ? 'border-black/8 bg-white/95 shadow-xl backdrop-blur-2xl'
            : scrolled
            ? 'border-black/8 bg-white/90 shadow-nav backdrop-blur-2xl'
            : 'border-white/35 bg-white/60 shadow-[0_8px_32px_rgba(17,24,39,0.05)] backdrop-blur-xl'
        }`}
      >
        {/* Desktop & Main Header bar */}
        <div className="flex items-center justify-between gap-5 px-5 py-3.5 sm:px-8 sm:py-4.5">
          <Link to="/" onClick={handleLogoClick} className="group inline-flex items-center gap-3.5 sm:gap-4">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-glow transition duration-300 group-hover:rotate-6 group-hover:scale-105">
              <img src="/pbcum.jpg" alt="PBCUM logo" className="h-full w-full object-cover" />
            </div>
            <div className="leading-snug">
              <div className="font-latin text-base sm:text-lg font-bold tracking-tight text-ink">PBCUM</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest2 text-black/45">马来亚大学华文学会</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item)}
                className="cursor-pointer rounded-full px-3.5 py-2.5 text-base font-medium text-black/58 transition duration-300 hover:bg-black/5 hover:text-ink xl:px-5 xl:py-3 xl:text-lg"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:gap-4 md:flex">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2.5 text-base font-semibold text-ink shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-umred/25 hover:text-umred hover:shadow-md xl:px-6 xl:py-3 xl:text-lg"
            >
              <Sparkles className="h-4 w-4" />
              加入我们
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white text-ink transition hover:border-umred/20 hover:text-umred lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden border-t border-black/6"
            >
              <div className="max-h-[calc(100dvh-6rem)] overflow-y-auto px-5 pb-5 pt-3">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={`/#${item.id}`}
                      onClick={(e) => handleNavClick(e, item)}
                      className="cursor-pointer rounded-2xl px-4 py-3 text-base font-medium text-black/70 transition hover:bg-black/4 hover:text-ink active:bg-black/6"
                    >
                      {item.label}
                    </a>
                  ))}
                  <Link
                    to="/join"
                    className="mt-2.5 inline-flex items-center justify-center gap-2 rounded-2xl bg-umred px-5 py-3.5 text-base font-semibold text-white shadow-glow active:scale-[0.99]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Sparkles className="h-4 w-4" />
                    加入 PBCUM
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
