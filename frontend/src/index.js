import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context';  // Certifique-se de importar o AuthProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>  {/* O AuthProvider deve envolver o App */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
