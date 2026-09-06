/**
 * DeptPageLayout.jsx — the one layout every 七小组 page renders through.
 *
 * Each of the seven groups keeps its own page file holding its own words, and
 * passes them here as `content`. The words are edited per group; the markup is
 * not. That is what keeps the format identical — a section added here appears on
 * all seven, and no page can drift out of shape on its own.
 *
 * Section order follows the structure of the 相声组 source document:
 *
 *   1  Hero            logo, name, mission line, founded-year credential
 *   2  简介            what the art form is, and what this group does
 *   3  组史            founding year, founders, how the group came to be
 *   4  宗旨与目标      the mission statement, then its objectives
 *   5  适合谁          an invitation quote, then trait tags
 *   6  常年活动        the recurring programme the group runs
 *   7  组长            who leads it
 *   8  加入我们        recruitment CTA and social links
 *
 * Every section is optional. A group that has not supplied its 组史 simply does
 * not render one, so the six departments still awaiting content degrade to a
 * shorter page rather than showing empty headings or placeholder text.
 */

import { AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CalendarDays, CheckCircle2, ChevronLeft, Facebook,
  Instagram, Quote, Users,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageDetailModal } from '../GalleryLightbox';
import { Navbar } from '../Navbar';
import { InitialsAvatar, NotFoundDept } from './DeptPageShared';
import { Reveal } from '../../hooks/useInView.jsx';

/* ─── Small building blocks ─────────────────────────────────────────────── */

/** The red eyebrow label that opens every section. */
function Eyebrow({ children }) {
  return (
    <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">
      {children}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
      {children}
    </h2>
  );
}

/** Wraps a section in its reveal + consistent vertical rhythm. */
function Section({ children, delay = 0.05 }) {
  return (
    <Reveal delay={delay}>
      <div className="mt-14 sm:mt-16">{children}</div>
    </Reveal>
  );
}

/* ─── Layout ────────────────────────────────────────────────────────────── */

