import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../FrontPage';
import { JoinPage } from './pages/JoinPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
