import React from "react";
import { HomePage, VillasPage, AboutPage, ContactPage } from './pages/index.pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/**vlv-villages version 1.04 - App js - Features:
 * 
 *   --> Implementing routing.
 * 
 * Note: pending to implemnt the navigation by 
 * building each page in detail
 */

function App() {
  return (
    <>
      <h2>VLV - luxury villages</h2>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/villas-page' element={<VillasPage />}/>
          <Route path='/about-page' element={<AboutPage />}/>
          <Route path='/contact-page' element={<ContactPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
