import React from 'react';
import Contacts from './contacts';
import Feedback from './feedback';

class Contact extends React.Component {
    render() {
        return (
            <div className='content__block contact'>
                <Contacts />
                <Feedback />
            </div>
        )
    }
}

export default Contact;