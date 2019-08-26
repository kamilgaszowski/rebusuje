import React from 'react';
import styles from './Slider.module.scss';

import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';




const Slider = ({ ...props }) => {

    return (
               <>
            {!props.prevRebus ?
                null : (
                    <button className={styles.prev_rebus}>
                        <ArrowBackIosSharpIcon className={styles.prev_arrow} onClick={props.handlePrevRebus} />
                    </button>
                )}
            {!props.nextRebus ?
                null : (
                    <button className={styles.next_rebus}>
                        <ArrowForwardIosSharpIcon className={styles.next_arrow} onClick={props.handleNextRebus} />
                    </button>
                )}
                    <div className={styles.rebus}>
                            <img src={props.src} alt={props.id} />
                        </div>
               </>

                )
            };

export default Slider;