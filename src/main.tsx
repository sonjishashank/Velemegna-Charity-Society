import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import 'leaflet/dist/leaflet.css';
// import './theme/colors.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00A3FF" />
      </Helmet>
      <App />
    </HelmetProvider>
  </StrictMode>
);