import React from 'react'
import { projects } from '../../util/data'
import ProjectCard from './ProjectCard'
import SectionHeading from '../SectionHeading'

const Projects = ({  }) => {
    return (
        <section id='projects' className='px-4 py-6 md:px-20 lg:px-28 mt-[2rem] md:mt-[7rem] text-[#f5f5f5] space-y-4 md:space-y-20'>
            <SectionHeading>
                Projects
            </SectionHeading>
            <div className='flex flex-col md:flex-row gap-4 lg:gap-10 md:flex-wrap justify-center md:justify-between lg:justify-center'>
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
