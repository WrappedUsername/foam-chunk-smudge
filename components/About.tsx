import React from 'react'
import gold from '../public/goldAccent.png'

const About = () => {
  return (
    <div className='flex flex-col h-fit w-full float-right bg-[#080808] rounded-lg justify-center items-center mb-4 '>
    <img className="flex h-80 w-full my-2 py-2 mx-2 px-2" src={gold.src} alt="background" />
     <span className="text-yellow-600 text-2xl font-normal my-2 py-2 mx-2 px-2">
      About this project
     </span>
    </div>
  )
}

export default About