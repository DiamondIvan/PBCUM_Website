import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOTION } from './ui/animations';

const navItems = [
  { label: '关于我们', href: '#about' },
  { label: '精彩活动', href: '#activities' },
  { label: '委员会', href: '#committee' },
  { label: '相册', href: '#gallery' },
  { label: '联系我们', href: '#footer' },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <header className="fixed left-0 top-0 z-40 w-full px-4 pt-3 sm:px-6 sm:pt-4">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -16, opacity: 0 }}
        transition={{ duration: MOTION.duration * 0.8, ease: MOTION.ease }}
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-300 ${
          scrolled
            ? 'border-black/8 bg-white/90 shadow-nav backdrop-blur-2xl'
            : 'border-white/35 bg-white/60 shadow-[0_8px_32px_rgba(17,24,39,0.05)] backdrop-blur-xl'
        }`}
      >
        {/* Desktop bar */}
        <div className="flex items-center justify-between gap-5 px-6 py-4 sm:px-8 sm:py-4.5">
          <Link to="/" className="group inline-flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-glow transition duration-300 group-hover:rotate-6 group-hover:scale-105">
              <img src="/pbcum.jpg" alt="PBCUM logo" className="h-full w-full object-cover" />
            </div>
            <div className="leading-snug">
              <div className="font-latin text-lg font-bold tracking-tight text-ink">PBCUM</div>
              <div className="text-xs uppercase tracking-widest2 text-black/45">马来亚大学华文学会</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-5 py-3 text-lg font-medium text-black/58 transition duration-300 hover:bg-black/5 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-6 py-3 text-lg font-semibold text-ink shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-umred/25 hover:text-umred hover:shadow-md"
            >
              <Sparkles className="h-4 w-4" />
              加入我们
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/8 bg-white text-ink transition hover:border-umred/20 hover:text-umred lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen ? (
          <div className="border-t border-black/6 px-6 pb-6 lg:hidden">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl px-5 py-4 text-lg font-medium text-black/65 transition hover:bg-black/4 hover:text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/join"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-umred px-6 py-4 text-lg font-semibold text-white shadow-glow"
                onClick={() => setMobileOpen(false)}
              >
                <Sparkles className="h-5 w-5" />
                加入 PBCUM
              </Link>
            </div>
          </div>
        ) : null}
      </motion.div>
    </header>
  );
}
