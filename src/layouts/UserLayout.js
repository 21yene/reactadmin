import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../home/components/Navbar'; 
import Footer from '../home/components/Footer';
import About from '../home/pages/About';
import Home from '../home/pages/Home';
import Contact from '../home/pages/Contact';
import Photos from '../home/pages/Photos';
import Donate from '../home/pages/Donate';

function UserLayout() {
  return (
    <div id="root">
      <Navbar /> 
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default UserLayout;
