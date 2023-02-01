import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VLVillagesProvider } from './context';

/**vlv-villages version 1.04 - index js - Features:
 * 
 *   --> Wrapping with App with the 
 *       VLVillagesProvider
 * 
 * Note: pending to implemnt the navigation by 
 * building each page in detail
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VLVillagesProvider>
      <App />
    </VLVillagesProvider>
  </React.StrictMode>
);

