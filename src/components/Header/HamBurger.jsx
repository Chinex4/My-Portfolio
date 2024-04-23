import React from 'react'

const HamBurger = ({ children, ...props }) => {
    return (
        <div className='border rounded-full grid place-items-center p-1 md:hidden border-[#67D3DF]'>
            <button {...props}>
                {children}
            </button>
        </div>

    )
}

export default HamBurger
