import React from 'react';
import styles from './Hero.module.scss';
// import { Link } from 'react-router-dom'
import Slider from '../Slider/Slider';
import AppContext from '../../contex';
import SliderMiniature from '../Slider/SliderMiniature';
import Input from '../Input/Input';

const Hero = ({...props}) => {

    const data {
        isRightAnswer,
        isWrongAnswer,
        checkAnswer,
        onHandleChange,
        inputs,
        letter,
        name,
    } = this.props;
    return (
        <AppContext.Consumer>
            {context => (
                <header className={styles.wrapper}>
                    <div className={styles.border}>
                        <Slider
                            {...context.rebus}
                            {...context} />
                        <SliderMiniature {...context}/>
                        <Input {...data}/>
                        <button className={styles.btn} type='button' onClick={()=> context.firstRebus(context.rebus)}>rozwiąż ten rebus</button>
                    </div>
                </header>
            )}
        </AppContext.Consumer>

    )

};

export default Hero;