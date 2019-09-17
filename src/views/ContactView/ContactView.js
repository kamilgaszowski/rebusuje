import React from 'react';
import styles from './ContactView.module.scss';
import Logo from '../../components/Logo/Logo';
import NetlifyForm from 'react-netlify-form'


const ContactView = () => (
    <div className={styles.wrapper}>
        <Logo />
        <h2 className={styles.title}>Jarek Miś</h2>
        <p>Napisz do mnie:</p>
        <a href='mailto:J.mis@outlook.com'>J.mis@outlook.com</a>
        <NetlifyForm name='Contact Form'>
            {({ loading, error, success }) => (
                <div>
                    {loading &&
                        <div>Loading...</div>
                    }
                    {error &&
                        <div>Your information was not sent. Please try again later.</div>
                    }
                    {success &&
                        <div>Thank you for contacting us!</div>
                    }
                    {!loading && !success &&
                        <div>
                            <input type='text' name='Name' placeholder='imię' required />
                            <textarea name='Message' placeholder='wiadomość' required />
                            <button>Submit</button>
                        </div>
                    }
                </div>
            )}
        </NetlifyForm>

    </div>
);

export default ContactView;