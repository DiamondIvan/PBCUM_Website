import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Reveal } from '../hooks/useInView.jsx';
import { getDepartmentBySlug } from '../data/departments';

/* ─── NotFound ──────────────────────────────────────────────────────── */

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-soft-radial px-4 text-ink">
      <p className="font-latin text-xs font-semibold uppercase tracking-widest3 text-umred/68">404</p>
      <h1 className="text-3xl font-semibold">小组未找到</h1>
      <Link to="/#groups" className="btn-secondary">
        <ChevronLeft className="h-4 w-4" />
        返回小组列表
      </Link>
    </main>
  );
}

/* ─── DepartmentDetailPage ──────────────────────────────────────────── */

export function DepartmentDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dept = getDepartmentBySlug(slug);

  if (!dept) return <NotFound />;

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

      {/* ── Department Header ────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-white pt-24 pb-0 sm:pt-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Back-link */}
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-black/45 transition-colors duration-200 hover:text-umred"
          >
            <ChevronLeft className="h-4 w-4" />
            返回小组列表
          </button>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            {/* Icon badge */}
            <div className={`flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-[24px] bg-gradient-to-br ${dept.accent} text-white shadow-glow`}>
              <Icon className="h-9 w-9" />
            </div>
            <div>
              <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">
                {dept.eyebrow}
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {dept.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-[1.8] text-black/55">
                {dept.mission}
              </p>
            </div>
          </div>

          {/* Thin gradient rule */}
          <div className={`mt-12 h-px w-full bg-gradient-to-r ${dept.accent} opacity-30`} />
        </div>
      </section>

      {/* ── Content body ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* ── What we do ──────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <div className="mt-14 sm:mt-16">
            <div className="flex items-start gap-6">
              {/* Left accent bar */}
              <div className={`mt-1 w-1 flex-shrink-0 self-stretch rounded-full bg-gradient-to-b ${dept.accent} opacity-60`} />
              <div>
                <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">我们的工作</p>
                <p className="mt-4 max-w-3xl text-base leading-[1.9] text-black/62 sm:text-lg">
                  {dept.description}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Focus Areas ─────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <div className="mt-14 sm:mt-16">
            <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">核心职责</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
              我们专注于什么。
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {dept.focusAreas.map((area, i) => {
                const AreaIcon = area.icon;
                return (
                  <Reveal key={i} delay={i * 0.07}>
                    <div className="group flex flex-col gap-4 rounded-[24px] border border-black/6 bg-white p-7 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${dept.accent} text-white shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                        <AreaIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold leading-snug text-ink">{area.label}</h3>
                        <p className="mt-1.5 text-sm leading-[1.75] text-black/52">{area.note}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ── Past Work ───────────────────────────────────────────── */}
        <Reveal delay={0.05}>
          <div className="mt-14 sm:mt-16">
            <p className="font-latin text-[11px] font-semibold uppercase tracking-widest3 text-umred/68">过往成果</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
              我们做过什么。
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {dept.pastWork.map((work, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group relative overflow-hidden rounded-[28px] border border-black/6 bg-white shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                    {/* Coloured top strip */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${work.accent}`} />
                    <div className="p-7">
                      <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_right,rgba(161,18,23,0.04),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <h3 className="relative font-semibold leading-snug text-ink">{work.title}</h3>
                      <p className="relative mt-3 text-sm leading-[1.85] text-black/55">{work.description}</p>
                      <div className="relative mt-6 flex items-center gap-1 text-xs font-semibold text-umred opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        查看详情
                        <ChevronRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Join / Get Involved ─────────────────────────────────── */}
        <Reveal delay={0.05}>
          <div className="mt-14 mb-20 sm:mt-16 sm:mb-28">
            <div className="overflow-hidden rounded-[36px] border border-black/6 bg-white shadow-soft">
              {/* Gradient top accent */}
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
                  <a
                    href={dept.ctaHref}
                    className="btn-primary whitespace-nowrap"
                  >
                    {dept.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    onClick={goBack}
                    className="btn-secondary whitespace-nowrap"
                  >
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
