import React from 'react'
import { motion } from 'framer-motion'
import NavbarComponent from '../components/NavbarComponent'
import Footer from '../components/Footer'

function Thanks() {
    return (
        <>
            <NavbarComponent />
            <hr className='thank-hr' />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="thank-you">
                <h1>Thank You For Taking This Survey!</h1>
                <a href="/Home" className="thanks-btn">Home Page</a>
            </motion.div>
            <hr className='you-hr' />
            <Footer />
        </>

    )
}

export default Thanks