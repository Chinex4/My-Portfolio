import React from 'react'

const SocialLink = ({ children, href }) => {
    return (
        <a className='p-3 ring-1 ring-[#67D3DF] rounded-full hover:bg-[#67D3DF] hover:text-[#121212] transition-all duration-500' href={href}>
            {children}
        </a>
    )
}

export default SocialLink
