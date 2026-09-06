/**
 * ShengXun.jsx — 升讯团 (dept-06) detail page
 *
 * This file is the dedicated page for this specific department.
 * Customise layout, sections, and design freely without affecting other depts.
 * Shared utilities live in: src/components/shared/DeptPageShared.jsx
 */

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronLeft, Clock, Quote, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageDetailModal } from '../../components/GalleryLightbox';
import { Navbar } from '../../components/Navbar';
import { InitialsAvatar, NotFoundDept } from '../../components/shared/DeptPageShared';
import { Reveal } from '../../hooks/useInView.jsx';
import { getDepartmentBySlug } from '../../data/departments';

const SLUG = 'dept-06';

export function ShengXun() {
  const navigate = useNavigate();
  const dept = getDepartmentBySlug(SLUG);
  const [activeWork, setActiveWork] = useState(null);

  if (!dept) return <NotFoundDept />;

  const Icon = dept.icon;

  function goBack() {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/#groups');
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-soft-radial text-ink">
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════
          § 1  HEADER — department name + mission tagline
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden bg-white pt-24 pb-0 sm:pt-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-black/45 transition-colors duration-200 hover:text-umred"
          >
            <ChevronLeft className="h-4 w-4" />
            返回小组列表
          </button>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className={`flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-[24px] bg-gradient-to-br ${dept.accent} text-white shadow-glow`}>
              <Icon className="h-9 w-9" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">
                  {dept.eyebrow}
                </p>
                {dept.vibe && (
                  <span className="rounded-full border border-black/8 bg-black/4 px-2.5 py-0.5 text-[11px] font-medium text-black/50">
                    {dept.vibe}
                  </span>
                )}
              </div>
              <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {dept.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-[1.8] text-black/55">
                {dept.mission}
              </p>
            </div>
          </div>

          <div className={`mt-12 h-px w-full bg-gradient-to-r ${dept.accent} opacity-30`} />
        </div>
      </section>

      {/* ── Content body ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* ══════════════════════════════════════════════════════════════
            § 2  WHAT WE DO — description + focusAreas bullet list
        ══════════════════════════════════════════════════════════════ */}
        <Reveal delay={0.05}>
          <div className="mt-14 sm:mt-16">
            <div className="flex items-start gap-6">
              <div className={`mt-1 w-1 flex-shrink-0 self-stretch rounded-full bg-gradient-to-b ${dept.accent} opacity-60`} />
              <div className="flex-1">
                <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">
                  我们的工作
                </p>
                <p className="mt-4 max-w-3xl text-base leading-[1.9] text-black/62 sm:text-lg">
                  {dept.description}
                </p>
                {dept.focusAreas?.length > 0 && (
                  <ul className="mt-5 flex flex-col gap-2">
                    {dept.focusAreas.map((area, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-black/60">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-umred/50" strokeWidth={2} />
                        {area}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ══════════════════════════════════════════════════════════════
            § 3  LEADERSHIP — head + vice-head cards
        ══════════════════════════════════════════════════════════════ */}
        {dept.leadership?.length > 0 && (
          <Reveal delay={0.05}>
            <div className="mt-14 sm:mt-16">
              <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">
                小组领导
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {dept.leadership.map((person, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-2xl border border-black/6 bg-white px-5 py-4 shadow-soft"
                  >
                    {person.photo ? (
                      <img src={person.photo} alt={person.name} className="h-14 w-14 flex-shrink-0 rounded-full object-cover shadow-sm" />
                    ) : (
                      <InitialsAvatar name={person.name} accent={dept.accent} />
                    )}
                    <div>
                      <p className="font-semibold leading-snug text-ink">{person.name}</p>
                      <p className="mt-0.5 text-xs font-medium text-black/45">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* ══════════════════════════════════════════════════════════════
            § 4  WHAT YOU'LL GAIN — skills/experience list
        ══════════════════════════════════════════════════════════════ */}
        {dept.gains?.length > 0 && (
          <Reveal delay={0.05}>
            <div className="mt-14 sm:mt-16">
              <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">
                你将收获
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
                加入后，你会成长为……
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {dept.gains.map((gain, i) => (
                  <span key={i} className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft">
                    <Sparkles className="h-3.5 w-3.5 text-umred/60" />
                    {gain}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* ══════════════════════════════════════════════════════════════
            § 5  WHO FITS WELL HERE — trait/interest tags
        ══════════════════════════════════════════════════════════════ */}
        {dept.fitTags?.length > 0 && (
          <Reveal delay={0.05}>
            <div className="mt-14 sm:mt-16">
              <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">
                适合你，如果你……
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {dept.fitTags.map((tag, i) => (
                  <span key={i} className="rounded-full border border-black/10 bg-black/4 px-3.5 py-1.5 text-sm text-black/65">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* ══════════════════════════════════════════════════════════════
            § 6  PAST WORK / HIGHLIGHTS — feature cards (2–3 col)
        ══════════════════════════════════════════════════════════════ */}
        {dept.pastWork?.length > 0 && (
          <Reveal delay={0.05}>
            <div className="mt-14 sm:mt-16">
              <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">
                过往成果
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
                我们做过什么。
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {dept.pastWork.map((work, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setActiveWork(work)}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveWork(work)}
                      className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-black/6 bg-white shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-umred"
                    >
                      {work.image ? (
                        <img src={work.image} alt={work.title} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className={`h-44 w-full bg-gradient-to-br ${work.accent} opacity-80`} />
                      )}
                      <div className="p-6">
                        <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_right,rgba(161,18,23,0.04),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <h3 className="relative font-semibold leading-snug text-ink">{work.title}</h3>
                        <p className="relative mt-2 text-sm leading-[1.85] text-black/55">{work.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* ── Past Work Lightbox Modal ─────────────────────────────── */}
        <AnimatePresence>
          {activeWork && (
            <ImageDetailModal
              item={{
                title: activeWork.title,
                alt: activeWork.title,
                category: '过往成果',
                src: activeWork.image,
                tone: activeWork.accent || dept.accent,
                description: activeWork.description,
                detail: activeWork.detail,
              }}
              onClose={() => setActiveWork(null)}
            />
          )}
        </AnimatePresence>

        {/* ══════════════════════════════════════════════════════════════
            § OPTIONAL  TESTIMONIAL — member quote
        ══════════════════════════════════════════════════════════════ */}
        {dept.testimonial && (
          <Reveal delay={0.05}>
            <div className="mt-14 sm:mt-16">
              <div className="relative overflow-hidden rounded-[28px] border border-black/6 bg-white px-8 py-9 shadow-soft sm:px-12">
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${dept.accent}`} />
                <Quote className="mb-4 h-7 w-7 text-umred/30" strokeWidth={1.5} />
                <p className="text-base leading-[1.9] text-black/65 sm:text-lg">
                  "{dept.testimonial.quote}"
                </p>
                <p className="mt-4 text-sm font-semibold text-black/45">
                  — {dept.testimonial.author}
                </p>
              </div>
            </div>
          </Reveal>
        )}

        {/* ══════════════════════════════════════════════════════════════
            § 7  TIME COMMITMENT — single-line expectation
        ══════════════════════════════════════════════════════════════ */}
        {dept.timeCommitment && (
          <Reveal delay={0.05}>
            <div className="mt-14 sm:mt-16">
              <div className="flex items-center gap-3 rounded-2xl border border-black/6 bg-white px-6 py-4 shadow-soft">
                <Clock className="h-5 w-5 flex-shrink-0 text-umred/60" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-umred/60">时间投入</span>
                  <p className="mt-0.5 text-sm font-medium text-ink">{dept.timeCommitment}</p>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* ══════════════════════════════════════════════════════════════
            § 8  CLOSING CTA — how to join / recruitment / contact
        ══════════════════════════════════════════════════════════════ */}
        <Reveal delay={0.05}>
          <div className="mt-14 mb-20 sm:mt-16 sm:mb-28">
            <div className="overflow-hidden rounded-[36px] border border-black/6 bg-white shadow-soft">
              <div className={`h-2 w-full bg-gradient-to-r ${dept.accent}`} />
              <div className="grid gap-10 px-9 py-12 sm:px-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">如何加入</p>
                  <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
                    准备好加入我们了吗？
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-[1.85] text-black/55">
                    {dept.joinText}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                  <a href={dept.ctaHref} className="btn-primary whitespace-nowrap">
                    {dept.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <button onClick={goBack} className="btn-secondary whitespace-nowrap">
                    <ChevronLeft className="h-4 w-4" />
                    其他小组
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
