import React from 'react'
import chinex from '../../assets/1.png'
import Button from './Button'
import SocialLink from './SocialLink'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaDownload, FaMessage, FaX } from 'react-icons/fa6'

const Introduction = () => {
    return (
        <section id='home' className='px-4 py-6 md:px-28 pt-[6rem] md:pt-[7rem] text-[#f5f5f5] flex flex-col items-center md:flex-row gap-10 md:gap-24 '>
            <div className='md:w-[40rem] space-y-6 md:space-y-8'>
                <div className='space-y-2'>
                    <h1 className='text-4xl md:text-[3rem] lg:text-[4rem] md:leading-[4rem] lg:leading-[5rem] font-bold'>
                        Hi, I'm Chinaza Okuefuna
                    </h1>
                    <h3 className='font-bold text-xl md:text-3xl'>
                        <span className='text-[#67D3DF]'>Frontend</span> Developer
                    </h3>
                </div>
                <div className='space-y-6'>
                    <p className='md:text-xl'>
                        I'm a Frontend React Developer, I create visually appealing user interfaces and experience to meet users' needs. Get to know about me and what I do as you scroll
                    </p>
                    <div className='space-x-6 flex justify-center md:justify-start'>
                        <Button href={"mailto:chinazaokuefuna4@gmail.com"}><span>Get In Touch</span> <FaMessage /></Button>
                        <Button href={"mailto:chinazaokuefuna4@gmail.com"}><span>Resume</span> <FaDownload /></Button>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-[24rem] md:w-[26rem] rounded-full' src={chinex} alt={chinex} />
            </div>
            <div className='md:absolute md:bottom-1 lg:bottom-8 space-x-4 z-10 flex'>
                <SocialLink href={"https://github.com/chinex4"}>
                    <FaGithub size={20} />
                </SocialLink>
                <SocialLink href={"https://linkedin.com/in/chinaza-okuefuna"}>
                    <FaLinkedinIn size={20} />
                </SocialLink>
                <SocialLink href={"https://x.com/heischinex"}>
                    <FaX size={20} />
                </SocialLink>
            </div>

        </section>
    )
}

export default Introduction
