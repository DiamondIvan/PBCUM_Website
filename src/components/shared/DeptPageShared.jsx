/**
 * DeptPageShared.jsx
 *
 * Shared sub-components imported by every per-department detail page.
 * Keep this file stable — per-dept customisation lives in each
 * DeptXXPage.jsx, not here.
 */

import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── NotFoundDept ──────────────────────────────────────────────────── */

export function NotFoundDept() {
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

/* ─── InitialsAvatar ────────────────────────────────────────────────── */

/**
 * Fallback avatar that renders the first letter(s) of a name inside a
 * gradient circle, used when no photo URL is available.
 *
 * Props:
 *   name   — full display name (PLACEHOLDER text is replaced with '?')
 *   accent — Tailwind gradient string (e.g. dept.accent)
 */
export function InitialsAvatar({ name, accent }) {
  const initials = name
    .replace(/\[PLACEHOLDER\]/g, '?')
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
  return (
    <div
      className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent} text-sm font-semibold text-white shadow-sm`}
    >
      {initials}
    </div>
  );
}
