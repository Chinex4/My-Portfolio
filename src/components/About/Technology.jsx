import React from 'react'

const Technology = ({ children, Icon, color }) => {
    return (
        <div className='flex space-x-3 items-center border border-[#67D3DF] px-4 py-3 rounded cursor-pointer transition-all duration-300 ease-linear hover:translate-y-[-10%]'>
            <Icon size={35} color={color} />
            <span className='md:text-xl'>{children}</span>
        </div>
    )
}

export default Technology
