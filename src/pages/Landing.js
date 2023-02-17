import React from 'react'
import { motion } from 'framer-motion'

function Landing() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div id="landing">
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