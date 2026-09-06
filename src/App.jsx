import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import HomePage from '../FrontPage';
import { JoinPage } from './pages/JoinPage';
import { IntroSplash } from './components/IntroSplash';

/* ── Per-event page imports ──────────────────────────────────────────── */
import { XXY } from './pages/events/XXY';
import { QZH } from './pages/events/QZH';
import { DaXiang } from './pages/events/DaXiang';
import { QuanBian } from './pages/events/QuanBian';
import { BoShu } from './pages/events/BoShu';

/* ── Per-department page imports ─────────────────────────────────────── */
import { XiangSheng } from './pages/departments/XiangSheng';
import { WenHua } from './pages/departments/WenHua';
import { BianLun } from './pages/departments/BianLun';
import { HuaWenBan } from './pages/departments/HuaWenBan';
import { YaoLanShou } from './pages/departments/YaoLanShou';
import { ShengXun } from './pages/departments/ShengXun';
import { SheFu } from './pages/departments/SheFu';

/* ── Slug → component maps ───────────────────────────────────────────── */

/* The keys are the public URL slugs and must keep matching the `slug` fields in
   src/data/siteData.js — renaming a component here is safe, renaming a key is
   not, because it changes /events/:slug and /departments/:slug. */

const EVENT_PAGES = {
  'event-01': XXY,        // 新血营
  'event-02': QZH,        // 全中华
  'event-03': DaXiang,    // 大型相声观摩会
  'event-04': QuanBian,   // 全辩
  'event-05': BoShu,      // 博书有约
};

const DEPT_PAGES = {
  'dept-01': XiangSheng,  // 相声组
  'dept-02': WenHua,      // 文化组
  'dept-03': BianLun,     // 辩论组
  'dept-04': HuaWenBan,   // 华文班
  'dept-05': YaoLanShou,  // 摇篮手
  'dept-06': ShengXun,    // 升讯团
  'dept-07': SheFu,       // 社服组
};

/* ── Dispatchers ─────────────────────────────────────────────────────── */

function EventDispatcher() {
  const { slug } = useParams();
  const Page = EVENT_PAGES[slug];
  return Page ? <Page /> : <Navigate to="/" replace />;
}

function DeptDispatcher() {
  const { slug } = useParams();
  const Page = DEPT_PAGES[slug];
  return Page ? <Page /> : <Navigate to="/" replace />;
}

/* ── ScrollToTop ─────────────────────────────────────────────────────── */

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      let attempts = 0;
      const maxAttempts = 15;

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 50);
        }
      };

      const timer = setTimeout(tryScroll, 50);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      {/*
        IntroSplash sits above everything. It detects fresh loads via the
        Navigation Timing API and unmounts itself from the DOM when done.
        All routes below are already rendered from first paint — the overlay
        simply covers them until it completes.
      */}
      <IntroSplash />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/events/:slug" element={<EventDispatcher />} />
        <Route path="/departments/:slug" element={<DeptDispatcher />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
