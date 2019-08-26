import React from 'react';
import styles from './Slider.module.scss';

import ArrowForwardIosSharpIcon as Next from '@material-ui/icons/ArrowForwardIosSharp';
import ArrowBackIosSharpIcon as Back from '@material-ui/icons/ArrowBackIosSharp';




const Slider = ({...props}) => {

    return (
               <>
                    {!props.prevRebus ? null : <button className={styles.prevRebus} onClick={props.handlePrevRebus}><Back/></button>}
                    {!props.nextRebus ? null : <button className={styles.nextRebus} onClick={props.handleNextRebus}><Next/></button>}
                    <div className={styles.rebus}>
                        {/* <p className={styles.title_hash}>#{props.id}</p> */}
                        {/* <p className={isRightAnswer ? styles.title : styles.title_hidden}>{value}</p> */}
                        <img src={props.src} alt={props.id} />
                    </div>
               </>

    )
};

export default Slider;