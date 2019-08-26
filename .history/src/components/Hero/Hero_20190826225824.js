import React from 'react';
import styles from './Hero.module.scss';
// import { Link } from 'react-router-dom'
import Slider from '../Slider/Slider';
import AppContext from '../../contex';

const Hero = () => {

    return (
        <AppContext.Consumer>
            {context => (
                <header className={styles.wrapper}>
                    <div className={styles.border}>
                        <Slider
                            {...context.rebus}
                            {...context} />
                        <button className={styles.btn} type='button' firstRebus={()=> context.firstRebus(context.rebus)}>rozwiąz rebus</button>
                    </div>
                </header>
            )}
        </AppContext.Consumer>

    )

};

export default Hero;