import React, { useState } from 'react'
import HamBurger from './HamBurger'
import NavBar from './NavBar'
import { motion } from 'framer-motion'

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const handleMenuShow = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    let mobileMenuClass = "mt-4 md:hidden";
    let icon;

    if (!menuIsOpen) {
        mobileMenuClass += " hidden"
        icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    } else {
        mobileMenuClass += " block"
        icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

    }


    return (
        <motion.header
            initial={{ y: -500, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, type: 'tween' }}
            className='fixed top-0 w-full text-[#f5f5f5] p-4 md:px-28 flex flex-col bg-[#121212] z-20'>
            <div className='flex items-center justify-between'>
                <motion.h1
                    whileHover={{ scale: 1.1 }}
                    transition={{ ease: 'easeInOut', duration: 0.5 }}
                    className='text-2xl md:text-3xl font-bold text-[#67D3DF]'>
                    <a className='' href="#home">Chinaza.</a>
                </motion.h1>
                <HamBurger onClick={handleMenuShow} className="md:hidden text-[#67D3DF]">
                    {icon}
                </HamBurger>

                <NavBar className="hidden md:block text-[1.2rem]" />
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: 150, opacity: 1, backgroundColor: '#121212' }}
                transition={{duration: 0.5}}
                animate={{height: 0, opacity: 0}}
                className={`md:h-0 ${mobileMenuClass} mt-0`}>
            <NavBar className={mobileMenuClass} />
            </motion.div>

        </motion.header>

    )
}

export default Header
