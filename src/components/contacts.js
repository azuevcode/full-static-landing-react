import React from 'react';
import Title from './title';

export default class Contacts extends React.Component {
    render() {
        const subtitle = {
            text: 'Don’t be shy, drop us an email and say hello! We are a really nice bunch of people :)',
            color: 'white'
        }

        const left_side = [
            {
                img: 'mobile',
                text: '(416) 555-0000',
                prefix: 'phoneto: '
            },
            {
                img: 'twitter',
                text: '@escape'
            },
            {
                img: 'gplus',
                text: 'plus.com/escape'
            }
        ]

        const right_side = [
            {
                img: 'email',
                text: 'hello@escape.com',
                prefix: 'mailto: '
            },
            {
                img: 'facebook',
                text: 'facebook.com/escape'
            },
            {
                img: 'pinterest',
                text: 'pinterest.com/escape'
            }
        ]

        return (
            <div className='contact__contacts'>
                <Title title='Say Hello' 
                       mainClass='contact' 
                       subtitle={subtitle} />
                <div className='contact__list'>
                    {
                        [left_side, right_side].map((side, idx) =>
                            <div key={idx} className='contact__side'>
                                {
                                    side.map((contact, idx) => 
                                    <div className={`contact__item contact__item_${contact.img}`}>
                                        <a href={
                                            contact.prefix ? 
                                            contact.prefix + contact.text : 
                                            contact.text
                                        }>{contact.text}</a>
                                    </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}