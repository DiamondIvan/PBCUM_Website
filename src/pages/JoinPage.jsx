import { ArrowRight, CheckCircle2, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  'Fill in the membership form and share your interests.',
  'Meet the committee and get matched to activities.',
  'Join events, contribute ideas, and grow your network.',
];

export function JoinPage() {
  return (
    <main className="min-h-screen bg-soft-radial px-4 py-8 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl pt-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-black/55 transition hover:text-umred">
          <ChevronLeft className="h-4 w-4" />
          Back to home
        </Link>
        <div className="mt-8 rounded-[40px] border border-black/6 bg-white p-8 shadow-soft sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-umred/70">Join PBCUM</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">Start your PBCUM journey.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">
            Become part of a premium, culture-forward student community focused on leadership, language, and campus impact.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-[28px] border border-black/6 bg-[#fafafa] p-5">
                <CheckCircle2 className="h-5 w-5 text-umred" />
                <p className="mt-4 text-sm leading-7 text-black/65">
                  <span className="font-semibold text-ink">0{index + 1}.</span> {step}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="mailto:pbcum@um.edu.my" className="inline-flex items-center justify-center gap-2 rounded-full bg-umred px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5">
              Email the committee
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-umred/20 hover:text-umred">
              Explore the website
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
