import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TweetsMasterPage from './pages/TweetsMasterPage';
import './index.css';
import App from './App.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<TweetsMasterPage />} />
    </Route>
  </Routes>
</BrowserRouter>

)
