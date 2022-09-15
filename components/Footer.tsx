import React from 'react'
import bg from '../public/bg.png'

const Footer = () => {
  return (
    <div className='flex flex-col h-fit w-full float-right bg-[#080808] rounded-lg justify-center items-center mb-4 '>
    <img className="flex h-80 w-full rounded-lg my-2 py-2 mx-2 px-2" src={bg.src} alt="background" />
     <span className="text-yellow-400 text-2xl font-normal my-2 py-2 mx-2 px-2">
      Footer
     </span>
    </div>
  )
}

export default Footer