import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpenText,
  ChevronRight,
  Flame,
  Globe2,
  GraduationCap,
  Languages,
  LayoutGrid,
  Medal,
  MessageCircleMore,
  Sparkles,
  Star,
  Users,
  Wand2,
} from 'lucide-react';
import { sectionData } from './src/data/siteData';
import { AnimatedSection, SectionHeading } from './src/components/ui/SectionHeading';
import { GradientOrbs } from './src/components/ui/GradientOrbs';
import { MotionCard } from './src/components/ui/MotionCard';
import { StatCounter } from './src/components/ui/StatCounter';
import { GalleryLightbox } from './src/components/GalleryLightbox';
import { TestimonialsCarousel } from './src/components/TestimonialsCarousel';
import { CommitteeGrid } from './src/components/CommitteeGrid';
import { SponsorMarquee } from './src/components/SponsorMarquee';
import { Footer } from './src/components/Footer';
import { Navbar } from './src/components/Navbar';
import { ActivityShowcase } from './src/components/ActivityShowcase';
import { useMousePosition } from './src/hooks/useMousePosition';
import { useScrollProgress } from './src/hooks/useScrollProgress';

const heroBadges = [
  'Persatuan Bahasa Cina Universiti Malaya',
  'Est. 1962',
  'Culture • Community • Excellence',
];

const joinHighlights = [
  'A refined society experience with culture-driven programming.',
  'Leadership pathways, language immersion, and high-end campus events.',
  'A community designed to feel welcoming, polished, and ambitious.',
];

function IconCard({ icon: Icon, title, description }) {
  return (
    <MotionCard className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white p-7 shadow-soft backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(161,18,23,0.08),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-umred/10 text-umred transition-transform duration-500 group-hover:scale-110 group-hover:bg-umred group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-ink">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-black/65">{description}</p>
        </div>
      </div>
    </MotionCard>
  );
}

