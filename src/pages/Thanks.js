import React from 'react'
import { motion } from 'framer-motion'

function Thanks() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>Thank You For Taking This Survey!</motion.div>
    )
}

export default Thanks