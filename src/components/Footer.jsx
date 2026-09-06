import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const footerLinks = [
  { label: '关于我们', id: 'about' },
  { label: '精彩活动', id: 'activities' },
  { label: '执委会', id: 'committee' },
  { label: '相册', id: 'gallery' },
  { label: '活动日历', id: 'calendar' },
];

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e, item) => {
    e.preventDefault();
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
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white transition duration-300 hover:border-umred hover:text-umred hover:shadow-sm"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white transition duration-300 hover:border-umred hover:text-umred hover:shadow-sm"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="mailto:pbcum@um.edu.my"
              aria-label="发送电邮"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white transition duration-300 hover:border-umred hover:text-umred hover:shadow-sm"
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
                href={`/#${link.id}`}
                onClick={(e) => handleLinkClick(e, link)}
                className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-black/55 transition duration-300 hover:text-umred"
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
              <span className="font-latin">+60 17-932 3168</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-umred" />
              <span className="font-latin">pbcum41@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright strip */}
      <div className="border-t border-black/5 px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
          <p className="text-xs text-black/35">
            © {new Date().getFullYear()} 马来亚大学华文学会（PBCUM）。版权所有。
          </p>
          <p className="font-latin text-xs text-black/28">马来亚大学</p>
        </div>
      </div>
    </footer>
  );
}
