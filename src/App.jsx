import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../FrontPage';
import { JoinPage } from './pages/JoinPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { DepartmentDetailPage } from './pages/DepartmentDetailPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/events/:slug" element={<EventDetailPage />} />
      <Route path="/departments/:slug" element={<DepartmentDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
