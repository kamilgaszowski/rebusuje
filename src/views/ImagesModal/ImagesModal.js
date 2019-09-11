import React from 'react';
import styles from './ImagesModal.module.scss';

// import Modal from '../Modal/Modal';
import Slider from '../../components/Slider/Slider';
import Notes from '../../components/Notes/Notes';

import CancelIcon from '@material-ui/icons/Cancel';
import NoteAddSharpIcon from '@material-ui/icons/NoteAddSharp';
import HelpIcon from '@material-ui/icons/Help';

import Input from '../../components/Input/Input';


class ImagesModal extends React.Component {

    render() {
        const {
            id,
            onOpenNotes,
            closeRebus,
            isRightAnswer,
            name,
            value,
        } = this.props




        return (
            <div className={styles.container}>
                <Notes {...this.props} />

                <div className={styles.notes} onClick={onOpenNotes}><NoteAddSharpIcon className={styles.add_note} /></div>

                <div className={styles.wrapper}>
                    <div className={styles.border}>

                        <HelpIcon className={styles.question} onClick={() => this.props.hint()}>podpowiedź</HelpIcon>

                        {this.props.checkAnswer && <p className={styles.title}>{this.props.answer}</p>}

                        {/* {( isRightAnswer ) ? <p className={styles.title}>{name}</p> : null} */}
                        <p className={styles.title_hash}>#{id}</p>
                        <CancelIcon className={styles.close} onClick={closeRebus}>X</CancelIcon>
                        <Slider {...this.props} />
                        <Input {...this.props} />

                    </div>
                </div>

            </div>
        )
    }
}


export default ImagesModal;