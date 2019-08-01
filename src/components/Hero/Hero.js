import React from 'react';
import styles  from './Hero.module.scss';
import Button from '../Button/Button';

const Hero = () => (
    <>
    <div className={styles.wrapper}>
        <div className={styles.logo}>
        <img 
            className={styles.image}
            src='https://i.postimg.cc/BbSkQnQ6/rebusuje-logo.png'  
            alt='rebusuje logo'
        />
        <div className={styles.signature}>
        <img  src='https://i.postimg.cc/R0CgHDxs/j-mis.jpg' alt='jarosław miś' />

        </div>
        </div>
       
       <Button>zagraj</Button>
    </div>
    </>
);

export default Hero;
