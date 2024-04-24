import React from 'react'
import { motion } from 'framer-motion'

const navItems = ["Home", "About", "Projects", "Contact"]

const fadeIn = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { 
            delay: 1, 
            duration: 1.5, 
            type: 'tween' 
        }
    }
}

const NavBar = ({ ...props }) => {
    return (
        <motion.nav
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            

            {...props}>
            <ul className='md:flex md:space-x-10 md:space-y-0 space-y-3'>
                {
                    navItems.map(item => <li
                        key={item}
                    >
                        <motion.a
                            whileHover={{ color: '#67D3DF' }}
                            transition={{ duration: 0.2 }}
                            href={`#${item.toLowerCase()}`}
                            className='md:text-xl transition-all ease-in-out'>
                            {item}
                        </motion.a>
                    </li>)
                }
            </ul>
        </motion.nav>
    )
}

export default NavBar
