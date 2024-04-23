import React from 'react'

const navItems = ["Home", "About", "Projects", "Contact"]

const NavBar = ({...props}) => {
    return (
        <nav {...props}>
            <ul className='md:flex md:space-x-10 md:space-y-0 space-y-3'>
                {
                    navItems.map(item => <li key={item}><a href={`#${item.toLowerCase()}`} className='hover:text-[#67D3DF] transition-all duration-300 ease-in-out'>{item}</a></li>)
                }
            </ul>
        </nav>
    )
}

export default NavBar
