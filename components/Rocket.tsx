import React, { useRef } from 'react';
import styles from '../styles/rocket.module.scss';

const Rocket = () => {
    const scrollRef = useRef(null)
  
  return (
    <div ref={scrollRef} >
        <span className={scrollRef ? styles.animateRocket : styles.animateRocket} >
          🚀
        </span>
    </div>
  )
}

export default Rocket