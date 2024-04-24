import React from 'react'
import { motion } from 'framer-motion'

const SectionHeading = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeIn', type:'tween' }}
        >
            <h1 className='text-4xl md:text-6xl font-sriracha lg:text-8xl text-center font-semibold md:font-medium lg:font-bold'>
                {children}
            </h1>
        </motion.div>
    )
}

export default SectionHeading
