import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/reset.css';
import './styles/normalize.css';
import './index.css';

import AppRouter from './AppRouter.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
