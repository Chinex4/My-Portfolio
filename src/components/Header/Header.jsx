import React, { useState } from 'react'
import HamBurger from './HamBurger'
import NavBar from './NavBar'

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const handleMenuShow = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    let mobileMenuClass = "mt-4";
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
        <header className='fixed top-0 w-full text-[#f5f5f5] p-4 md:px-28 flex flex-col bg-[#121212] z-20'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl md:text-3xl font-bold text-[#67D3DF]'><a className='' href="#home">Chinaza.</a></h1>
                <HamBurger onClick={handleMenuShow} className="md:hidden text-[#67D3DF]">
                    {icon}
                </HamBurger>

                <NavBar className="hidden md:block text-[1.2rem]" />
            </div>

            <NavBar className={mobileMenuClass} />

        </header>

    )
}

export default Header
