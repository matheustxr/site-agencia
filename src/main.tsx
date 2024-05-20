import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router ,Routes, Route, } from "react-router-dom";


import ErrorPage from './pages/Error/ErrorPage';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Serviços from './pages/Serviços/Serviços';
import Trabalhos from './pages/Trabalhos/Trabalhos';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

import './global.css'

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
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/servicos" element={<Serviços />}/>
          <Route path="/nossos-trabalhos" element={<Trabalhos />}/>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <BackToTop/>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
)
