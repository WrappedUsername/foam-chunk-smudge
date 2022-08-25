import React from 'react'
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/fader.module.scss';

const Header = () => {
    const { ref: headerSectionRef, inView: headerSectionIsVisible } = useInView();
    return (
        <Link href="/">
            <div ref={headerSectionRef} className={headerSectionIsVisible ? styles.fadeIn : styles.fadeOut}>
                <div className="flex h-screen flex-col justify-center mb-2 py-2">
                    <h1 className='fixed w-screen text-center items-center font-bold gradient-bg-site bg-clip-text text-transparent text-9xl cursor-pointer'>
                        minting dapp template
                    </h1>
                </div>
            </div>
        </Link>
    )
}

export default Header