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
                    <Slider
                        {...context.rebus}
                        {...context.handleNextRebus}
                        {...context.handlePrevRebus}
                        {...context.nextRebus}
                        {...context.prevRebus}/>
                        <button className={styles.btn} type='button' onClick={context.firstRebus}>rozwiąz rebus</button>

                </header>
            )}
        </AppContext.Consumer>

    )

};

export default Hero;