import React from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ image, title, description, technologies, link }) => {
    return (
        <motion.a
            initial={{ x: 200, opacity: 0, scale:0 }}
            whileInView={{ x: 0, opacity: 1, scale:1 }}
            whileHover={{y: -20}}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100, ease: 'easeIn' }}
            href={link}
            className='w-[20rem] md:w-[25rem] lg:w-[24rem] rounded-lg flex flex-col transition-all duration-300 ease-linear bg-[#074b53cb] hover:shadow-xl hover:shadow-[#67d3df25]'>
            <span>
                <img src={image} className='rounded-t-lg' alt={title} />
            </span>
            <span className='px-4 py-6 md:py-4 md:px-4 lg:px-4 lg:py-6 space-y-4'>
                <h1 className='font-bold text-xl'>{title.toUpperCase()}</h1>
                <p className='text-lg'>{description}</p>
                <span className='flex gap-4 justify-center flex-wrap'>
                    {
                        technologies.map(techUsed => {
                            return <span className='px-4 py-2 rounded bg-[#093035]' key={techUsed}>
                                {techUsed}
                            </span>
                        })
                    }
                </span>
            </span>
        </motion.a>
    )
}

export default ProjectCard
