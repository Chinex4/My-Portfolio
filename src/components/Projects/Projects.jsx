import React from 'react'
import { projects } from '../../util/data'
import ProjectCard from './ProjectCard'

const Projects = ({  }) => {
    return (
        <section id='projects' className='px-4 py-6 md:px-28 mt-[2rem] md:mt-[7rem] text-[#f5f5f5] space-y-4 md:space-y-20'>
            <div>
                <h1 className='text-4xl md:text-6xl lg:text-8xl text-center font-semibold md:font-medium lg:font-bold font-sans'>
                    Projects
                </h1>
            </div>
            <div className='flex flex-col md:flex-row gap-4 md:gap-10 md:flex-wrap justify-center'>
                {
                    projects.map(project => {
                        return <ProjectCard key={project.title} {...project} />
                    })
                }
            </div>
        </section>
    )
}

export default Projects
