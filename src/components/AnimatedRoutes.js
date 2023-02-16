import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Survey from '../pages/Survey';
import About from '../pages/About';
import Thanks from '../pages/Thanks';
import NewSub from '../pages/NewSub';
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="Home" element={<Home />} />
                <Route index element={<Landing />} />
                <Route path="Survey" element={<Survey />} />
                <Route path="Thanks" element={<Thanks />} />
                <Route path="NewSub" element={<NewSub />} />
                <Route path="About" element={<About />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes