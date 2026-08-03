import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: '关于我们', href: '#about' },
  { label: '精彩活动', href: '#activities' },
  { label: '委员会', href: '#committee' },
  { label: '相册', href: '#gallery' },
];

export function Footer() {
  return (
    <footer id="footer" className="border-t border-black/6 bg-[#fafafa]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.4fr_0.7fr_0.9fr] lg:gap-16 lg:px-8">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-umred text-white shadow-glow">
              <span className="font-latin text-sm font-bold">P</span>
            </div>
            <h2 className="font-latin text-2xl font-bold tracking-tight text-ink">PBCUM</h2>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-[1.8] text-black/55">
            马来亚大学华文学会致力于传承中华文化、培育领导人才，为每一位会员打造充实而有意义的校园体验。
          </p>
          <div className="mt-7 flex items-center gap-3 text-black/42">
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full border border-black/8 bg-white p-3 transition duration-300 hover:border-umred hover:text-umred hover:shadow-sm"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full border border-black/8 bg-white p-3 transition duration-300 hover:border-umred hover:text-umred hover:shadow-sm"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="mailto:pbcum@um.edu.my"
              aria-label="发送电邮"
              className="rounded-full border border-black/8 bg-white p-3 transition duration-300 hover:border-umred hover:text-umred hover:shadow-sm"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-black/38">
            快速导览
          </p>
          <div className="mt-5 flex flex-col gap-3.5">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-black/55 transition duration-300 hover:text-umred"
              >
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                {link.label}
              </a>
            ))}
            <Link
              to="/join"
              className="inline-flex items-center gap-2 text-sm font-medium text-black/55 transition duration-300 hover:text-umred"
            >
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              加入我们
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-black/38">
            联系方式
          </p>
          <div className="mt-5 space-y-4 text-sm text-black/55">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-umred" />
              <span className="leading-[1.7]">马来亚大学，吉隆坡</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-umred" />
              <span className="font-latin">+60 12-345 6789</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-umred" />
              <span className="font-latin">pbcum@um.edu.my</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright strip */}
      <div className="border-t border-black/5 px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <p className="text-xs text-black/35">
            © {new Date().getFullYear()} 马来亚大学华文学会（PBCUM）。版权所有。
          </p>
          <p className="font-latin text-xs text-black/28">马来亚大学</p>
        </div>
      </div>
    </footer>
  );
}
