import React from 'react';
import styles  from './Hero.module.scss';
import Button from '../Button/Button';

const Hero = () => (
    <>
        <header className={styles.wrapper}>
		    <div className={styles.border}>
			    <div className={styles.logo}>
				    <img src='https://i.postimg.cc/prPwWhN9/rebusuje-logo-sign.png' alt='' />
			    </div>
		    </div>
            <Button to='/gallery' value={'rozwiąz pierwszy rebus'}/>
        </header>

    </>


);

export default Hero;