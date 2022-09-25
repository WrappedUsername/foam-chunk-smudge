import React, { useRef } from 'react';
import styles from '../styles/rocket.module.scss';

const Rocket = () => {
    const scrollRef = useRef(null)
  
  return (
    <div ref={useRef}>
        <span className={scrollRef ? styles.animateRocket : styles.fadeOut}>
          🚀
        </span>
    </div>
  )
}

export default Rocket