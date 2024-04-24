import React, { useState, useEffect } from 'react'
import Technology from './Technology'
import { technologies } from '../../util/data'
import SectionHeading from '../SectionHeading'

const About = () => {
    
    return (
        <section id='about' className='px-4 py-6 md:px-28 mt-[2rem] md:mt-[7rem] text-[#f5f5f5]'>
            <SectionHeading>
                About Me
            </SectionHeading>

            <div className='mt-10 space-y-8 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-10'>
                <div className='lg:w-[100rem] md:text-lg text-justify space-y-4'>
                    <p>
                        <span className='text-xl md:text-3xl font-medium'>H</span>ello there! I'm <span className='text-[#67D3DF] font-medium'>Chinaza</span>, a Frontend Developer with a talent for creating visually appealing, minimalistic and seamless web experiences in order to meet users needs and solve their problems.
                    </p>
                    <p>
                        I enjoy Frontend development and working with React, but it wasn't always like that. I went through a 2-year Information Technology program and learned nothing about web development. I didn't even how to structure HTML codes until my sophmore year in the university, but once I discovered Frontend development I immediately fell in love. Through hours and months of studying and practicing, leveraging courses online and other e-learning material, I was eventually able to self-tutor myself into learning some frontend Technologies including: HTML, CSS, Javacript.
                    </p>
                    <p>
                        In recent times I have been working with ReactJS (a Javascript library) to build amazing user interfaces and experience. I am currently a React Frontend Developer.
                    </p>
                    <p>
                        Outside of coding, I enjoy simple pleasures like; Music - It's relaxing and serves as a source of inspiration throughout my creative journey, Watching movies - most of which are pretty impacting, I also love playing games of diffenrent sorts; Chess, Video games and more.
                    </p>
                    <p>
                        Here are a few technologies I work with <span className='lg:hidden'>👇</span> <span className='hidden lg:inline'>👉</span>
                    </p>
                </div>
                <div className=''>
                    <div className='w-full md:w-[60%] lg:w-[80%] mx-auto flex justify-center content-start items-center flex-wrap gap-4'>
                        {
                            technologies.map(({text, Icon, color}) => {
                                return (
                                    <Technology color={color} Icon={Icon} key={text}>
                                        {text}
                                    </Technology>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
