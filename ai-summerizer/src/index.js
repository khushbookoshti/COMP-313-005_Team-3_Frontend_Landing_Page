import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Root Rendering Setup: This code initializes the rendering of the main application.
// It creates a root instance and renders the <App /> component inside it, ensuring that it's wrapped in <React.StrictMode>.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
