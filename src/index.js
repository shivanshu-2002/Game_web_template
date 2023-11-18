import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Use createRoot directly
root.render(
  
      <App />

);

reportWebVitals();
