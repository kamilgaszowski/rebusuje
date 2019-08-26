import React from 'react';
import styles from './Slider.module.scss';

import ArrowForwardIosSharpIcon  from '@material-ui/icons/ArrowForwardIosSharp';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';




const Slider = ({...props}) => {

    return (
               <>
                    {!props.prevRebus ? null : <ArrowBackIosSharpIcon className={styles.prevRebus} onClick={props.handlePrevRebus}/>}
                    {!props.nextRebus ? null : <ArrowForwardIosSharpIcon className={styles.nextRebus} onClick={props.handleNextRebus}/>}
                    <div className={styles.rebus}>
                        <img src={props.src} alt={props.id} />
                    </div>
               </>

    )
};

export default Slider;