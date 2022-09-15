import React from 'react'
import Link from 'next/link'
import bg from '../public/bg.png'
import neon from '../public/neonGreenAccent.png'

declare global {
    interface Window {
      ethereum: any;
    }
  }

const Header = ({ accounts, setAccounts }: any) => {
    const isConnected = Boolean(accounts[0]);

    const connectAccount = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccounts(accounts);
      }
    }

    return (
        
        <div className="relative flex h-screen flex-col justify-center mb-4 py-4">
          <img className="fixed h-screen w-screen" src={neon.src} alt="logo" />
            <img className="fixed h-screen w-screen" src={bg.src} alt="logo" />
            <Link href="/">
                <h1 className='md:fixed md:w-7/12 md:h-1/2 mx-4 text-center items-center font-bold gradient-bg-site bg-clip-text text-transparent text-6xl cursor-pointer'>
                    Foam Chunk Smudge
                </h1>
            </Link>
            <div className='md:fixed flex flex-col md:w-7/12 h-1/4 justify-center items-center mt-4 px-4'>
        {isConnected ? <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-[#ff8a73] text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-gray-200 px-8 py-3 cursor-pointer">
          {"Connected: " +
            String(accounts).substring(0, 6) +
            "..." +
            String(accounts).substring(38)}</span>
          : <span
            className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-[#ff8a73] text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-[#3a2a23] px-8 py-3 cursor-pointer"
            onClick={connectAccount}>connect</span>}
      </div>
        </div>
    )
}

export default Header