import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Committee', href: '#committee' },
  { label: 'Gallery', href: '#gallery' },
];

export function Footer() {
  return (
    <footer id="footer" className="border-t border-black/6 bg-[#fafafa] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-ink">PBCUM</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-black/58">
            Persatuan Bahasa Cina Universiti Malaya is a modern Chinese language society website built for culture, leadership, and meaningful student connection.
          </p>
          <div className="mt-6 flex items-center gap-3 text-black/45">
            <a href="#" aria-label="Instagram" className="rounded-full border border-black/8 bg-white p-3 transition hover:border-umred hover:text-umred"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-black/8 bg-white p-3 transition hover:border-umred hover:text-umred"><Facebook className="h-4 w-4" /></a>
            <a href="mailto:pbcum@um.edu.my" aria-label="Email" className="rounded-full border border-black/8 bg-white p-3 transition hover:border-umred hover:text-umred"><Mail className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">Quick Links</p>
          <div className="mt-4 flex flex-col gap-3">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="inline-flex items-center gap-2 text-sm font-medium text-black/58 transition hover:text-umred">
                <ArrowUpRight className="h-4 w-4" />
                {link.label}
              </a>
            ))}
            <Link to="/join" className="inline-flex items-center gap-2 text-sm font-medium text-black/58 transition hover:text-umred">
              <ArrowUpRight className="h-4 w-4" />
              Join
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">Contact</p>
          <div className="mt-4 space-y-4 text-sm text-black/58">
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-umred" /><span>Universiti Malaya, Kuala Lumpur</span></div>
            <div className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-umred" /><span>+60 12-345 6789</span></div>
            <div className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-umred" /><span>pbcum@um.edu.my</span></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
