import React from 'react';
import styles  from './Hero.module.scss';
import {Link} from 'react-router-dom'

const Hero = () => (
    <>
        <header className={styles.wrapper}>
		    <div className={styles.border}>
			    <div className={styles.logo}>
				    <img src='https://i.postimg.cc/prPwWhN9/rebusuje-logo-sign.png' alt='' />
			    </div>
		    </div>
            <Link to='/gallery'>
                <button type='button' value='rozwiąz rebus'/>

            </Link>
        </header>

    </>


);

export default Hero;