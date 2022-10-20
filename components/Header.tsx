import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import bg from '../public/bg.jpg'
import neon from '../public/neonGreenAccent.jpg'
import calender from '../public/calender.png'

declare global {
  interface Window {
    ethereum: any;
  }
}

const Header = ({ accounts, setAccounts }: any) => {
  const isConnected = Boolean(accounts[0]);
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const NFTCalender = 'https://nftcalendar.io/'

  const connectAccount = async () => {
    if (typeof window !== 'undefined') {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccounts(accounts);
    }
  }

  useEffect(() => {
    if (isConnected) {
      setWallet(accounts[0]);
    }
  }, [accounts]);

  const getCurrentWalletConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setAccounts(accounts);
        setWallet(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const addWalletListener = () => {
    if (typeof window !== 'undefined') {
      if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts: any) => {
          if (accounts.length > 0) {
            setAccounts(accounts);
            setWallet(accounts[0]);
            setStatus("👆🏽 Write a message in the text-field above.");
          } else {
            setAccounts([]);
            setWallet("");
            setStatus("🦊 Connect to Metamask using the connect button.");
          }
        });
      }
    }
  }

  useEffect(() => {
    addWalletListener();
    getCurrentWalletConnected();
  }, []);

  return (

    <div className="relative flex h-screen flex-col justify-center mb-4 py-4">
      <img className="fixed h-screen w-screen" src={neon.src} alt="logo" />
      <img className="fixed h-screen w-screen" src={bg.src} alt="logo" />
      <Link href="/">
        <h1 className='relative md:fixed md:w-7/12 h-fit md:h-1/2 mx-4 text-center items-center font-bold gradient-bg-site bg-clip-text text-transparent text-6xl'>
          Foam Chunk Smudge NFT
        </h1>
      </Link>
      <div className='md:fixed flex flex-col md:w-7/12 h-fit justify-center items-center mt-4 px-4'>
        {isConnected ? <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-[#ff8a73] text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-gray-200 px-8 py-3 cursor-pointer">
          {"Connected: " +
            String(accounts).substring(0, 6) +
            "..." +
            String(accounts).substring(38)}</span>
          : <span
            className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-[#ff8a73] text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-[#3a2a23] px-8 py-3 cursor-pointer"
            onClick={connectAccount}>Connect</span>}
      </div>

       <div className='md:fixed flex flex-row md:w-7/12 h-fit justify-center items-center mt-80 px-4'>
      <span className='flex flex-row justify-center items-center text-base font-italic text-left text-gradient my-2 py-2 mx-2 px-2'>
          as seen on
        </span>
        <a href={NFTCalender}>
        <img 
        className="flex flex-row float-right justify-center items-center h-24 w-28 shadow-[#ff8a73] shadow-lg rounded-lg cursor-pointer" 
        src={calender.src} 
        alt="logo" 
        />
        </a>
      </div>
    
    </div>
  )
}

export default Header