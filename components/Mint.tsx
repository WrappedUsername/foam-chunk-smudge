import React from 'react'
import neon from '../public/neonGreenAccent.png'
//import { ethers } from "ethers";
//import { address, abi, scanLink } from "../context/constants";

/**declare global {
  interface Window {
    ethereum: any;
  }
}*/

const Mint = ({ accounts, setAccounts }: any) => {
  /**const isConnected = Boolean(accounts[0]);

  const connectAccount = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccounts(accounts);
    }
  }*/ // This is the code from the Header component, which is not needed here

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
    <div className='flex flex-col h-fit w-full float-right bg-[#080808] rounded-lg justify-center items-center mb-4 '>
    <img className="flex h-80 w-full rounded-lg my-2 py-2 mx-2 px-2" src={neon.src} alt="background" />
     <span className="text-green-300 text-2xl font-normal my-2 py-2 mx-2 px-2">
      Mint
     </span>
    </div>
  )
}

export default Mint