import React from 'react'
import { ethers } from "ethers";
import { address, abi, scanLink } from "../context/constants";

declare global {
  interface Window {
    ethereum: any;
  }
}

const Mint = ({ accounts, setAccounts }: any) => {
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
  /**if (typeof window !== 'undefined') {

      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      // get contract instance
      //const contract = new ethers.Contract(address, abi, signer);

      //const tokenIdCounter = contract._tokenIdCounter();
      //const count = ethers.utils.formatUnits(tokenIdCounter, 0);

      //console.log("minting:", count);
  }*/
  return (
    <>
      <div className='flex flex-col w-full text-center float-right mb-4'>
        {isConnected ? <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-green-600 text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-[#232424] px-8 py-3 cursor-pointer">
          {"Connected: " +
            String(accounts).substring(0, 6) +
            "..." +
            String(accounts).substring(38)}</span>
          : <span
            className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-green-600 text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-[#232424] px-8 py-3 cursor-pointer"
            onClick={connectAccount}>connect</span>}
      </div>
      <div className='flex flex-col w-full h-96 bg-gray-300 rounded-lg mb-4'>Mint</div>
    </>
  )
}

export default Mint