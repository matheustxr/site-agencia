import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router ,Routes, Route, } from "react-router-dom";


import ErrorPage from './pages/Error/ErrorPage';
import Home from './pages/Home/Home';

import BackToTop from './components/BackToTop/BackToTop';
import Footer from './components/Footer/Footer';

import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <main className='bg-red-600 '>
        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer">
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <BackToTop/>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
)
