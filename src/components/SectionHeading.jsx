import React from 'react'

const SectionHeading = ({ children }) => {
    return (
        <div>
            <h1 className='text-4xl md:text-6xl font-sriracha lg:text-8xl text-center font-semibold md:font-medium lg:font-bold font-sans'>
                {children}
            </h1>
        </div>
    )
}

export default SectionHeading
