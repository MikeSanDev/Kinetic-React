import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import Footer from './components/Footer';
import Survey from './pages/Survey';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="Landing" element={<Landing />} /> */}
          <Route path="Survey" element={<Survey />} />
          <Route path="About" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
