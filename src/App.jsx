import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import HomePage from '../FrontPage';
import { JoinPage } from './pages/JoinPage';
import { IntroSplash } from './components/IntroSplash';

/* ── Per-event page imports ──────────────────────────────────────────── */
import { Event01Page } from './pages/events/Event01Page';
import { Event02Page } from './pages/events/Event02Page';
import { Event03Page } from './pages/events/Event03Page';
import { Event04Page } from './pages/events/Event04Page';
import { Event05Page } from './pages/events/Event05Page';

/* ── Per-department page imports ─────────────────────────────────────── */
import { Dept01Page } from './pages/departments/Dept01Page';
import { Dept02Page } from './pages/departments/Dept02Page';
import { Dept03Page } from './pages/departments/Dept03Page';
import { Dept04Page } from './pages/departments/Dept04Page';
import { Dept05Page } from './pages/departments/Dept05Page';
import { Dept06Page } from './pages/departments/Dept06Page';
import { Dept07Page } from './pages/departments/Dept07Page';

/* ── Slug → component maps ───────────────────────────────────────────── */

const EVENT_PAGES = {
  'event-01': Event01Page,
  'event-02': Event02Page,
  'event-03': Event03Page,
  'event-04': Event04Page,
  'event-05': Event05Page,
};

const DEPT_PAGES = {
  'dept-01': Dept01Page,
  'dept-02': Dept02Page,
  'dept-03': Dept03Page,
  'dept-04': Dept04Page,
  'dept-05': Dept05Page,
  'dept-06': Dept06Page,
  'dept-07': Dept07Page,
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
