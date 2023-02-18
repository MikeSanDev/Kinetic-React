import React from 'react'
import { motion } from 'framer-motion'
import landing_vid from '../images/landing.mp4'

function Landing() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div id="landing">
                <video className="landing_vid" autoPlay loop muted cover>
                    <source src={landing_vid} type="video/mp4" />
                </video>
                <div className="landing-container">
                    <div className="landing-text">
                        <h1>Kinetic Footwear</h1>
                        <h4>Energy at your feet, power in your pocket.</h4>
                        <a href="/Home"><button className="normal">Home</button></a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Landing