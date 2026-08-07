import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../FrontPage';
import { JoinPage } from './pages/JoinPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { DepartmentDetailPage } from './pages/DepartmentDetailPage';

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
