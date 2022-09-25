import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/rocket.module.scss';

const Rocket = () => {
    const scrollRef = useRef(null)
    const { ref: aboutSectionRef, inView: aboutSectionIsVisible } = useInView();
  
  return (
    <div ref={aboutSectionRef}>
        <span className={aboutSectionIsVisible ? styles.animateRocket : styles.fadeOut}>
          🚀
        </span>
    </div>
  )
}

export default Rocket