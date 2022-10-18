import React, { useRef } from 'react'
import unnamed from '../public/unnamed.jpg'
import logo192 from "../public/logo192.jpg"
import { FaDiscord, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion'
import { discordLink, githubLink } from '../context/constants';
import { Animations } from '../variants/animations'

const Footer = () => {
  const scrollRef = useRef(null) // <--- this is the ref

  return (
    <div ref={scrollRef}> 
    <motion.div
     className='flex flex-col h-fit w-full float-right bg-[#080808] rounded-lg justify-center items-center mb-4 '
     initial="hidden"
     whileInView="visible"
     variants={scrollRef ? Animations.FadeLeft : Animations.FadeLeft}
     >
      <img className="flex h-72 w-full my-2 py-2 mx-2 px-2" src={unnamed.src} alt="background" />
      <div className="flex flex-col w-full justify-between items-center mb-2 py-2">
        <Link href="/">
          <img className="w-3/4 h-3/4 md:w-80 md:h-80 float-left lg:w-60 lg:h-60 cursor-pointer" src={logo192.src} alt="logo" />
        </Link>
        <p className="text-white flex text-sm justify-center items-center text-gradient my-4 mx-4">
          &copy; {new Date().getFullYear()} WrappedUsername. All rights
          reserved.
        </p>
        <a
          href={discordLink}
          className="text-white md:flex float-right text-2xl justify-center items-center mx-4 my-4 cursor-pointer"
        >
          <FaDiscord />
        </a>
      </div>
    </motion.div>
    </div>
  )
}

export default Footer