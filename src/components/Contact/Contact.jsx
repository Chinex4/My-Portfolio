import React from 'react'
import SectionHeading from '../SectionHeading'
import Button from '../Introduction/Button'
import SocialLink from '../Introduction/SocialLink'
import { FaMessage, FaGithub, FaLinkedinIn, FaX } from 'react-icons/fa6'

const Contact = () => {
    return (
        <section id='contact' className='px-4 py-6 md:px-28 mt-[2rem] md:mt-[7rem] text-[#f5f5f5] space-y-4 md:space-y-20'>
            <SectionHeading>
                Contact Me
            </SectionHeading>
            <div className='space-y-20'>
                <p className='text-lg md:text-xl text-center md:px-32 lg:px-52 md:leading-10'>
                    Let's collaborate and work together towards creating an amazing user interface and experience. Get in touch today, and let's explore how I can enhance your frontend development requirements. Reach out, and together, we'll bring to life something truly remarkable!
                </p>
                <div className='grid place-items-center gap-10'>
                    <Button width={'w-[11rem]'} href={"mailto:chinazaokuefuna4@gmail.com"}><span>Get In Touch</span> <FaMessage /></Button>
                    <div className='flex gap-6'>
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
                </div>

                <footer>
                    <p className='text-center md:text-lg tracking-wider'>
                        Copyright © 2024 Chinaza Favour Okuefuna.
                    </p>
                </footer>
            </div>
        </section>
    )
}

export default Contact
