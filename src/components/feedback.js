import React from 'react';

export default class Feedback extends React.Component {
    render() {
        return (
            <form className='contact__feedback'>
                <input className='contact__feedback-item' 
                       type='text'
                       name='name'
                       placeholder='Your Name *'/>
                <input className='contact__feedback-item' 
                       type='text'
                       name='email'
                       placeholder='Your E-mail *'/>
                <textarea className='contact__feedback-item'
                          name='message'
                          placeholder='Your Message *'
                          rows='6'>
                </textarea>
                <input type='submit' 
                       value='Отправить' 
                       className='contact__feedback-item contact__feedback-item_submit' />
            </form>
        )
    }
}