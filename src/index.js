import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalCSS from './global.styles.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GlobalCSS />
  </React.StrictMode>
);