export function DeptPageLayout({ content: dept }) {
  const navigate = useNavigate();
  const [activeActivity, setActiveActivity] = useState(null);

  if (!dept) return <NotFoundDept />;

  function goBack() {
    if (window.history.length > 1) navigate(-1);
    else navigate('/#groups');
  }

  const social = dept.social ?? {};
  const hasSocial = social.facebook || social.instagram;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-soft-radial text-ink">
      <Navbar />

      {/* ═══ 1 · HERO ═══════════════════════════════════════════════════ */}
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
            {/* The group's own logo, matching the card it was opened from.
                Falls back to the lucide icon for groups without a logo file. */}
            {dept.logo ? (
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-[24px] border border-black/6 bg-white p-3 shadow-soft">
                <img src={dept.logo} alt="" className="h-full w-full object-contain" />
              </div>
            ) : dept.icon ? (
              <div
                className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-[24px] text-white shadow-glow"
                style={{ background: `linear-gradient(to bottom right, ${dept.accentHex}, ${dept.accentHex})` }}
              >
                <dept.icon className="h-9 w-9" />
              </div>
            ) : null}

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>{dept.eyebrow}</Eyebrow>
                {dept.vibe && (
                  <span className="rounded-full border border-black/8 bg-black/4 px-2.5 py-0.5 text-[11px] font-medium text-black/50">
                    {dept.vibe}
                  </span>
                )}
              </div>
              <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {dept.title}
              </h1>
              {dept.mission && (
                <p className="mt-4 max-w-2xl text-lg leading-[1.8] text-black/55">
                  {dept.mission}
                </p>
              )}

              {/* Credential chips — a founding year is the strongest single
                  signal of legitimacy a student group has, so it sits up here
                  rather than being buried in the history section. */}
              {(dept.founded || dept.memberCount) && (
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {dept.founded && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-3.5 py-1.5 text-xs font-medium text-black/60 shadow-sm">
                      <CalendarDays className="h-3.5 w-3.5 opacity-55" />
                      成立于 {dept.founded}
                    </span>
                  )}
                  {dept.memberCount && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-3.5 py-1.5 text-xs font-medium text-black/60 shadow-sm">
                      <Users className="h-3.5 w-3.5 opacity-55" />
                      {dept.memberCount}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          <div
            className="mt-12 h-px w-full opacity-30"
            style={{ background: `linear-gradient(to right, ${dept.accentHex}, transparent)` }}
          />
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* ═══ 2 · 简介 ═════════════════════════════════════════════════ */}
        {dept.description && (
          <Section>
            <div className="flex items-start gap-6">
              <div
                className="mt-1 w-1 flex-shrink-0 self-stretch rounded-full opacity-60"
                style={{ background: `linear-gradient(to bottom, ${dept.accentHex}, transparent)` }}
              />
              <div className="flex-1">
                <Eyebrow>简介</Eyebrow>
                <p className="mt-4 max-w-3xl whitespace-pre-line text-base leading-[1.9] text-black/62 sm:text-lg">
                  {dept.description}
                </p>
              </div>
            </div>
          </Section>
        )}

        {/* ═══ 3 · 组史 ═════════════════════════════════════════════════ */}
        {dept.history && (
          <Section>
            <Eyebrow>组史</Eyebrow>
            <SectionTitle>我们是怎么开始的。</SectionTitle>
            <div className="mt-6 overflow-hidden rounded-[28px] border border-black/6 bg-white shadow-soft">
              <div className="h-1.5 w-full" style={{ backgroundColor: dept.accentHex }} />
              <div className="px-7 py-7 sm:px-9 sm:py-8">
                <p className="whitespace-pre-line text-base leading-[1.9] text-black/62">
                  {dept.history}
                </p>
                {dept.founders?.length > 0 && (
                  <div className="mt-6 border-t border-black/6 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-widest2 text-black/38">
                      创办人
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {dept.founders.map((name, i) => (
                        <span
                          key={i}
                          className="rounded-full px-3 py-1 text-sm font-medium text-white"
                          style={{ backgroundColor: dept.accentHex }}
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Section>
        )}

        {/* ═══ 4 · 宗旨与目标 ═══════════════════════════════════════════ */}
        {(dept.purpose || dept.objectives?.length > 0) && (
          <Section>
            <Eyebrow>宗旨与目标</Eyebrow>
            {dept.purpose && (
              <blockquote className="mt-5 border-l-4 pl-6" style={{ borderColor: dept.accentHex }}>
                <p className="text-xl font-semibold leading-[1.6] tracking-[-0.02em] text-ink sm:text-2xl">
                  「{dept.purpose}」
                </p>
              </blockquote>
            )}
            {dept.objectives?.length > 0 && (
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {dept.objectives.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-black/6 bg-white px-5 py-4 text-sm leading-[1.7] text-black/62 shadow-soft"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 flex-shrink-0"
                      style={{ color: dept.accentHex }}
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </Section>
        )}

        {/* ═══ 5 · 适合谁 ═══════════════════════════════════════════════ */}
        {(dept.fitQuote || dept.fitTags?.length > 0) && (
          <Section>
            <Eyebrow>适合谁参与</Eyebrow>
            {dept.fitQuote && (
              <div className="relative mt-5 overflow-hidden rounded-[28px] border border-black/6 bg-white px-8 py-9 shadow-soft sm:px-12">
                <div className="absolute left-0 top-0 h-full w-1" style={{ backgroundColor: dept.accentHex }} />
                <Quote className="mb-4 h-7 w-7 opacity-30" style={{ color: dept.accentHex }} strokeWidth={1.5} />
                <p className="text-lg leading-[1.85] text-black/68 sm:text-xl">
                  {dept.fitQuote}
                </p>
              </div>
            )}
            {dept.fitTags?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {dept.fitTags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-black/10 bg-black/4 px-3.5 py-1.5 text-sm text-black/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Section>
        )}

        {/* ═══ 6 · 常年活动 ═════════════════════════════════════════════ */}
        {dept.activities?.length > 0 && (
          <Section>
            <Eyebrow>常年活动</Eyebrow>
            <SectionTitle>我们全年在做的事。</SectionTitle>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dept.activities.map((item, i) => {
                const clickable = Boolean(item.image || item.detail);
                return (
                  <Reveal key={i} delay={Math.min(i * 0.06, 0.3)}>
                    <div
                      role={clickable ? 'button' : undefined}
                      tabIndex={clickable ? 0 : undefined}
                      onClick={clickable ? () => setActiveActivity(item) : undefined}
                      onKeyDown={
                        clickable
                          ? (e) => (e.key === 'Enter' || e.key === ' ') && setActiveActivity(item)
                          : undefined
                      }
                      className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-black/6 bg-white shadow-soft transition-[transform,box-shadow] duration-300 ${
                        clickable
                          ? 'cursor-pointer hover:-translate-y-1.5 hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-umred'
                          : ''
                      }`}
                    >
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          decoding="async"
                          className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <div className="flex flex-1 flex-col p-5">
                        <span
                          className="font-latin text-[11px] font-bold tracking-widest2"
                          style={{ color: dept.accentHex, opacity: 0.5 }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="mt-1.5 font-semibold leading-snug text-ink">{item.name}</h3>
                        {item.description && (
                          <p className="mt-2 text-sm leading-[1.8] text-black/55">{item.description}</p>
                        )}
                      </div>
                      <div className="h-1 w-full" style={{ backgroundColor: dept.accentHex, opacity: 0.35 }} />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Section>
        )}

        <AnimatePresence>
          {activeActivity && (
            <ImageDetailModal
              item={{
                title: activeActivity.name,
                alt: activeActivity.name,
                category: '常年活动',
                src: activeActivity.image,
                tone: dept.accent,
                description: activeActivity.description,
                detail: activeActivity.detail,
              }}
              onClose={() => setActiveActivity(null)}
            />
          )}
        </AnimatePresence>

        {/* ═══ 7 · 组长 ═════════════════════════════════════════════════ */}
        {dept.leadership?.length > 0 && (
          <Section>
            <Eyebrow>小组负责人</Eyebrow>
            <div className="mt-6 flex flex-wrap gap-4">
              {dept.leadership.map((person, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border border-black/6 bg-white px-5 py-4 shadow-soft"
                >
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt=""
                      width="264"
                      height="330"
                      loading="lazy"
                      decoding="async"
                      className="h-14 w-14 flex-shrink-0 rounded-full object-cover shadow-sm"
                    />
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
          </Section>
        )}

        {/* ═══ 8 · 加入我们 ═════════════════════════════════════════════ */}
        <Reveal delay={0.05}>
          <div className="mt-14 mb-20 sm:mt-16 sm:mb-28">
            <div className="overflow-hidden rounded-[36px] border border-black/6 bg-white shadow-soft">
              <div className="h-2 w-full" style={{ backgroundColor: dept.accentHex }} />
              <div className="grid gap-10 px-9 py-12 sm:px-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <Eyebrow>如何加入</Eyebrow>
                  <SectionTitle>准备好加入我们了吗？</SectionTitle>
                  {dept.joinText && (
                    <p className="mt-4 max-w-xl text-base leading-[1.85] text-black/55">
                      {dept.joinText}
                    </p>
                  )}

                  {hasSocial && (
                    <div className="mt-7">
                      <p className="text-[11px] font-semibold uppercase tracking-widest2 text-black/38">
                        关注我们
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        {social.facebook && (
                          <a
                            href={social.facebook}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${dept.title} Facebook`}
                            className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-black/60 shadow-sm transition duration-200 hover:border-umred/25 hover:text-umred"
                          >
                            <Facebook className="h-4 w-4" />
                            Facebook
                          </a>
                        )}
                        {social.instagram && (
                          <a
                            href={social.instagram}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${dept.title} Instagram`}
                            className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-medium text-black/60 shadow-sm transition duration-200 hover:border-umred/25 hover:text-umred"
                          >
                            <Instagram className="h-4 w-4" />
                            {social.instagramHandle ?? 'Instagram'}
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                  {dept.ctaHref && (
                    <a
                      href={dept.ctaHref}
                      target={dept.ctaHref.startsWith('http') ? '_blank' : undefined}
                      rel={dept.ctaHref.startsWith('http') ? 'noreferrer' : undefined}
                      className="btn-primary whitespace-nowrap"
                    >
                      {dept.ctaLabel ?? '报名加入'}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
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
