import React, { useRef } from 'react'
import gold from '../public/goldAccent.png'
import { motion } from 'framer-motion'
import { Animations } from '../variants/animations'

const About = () => {
  const scrollRef = useRef(null) // <--- this is the ref

  return (
    <div ref={scrollRef}>
      <motion.div
        className='flex flex-col h-fit w-full float-right bg-[#080808] rounded-lg justify-center items-center mb-4 '
        initial="hidden"
        whileInView="visible"
        variants={scrollRef ? Animations.FadeLeft : Animations.FadeLeft}
      >
        <img className="flex h-72 w-full my-2 py-2 mx-2 px-2" src={gold.src} alt="background" />
        <span className="text-yellow-600 text-2xl font-normal text-gradient my-2 py-2 mx-2 px-2">
          About this project
        </span>
        <p className='text-base font-normal break-words text-gradient my-2 py-2 mx-2 px-2'>
          This project is a collection of 500 unique generative art pieces.
          Each piece is a unique combination of 5 different layers. The layers are:
        </p>
        <div className='text-base font-normal break-words text-gradient my-2 py-2 mx-2 px-2'>
        <li>Background</li>
        <li>Smudge Layer One</li>
        <li>Smudge Layer Two</li>
        <li>Accent Layer One</li>
        <li>Accent Layer Two</li>
        </div>
      </motion.div>
    </div>
  )
}

export default About