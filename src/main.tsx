import { StrictMode } from 'react'; // Import StrictMode for additional checks
import { createRoot } from 'react-dom/client'; // Import createRoot API
import App from './App.tsx'; // Import main App component
import './index.css'; // Import global styles

// Create root element and render app with StrictMode
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);