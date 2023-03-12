import React from "react";
import { HomePage, VillasPage, AboutPage, ContactPage } from './pages/index.pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/**vlv-villages version 4.00 - App js - Features:
 * 
 *   --> Clearing titles.
 * 
 * Note: pending to implemnt the navigation by 
 * building each page in detail
 */

function App() {
  return (
    <>
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
