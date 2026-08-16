import { useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import HomePage from '../FrontPage';
import { JoinPage } from './pages/JoinPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { DepartmentDetailPage } from './pages/DepartmentDetailPage';
import { IntroSplash } from './components/IntroSplash';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
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
        <Route path="/events/:slug" element={<EventDetailPage />} />
        <Route path="/departments/:slug" element={<DepartmentDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
