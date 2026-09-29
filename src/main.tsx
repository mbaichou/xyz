import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TweetsMasterPage from './pages/TweetsMasterPage';
import { StrictMode } from 'react';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';
import App from './App.tsx';
import TweetDetailsPage from './pages/TweetDetailsPage';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<TweetsMasterPage />} />
          <Route path="tweets/:id" element={<TweetDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>

)