import React from 'react'

const Button = ({href, children, width}) => {
    return (
        <a href={href} className={`flex ${width} space-x-3 items-center ring-2 ring-[#67D3DF] px-6 py-3 rounded hover:bg-[#67D3DF] hover:text-[#121212] transition-all duration-500`}>{children}</a>
    )
}

export default Button
