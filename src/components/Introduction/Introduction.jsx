import React from 'react'
import chinex from '../../assets/1.png'
import Button from './Button'
import { motion } from 'framer-motion'

import { FaDownload, FaMessage, FaX } from 'react-icons/fa6'
import SocialLinks from './SocialLinks'
import { TypeAnimation } from 'react-type-animation'

const Introduction = () => {
    return (
        <section id='home' className='relative px-4 py-6 md:px-28 pt-[6rem] md:pt-[7rem] text-[#f5f5f5] flex flex-col items-center md:flex-row gap-10 md:gap-24 '>
            <motion.div
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1, type:'tween'}}
                className='md:w-[40rem] space-y-6 md:space-y-8'>
                <div className='space-y-2'>
                    <h1 className='text-[4rem] leading-[4.5rem] md:text-[3rem] lg:text-[5rem] md:leading-[4rem] lg:leading-[5rem] font-bold'>
                        Hi, I'm Chinaza Okuefuna
                    </h1>
                    <h3 className='font-bold text-[2rem] md:text-3xl'>
                        <span className='text-[#67D3DF]'>Frontend</span> Developer
                    </h3>
                </div>
                <div className='space-y-6'>
                    <p className='md:text-xl'>
                        <TypeAnimation 
                            splitter={str => str.split(/(?= )/)}
                            sequence={[
                                1000,
                                "I'm a Frontend React Developer, I create visually appealing user interfaces and experience to meet users' needs. Get to know about me and what I do as you scroll.",
                            ]}
                            speed={{type: 'keyStrokeDelayInMs', value: 200}}
                            omitDeletionAnimation={true}
                            // repeat={}
                        />
                        
                    </p>
                    <div className='space-x-6 flex justify-center md:justify-start'>
                        <Button href={"mailto:chinazaokuefuna4@gmail.com"}><span>Get In Touch</span> <FaMessage /></Button>
                        <Button href={"https://drive.google.com/file/d/1EaqGkJN3bDiyT1yB6ZB05jjMKXQ3LZ5B/view?usp=drive_link"}><span>Resume</span> <FaDownload /></Button>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: '100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{delay: 1, duration: 1}}
            >
                <img className='w-[24rem] md:w-[32rem] rounded-full' src={chinex} alt={chinex} />
            </motion.div>
            <SocialLinks />

        </section>
    )
}

export default Introduction
