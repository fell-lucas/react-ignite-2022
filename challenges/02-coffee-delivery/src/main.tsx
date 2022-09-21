import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.createElement('div');
root.setAttribute('id', 'root');

createRoot(document.getElementById('root') ?? root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
