import React from 'react';
import styles from './Slider.module.scss';

import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';




const Slider = ({ ...props }) => {

    return (
               <>
            {!props.prevRebus ?
                null : (
                    <button >
                        <ArrowBackIosSharpIcon className={styles.prevRebus} onClick={props.handlePrevRebus} />
                    </button>
                )}
            {!props.nextRebus ?
                null : (
                    <button >
                        <ArrowForwardIosSharpIcon className={styles.nextRebus} onClick={props.handleNextRebus} />
                    </button>
                )}
                    <div className={styles.rebus}>
                            {/* <p className={styles.title_hash}>#{props.id}</p> */}
                            {/* <p className={isRightAnswer ? styles.title : styles.title_hidden}>{value}</p> */}
                            <img src={props.src} alt={props.id} />
                        </div>
               </>

                )
            };

export default Slider;