function HeroSection() {
  const { x, y } = useMousePosition();
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background: `radial-gradient(circle at ${x}% ${y}%, rgba(161,18,23,0.16), transparent 20%), linear-gradient(180deg, rgba(255,255,255,0.96), rgba(245,245,247,0.9))`,
        }}
      />
      <GradientOrbs />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <div className="mb-8 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-black/8 bg-white/75 px-4 py-2 text-xs font-medium tracking-[0.16em] text-black/60 shadow-[0_10px_30px_rgba(17,24,39,0.05)] backdrop-blur-md"
              >
                {badge}
              </span>
            ))}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-ink sm:text-7xl lg:text-[5.4rem]"
          >
            Connecting Culture.
            <span className="block text-umred">Inspiring Excellence.</span>
          </motion.h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-black/62 sm:text-lg">
            PBCUM brings together students who care about language, identity, and meaningful campus experiences. The site is designed as a premium digital home for culture, leadership, and modern student life.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#join"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-umred px-6 py-4 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-[#881116]"
            >
              Join the community
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-4 text-sm font-semibold text-ink shadow-[0_12px_30px_rgba(17,24,39,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-umred/20 hover:text-umred"
            >
              Explore PBCUM
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {sectionData.stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
            ))}
          </div>
        </div>

        <div className="relative lg:pl-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/75 p-5 shadow-[0_40px_120px_rgba(17,24,39,0.12)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0.05))]" />
            <div className="relative rounded-[30px] bg-hero-gradient p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-white/72">PBCUM Experience</p>
                  <h2 className="mt-3 text-2xl font-semibold">A premium cultural community for UM students</h2>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/14 backdrop-blur-md">
                  <Languages className="h-7 w-7" />
                </div>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Language Circles', description: 'Immersive sessions for speaking confidence and cultural fluency.' },
                  { title: 'Signature Events', description: 'Carefully crafted experiences with elevated visual identity.' },
                  { title: 'Leadership Growth', description: 'Real responsibility through committees and project ownership.' },
                  { title: 'Community Network', description: 'A campus network built on shared ambition and mutual support.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-[24px] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/76">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-5 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-[30px] border border-black/6 bg-[#fbfbfb] p-6 shadow-[0_20px_60px_rgba(17,24,39,0.06)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-black/45">Next event</p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">Moonlit Culture Forum</h3>
                <p className="mt-3 text-sm leading-7 text-black/60">An evening experience blending conversation, performance, and visual storytelling.</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-umred/10 px-4 py-2 text-sm font-medium text-umred">
                  <Sparkles className="h-4 w-4" />
                  Premium campus programming
                </div>
              </motion.div>
              <div className="grid gap-4">
                <div className="rounded-[30px] border border-black/6 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.06)]">
                  <p className="text-sm font-medium text-black/48">Member growth</p>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-4xl font-semibold tracking-[-0.04em] text-ink">1,2K</span>
                    <span className="mb-1 text-sm text-emerald-600">+18% this year</span>
                  </div>
                </div>
                <div className="rounded-[30px] border border-black/6 bg-white p-5 shadow-[0_20px_60px_rgba(17,24,39,0.06)]">
                  <p className="text-sm font-medium text-black/48">Campus presence</p>
                  <div className="mt-4 flex items-center gap-3 text-sm font-medium text-ink">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    Active across faculty and student spaces
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(160deg,rgba(161,18,23,0.96),rgba(81,11,14,0.96))] p-8 text-white shadow-soft sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_45%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">About PBCUM</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">A refined platform for language, culture, and leadership.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/78">
              We create experiences that help students speak with confidence, build meaningful friendships, and represent the society with distinction. Every touchpoint is crafted to feel thoughtful and premium.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {sectionData.aboutPoints.map((point) => (
                <div key={point.title} className="rounded-[24px] border border-white/12 bg-white/10 p-5 backdrop-blur-md">
                  <point.icon className="h-5 w-5 text-white/92" />
                  <h3 className="mt-4 font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/72">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {sectionData.aboutStats.map((stat) => (
            <MotionCard key={stat.label} className="rounded-[30px] border border-black/6 bg-[linear-gradient(180deg,#fff,#f8f8f8)] p-7 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-black/40">{stat.label}</p>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-5xl font-semibold tracking-[-0.06em] text-ink">{stat.value}</span>
                  </div>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-umred/10 text-umred">
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-black/60">{stat.description}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function WhyJoinSection() {
  return (
    <AnimatedSection id="join-us" className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Join Us"
          title="A society experience that feels considered, modern, and worth showing up for."
          description="Not just a club. A platform for leadership, cultural confidence, and meaningful campus memories."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {sectionData.features.map((feature) => (
            <IconCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ActivitiesSection() {
  return (
    <AnimatedSection id="activities" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Activities"
          title="Signature events with the look and feel of a premium cultural brand."
          description="Workshops, showcases, forums, and social experiences curated with a clean visual identity."
        />
        <div className="mt-14">
          <ActivityShowcase events={sectionData.activities} />
        </div>
      </div>
    </AnimatedSection>
  );
}

function CommitteeSection() {
  return (
    <AnimatedSection id="committee" className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Committee"
          title="A leadership team presented with clarity, warmth, and visual polish."
          description="Each role has space to breathe, and every profile card feels designed rather than assembled."
        />
        <CommitteeGrid members={sectionData.committee} />
      </div>
    </AnimatedSection>
  );
}

function GallerySection() {
  return (
    <AnimatedSection id="gallery" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="An editorial masonry gallery with lightbox interaction."
          description="Visual storytelling for moments that matter, arranged with a premium spatial rhythm."
        />
        <div className="mt-14">
          <GalleryLightbox items={sectionData.gallery} />
        </div>
      </div>
    </AnimatedSection>
  );
}

function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Student voices presented in an elegant, glass-like carousel."
          description="Short and confident feedback that keeps the section clean while still feeling human."
        />
        <div className="mt-14">
          <TestimonialsCarousel testimonials={sectionData.testimonials} />
        </div>
      </div>
    </AnimatedSection>
  );
}

function SponsorsSection() {
  return (
    <AnimatedSection id="partners" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">Sponsors / Partners</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">A quiet, premium sponsor strip.</h2>
          </div>
        </div>
        <SponsorMarquee items={sectionData.partners} />
      </div>
    </AnimatedSection>
  );
}

function JoinCtaSection() {
  return (
    <AnimatedSection id="join" className="bg-[#fafafa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] bg-hero-gradient px-8 py-12 text-white shadow-[0_40px_120px_rgba(161,18,23,0.25)] sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_36%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Join Us</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Bring your language, your energy, and your ambition to PBCUM.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/78">
                We’re building a society that feels premium, inclusive, and future-facing. If you want to contribute to culture while developing as a leader, this is where you belong.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:pbcum@um.edu.my" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-umred transition duration-300 hover:-translate-y-0.5 hover:bg-white/95">
                  Contact the committee
                  <MessageCircleMore className="h-4 w-4" />
                </a>
                <a href="#footer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/12">
                  View socials
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {joinHighlights.map((item, index) => (
                <div key={item} className="rounded-[28px] border border-white/12 bg-white/10 p-6 backdrop-blur-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/12 text-white">
                    <span className="text-sm font-semibold">0{index + 1}</span>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-white/84">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function HomePage() {
  const progress = useScrollProgress();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-soft-radial text-ink">
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-black/5">
        <motion.div className="h-full origin-left bg-umred" style={{ scaleX: progress }} />
      </div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyJoinSection />
      <ActivitiesSection />
      <CommitteeSection />
      <GallerySection />
      <TestimonialsSection />
      <SponsorsSection />
      <JoinCtaSection />
      <Footer />
    </div>
  );
}

export default HomePage;
