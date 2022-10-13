import React, { useRef } from 'react'
import bg from '../public/bg.png'
import { motion } from 'framer-motion'
import { Animations } from '../variants/animations'

const RoadMap = () => {
  const scrollRef = useRef(null) // <--- this is the ref

  return (
    <div ref={scrollRef}>
      <motion.div
        className='flex flex-col h-fit w-full float-right bg-[#080808] rounded-lg justify-center items-center mb-4 '
        initial="hidden"
        whileInView="visible"
        variants={scrollRef ? Animations.FadeLeft : Animations.FadeLeft}
      >
        <img className="flex h-72 w-full rounded-lg my-2 py-2 mx-2 px-2" src={bg.src} alt="background" />
        <span className="text-red-500 text-2xl font-normal text-gradient my-2 py-2 mx-2 px-2">
          Roadmap
        </span>
        <div className="flex flex-col my-2 py-2 mx-2 px-2">
        <li className="mb-4 ml-4 text-green-400">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Q3 2022
          </time>
          <h3 className="text-lg font-normal text-gradient">
            Foam Chunk Smudge smart contract deployed to Polygon mainnet.
          </h3>
          <p
            className=" text-base font-normal break-words text-gray-500 dark:text-gray-400">
            Foam Chunk Smudge smart contract deployed to Polygon mainnet. I like to use REMIX IDE to 
            compile, deploy, and verify the smart contract, but when deploying to Polygon I verify 
            the smart contract with hardhat.
          </p>
        </li>
        <li className="mb-4 ml-4 text-purple-600">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Q3 2022
          </time>
          <h3 className="text-lg font-normal text-gradient">
            Foam Chunk Smudge minting DApp deployed to Vercel. 
          </h3>
          <p className="text-base font-normal break-words text-gray-500 dark:text-gray-400">
           The Foam Chunk Smudge minting DApp will be deployed to Vercel.
          </p>
        </li>
        <li className="mb-4 ml-4 text-red-600">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Beyond Q4 2022
          </time>
          <h3 className="text-lg font-normal text-gradient">
            Foam Chunk Smudge NFT Project Conclusion?
          </h3>
          <p className="text-base font-normal break-words text-gray-500 dark:text-gray-400">
            This NFT project was never intended to progress beyond anything more than a simple NFT art project,
            but if a demand for more develops, I am open to explore more possibilties for the project.
            I have already added much more functionality to the token than I originally intended, 
            so I am already exploring more possibilties. 
          </p>
        </li>
       
      </div>
      </motion.div>
    </div>
  )
}

export default RoadMap