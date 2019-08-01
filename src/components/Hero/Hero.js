import React from 'react';
import styles  from './Hero.module.scss';

const Hero = () => (
    <>
    <div className={styles.wrapper}>
       <img 
            className={styles.logo}
            src='https://i.postimg.cc/BbSkQnQ6/rebusuje-logo.png'  
            alt='rebusuje logo'/>
       <button>graj</button>
    </div>
    </>
);

export default Hero;
