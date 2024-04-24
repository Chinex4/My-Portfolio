import React from 'react'
import SocialLink from './SocialLink'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const SocialLinks = () => {
    return (
        <div className='md:absolute md:-bottom-14 lg:-bottom-8 space-x-4 z-10 flex'>
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
    )
}

export default SocialLinks
