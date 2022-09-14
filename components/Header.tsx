import React from 'react'
import Link from 'next/link'

const Header = () => {

    return (
        <div className="relative flex h-screen flex-col justify-center mb-2 py-2">
            <Link href="/">
                <h1 className='md:fixed md:w-7/12 mx-4 text-center items-center font-bold gradient-bg-site bg-clip-text text-transparent text-6xl cursor-pointer'>
                    Your project name here
                </h1>
            </Link>
        </div>
    )
}

export default Header