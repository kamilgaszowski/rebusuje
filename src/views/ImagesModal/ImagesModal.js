import React from 'react';
import styles from './ImagesModal.module.scss';

// import Modal from '../Modal/Modal';
import Slider from '../../components/Slider/Slider';
import Notes from '../../components/Notes/Notes';

import CancelIcon from '@material-ui/icons/Cancel';
import NoteAddSharpIcon from '@material-ui/icons/NoteAddSharp';
import Input from '../../components/Input/Input';


class ImagesModal extends React.Component {
    state = {
        inputValue: [],
    }

    render() {
        const {
            id,
            onOpenNotes,
            closeRebus,
        } = this.props

        // const repeat = (string, times) => times > 0 ? string.repeat(times) : "";

        return (
            <div className={styles.container}>
                <Notes {...this.props} />

                <div className={styles.notes} onClick={onOpenNotes}><NoteAddSharpIcon className={styles.add_note} /></div>

                <div className={styles.wrapper}>
                    <div className={styles.border}>
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