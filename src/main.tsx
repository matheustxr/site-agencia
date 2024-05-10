import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router ,Routes, Route, } from "react-router-dom";


import ErrorPage from './pages/Error/ErrorPage';
import Home from './pages/Home/Home';

import BackToTop from './components/BackToTop/BackToTop';
import Footer from './components/Footer/Footer';

import './global.css'
import Header from './components/Header/Header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      {/* BACKGROUND ESTRELADO */}
      <div className="star-field z-[-10] ">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer">
        </div>
      </div>
      <main className='relative z-10'>
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<Home />}/>
          <Route path="/nossos-trabalhos" element={<Home />}/>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <BackToTop/>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
)
