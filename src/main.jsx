import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Remove the global preloader once React has rendered
const preloader = document.getElementById('global-preloader');
if (preloader) {
  // Small delay to ensure smooth transition right after initial mount
  setTimeout(() => {
    preloader.classList.add('hidden');
    // Remove from DOM entirely after the 500ms CSS fade-out completes
    setTimeout(() => preloader.remove(), 500);
  }, 100);
}
