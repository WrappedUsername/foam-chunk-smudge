import React from 'react'
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/fader.module.scss';
import { ethers } from "ethers";
import { address, abi, scanLink } from "../context/constants";

declare global {
    interface Window {
        ethereum: any;
    }
}

const Header = ({ accounts, setAccounts }: any) => {
    const { ref: headerSectionRef, inView: headerSectionIsVisible } = useInView();
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
        <div ref={headerSectionRef} className={headerSectionIsVisible ? styles.fadeIn : styles.fadeOut}>
            <div className="flex h-screen flex-col justify-center mb-2 py-2">
                <Link href="/">
                    <h1 className='fixed w-screen text-center items-center font-bold gradient-bg-site bg-clip-text text-transparent text-9xl cursor-pointer'>
                        Your project name here
                    </h1>
                </Link>
            </div>
            <div  >
                {isConnected ? <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-green-600 text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-[#232424] px-8 py-3 cursor-pointer">
                {"Connected: " +
              String(accounts).substring(0, 6) +
              "..." +
              String(accounts).substring(38)}</span>
                    : <span
                        className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-green-600 text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-[#232424] px-8 py-3 cursor-pointer"
                        onClick={connectAccount}>connect</span>}
            </div>
        </div>
    )
}

export default Header