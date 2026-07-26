import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Committee', href: '#committee' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#footer' },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <header className="fixed left-0 top-0 z-40 w-full px-3 pt-2 sm:px-4 sm:pt-3">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -16, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-300 ${scrolled ? 'border-black/8 bg-white/85 shadow-[0_10px_35px_rgba(17,24,39,0.08)] backdrop-blur-2xl' : 'border-white/30 bg-white/55 shadow-[0_8px_30px_rgba(17,24,39,0.04)] backdrop-blur-xl'}`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6 sm:py-3">
          <Link to="/" className="group inline-flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-umred text-white shadow-glow transition duration-300 group-hover:rotate-6">
              <span className="text-sm font-semibold">P</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-ink">PBCUM</div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-black/45">UM Chinese Society</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="rounded-full px-4 py-2 text-sm font-medium text-black/60 transition hover:bg-black/5 hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/join" className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-umred/20 hover:text-umred">
              <Sparkles className="h-4 w-4" />
              Join
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white text-ink lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-black/6 px-4 pb-4 lg:hidden">
            <div className="flex flex-col gap-2 pt-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-medium text-black/68 transition hover:bg-black/5 hover:text-ink" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
              ))}
              <Link to="/join" className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-umred px-4 py-3 text-sm font-semibold text-white" onClick={() => setMobileOpen(false)}>
                <Sparkles className="h-4 w-4" />
                Join PBCUM
              </Link>
            </div>
          </div>
        ) : null}
      </motion.div>
    </header>
  );
}
