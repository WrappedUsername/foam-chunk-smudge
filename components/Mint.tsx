import React, { useRef } from 'react'
import neon from '../public/neonGreenAccent.png'
import { ethers } from "ethers";
import { address, abi, scanLink } from "../context/constants";
import { motion } from 'framer-motion';
import { Animations } from '../variants/animations';
import { shortenAddress } from "../utils/shortenAddress";

declare global {
  interface Window {
    ethereum: any;
  }
}

const Mint = ({ accounts, setAccounts }: any) => {
  const scrollRef = useRef(null)
  const isConnected = Boolean(accounts[0]);

  const connectAccount = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccounts(accounts);
    }
  }

  /**
   * typeof won't try to evaluate "window", it will only try to get its type, 
   * in our case in Node.js: "undefined"
   */
  // get web3 provider
  const mintNFT = async () => {
    if (typeof window !== 'undefined') {
      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      // get contract instance
      const contract = new ethers.Contract(address, abi, signer);

      /**const wethPolygonContract = new ethers.Contract('0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
        ['function approve(address spender, uint256 amount)',
        'function transferFrom(address sender, address recipient, uint256 amount)'], signer);
      const wethTx = await wethPolygonContract.transferFrom(
        "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        "0x3Bfa52b2d73Ce7a9a7A45Eb9Fe35c1d9199931dd",
        "50000000000000000",
        { gasLimit: 3000000 });
      await wethTx.wait();*/

      const price = ethers.utils.formatUnits("50000000000000000", 0);
      const response = await contract.safeMint(
        { value: price, gasLimit: 1000000 }
      );
      console.log("response: ", response);
    } else (error: any) => {
      (console.error("error: ", error));
    }
  }

  return (
    <div ref={scrollRef}>
      <motion.div
        className='flex flex-col h-fit w-full float-right bg-[#080808] rounded-lg justify-center items-center mb-4 '
        initial="hidden"
        whileInView="visible"
        variants={scrollRef ? Animations.FadeLeft : Animations.FadeLeft}
      >
        <img className="flex h-72 w-full rounded-lg my-2 py-2 mx-2 px-2" src={neon.src} alt="background" />
        <h1 className='text-[#98ff6f] text-3xl text-center mb-2 mt-2'>Foam Chunk Smudge Mint Function</h1>
        <a
            href={scanLink}
            className="text-[#98ff6f] w-1/2 font-light justify-center text-center text-lg mb-2 mt-2 mx-2 px-2"
          >
            smart contract {shortenAddress(address)}
          </a>
        <span
          className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-[#ff8a73] text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-gray-200 px-8 py-4 mb-4 md:mb-8 mt-4 cursor-pointer"
          onClick={mintNFT}
        >
          Mint
        </span>
        <div className='flex flex-col justify-center items-center md:hidden mt-4 mb-8'>
          {isConnected ? <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-[#ff8a73] text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-gray-200 px-8 py-4 cursor-pointer">
            {"Connected: " +
              String(accounts).substring(0, 6) +
              "..." +
              String(accounts).substring(38)}</span>
            : <span
              className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-[#ff8a73] text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-[#3a2a23] px-8 py-4 cursor-pointer"
              onClick={connectAccount}>connect</span>}
        </div>
      </motion.div>
    </div>
  )
}

export default Mint