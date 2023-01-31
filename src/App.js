import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Survey from './pages/Survey';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route index element={<Landing />} />
          <Route path="Survey" element={<Survey />} />
          <Route path="About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
