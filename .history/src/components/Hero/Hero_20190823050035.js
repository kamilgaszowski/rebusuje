import React from 'react';
import styles  from './Hero.module.scss';
import Button from '../Button/Button';

const Hero = ({...props}) => (
    <>
        <header className={styles.wrapper}>
		    <div className={styles.border}>
			    <div className={styles.logo}>
				    <img src='https://i.postimg.cc/prPwWhN9/rebusuje-logo-sign.png' alt='' />
			    </div>
		    </div>
            <Button to='/gallery' value={'rozwiąz pierwszy rebus'} {...props}/>
        </header>

    </>


);

export default Hero;