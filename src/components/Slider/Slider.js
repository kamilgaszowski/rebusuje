import React from 'react';
import styles from './Slider.module.scss';

import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';




const Slider = ({ ...props }) => {

    return (
        <div className={styles.wrapper}>
            {!props.prevRebus ?
                null : (
                    <button className={styles.prev_rebus} onClick={props.handlePrevRebus} >
                        <ArrowBackIosSharpIcon className={styles.prev_arrow} />
                    </button>
                )}
            {!props.nextRebus ?
                null : (
                    <button className={styles.next_rebus} onClick={props.handleNextRebus}>
                        <ArrowForwardIosSharpIcon className={styles.next_arrow} />
                    </button>
                )}
            <div onClick={()=> props.firstRebus(props.rebus)} className={styles.rebus}>
                <img src={props.src} alt={props.id} />

            </div>
        </div >
    )
};

export default Slider;