import React from 'react';
import styles  from './Hero.module.scss';
import {Link} from 'react-router-dom'
import Slider from '../Slider/Slider';

const Hero = (props) => (
        <header className={styles.wrapper}>
		    <div className={styles.border}>
			   <Slider {...props}/>
		    </div>
            <Link to='/gallery'>
                <button className={styles.btn} type='button' >rozwiąz rebus</button>

            </Link>
        </header>
);

export default Hero;