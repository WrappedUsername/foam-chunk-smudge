import React from 'react'
import Link from 'next/link';

const Header = () => {
    return (
        <Link href="/">
            <h1 className='w-screen text-center items-center font-bold gradient-bg-site bg-clip-text text-transparent text-9xl cursor-pointer'>
                minting dapp template
            </h1>
        </Link>
    )
}

export default Header