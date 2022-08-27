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

const Header = () => {
    const { ref: headerSectionRef, inView: headerSectionIsVisible } = useInView();

    /**
     * typeof won't try to evaluate "window", it will only try to get its type, 
     * in our case in Node.js: "undefined"
     */
    // get web3 provider
    if (typeof window !== 'undefined') {

        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        // get contract instance
        //const contract = new ethers.Contract(address, abi, signer);

        //const tokenIdCounter = contract._tokenIdCounter();
        //const count = ethers.utils.formatUnits(tokenIdCounter, 0);

        //console.log("minting:", count);
    }

    return (
        <Link href="/">
            <div ref={headerSectionRef} className={headerSectionIsVisible ? styles.fadeIn : styles.fadeOut}>
                <div className="flex h-screen flex-col justify-center mb-2 py-2">
                    <h1 className='fixed w-screen text-center items-center font-bold gradient-bg-site bg-clip-text text-transparent text-9xl cursor-pointer'>
                        Your project name here
                    </h1>
                </div>
            </div>
        </Link>
    )
}

export default Header