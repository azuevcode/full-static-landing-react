import React from 'react';
import Title from './title';
import Participant from './participant';

export default class Team extends React.Component {
    render() {
        const subtitle = {
            text: 'These wonderful people make work enjoyable.',
            color: 'gray'
        }

        const participants = [
            {
                photo: '',
                name: 'Kimberly Thompson',
                position: 'Marketer',
                media: [
                    {
                        name: 'twitter', 
                        link: 'https://twitter.com/' 
                    },
                    {
                        name: 'fb', 
                        link: 'https://www.facebook.com/'
                    },
                    {
                        name: 'pinterest', 
                        link: 'https://ru.pinterest.com/'
                    }
                ]
            },
            {
                photo: '',
                name: 'Rico Massimo',
                position: 'Coder',
                media: [
                    {
                        name: 'twitter', 
                        link: 'https://twitter.com/' 
                    },
                    {
                        name: 'fb', 
                        link: 'https://www.facebook.com/'
                    },
                    {
                        name: 'gplus', 
                        link: 'https://plus.google.com/'
                    }
                ]
            },
            {
                photo: '',
                name: 'Uku Mason',
                position: 'Graphic Designer',
                media: [
                    {
                        name: 'fb', 
                        link: 'https://www.facebook.com/'
                    },
                    {
                        name: 'pinterest', 
                        link: 'https://ru.pinterest.com/'
                    }
                ]
            }
        ]

        return (
            <div className='content__block team'>
                <Title title='Amazing Team' 
                       mainClass='team' 
                       subtitle={subtitle} />
                <div className='team__participants'>
                {
                    participants.map((participant, idx) => 
                    <Participant item={participant} key={idx} />
                    )
                }
                </div>
                <div className='team__description'>
                    <p>Proin iaculis purus consequat sem cure  digni ssim donec porttitora entum suscipit</p>
                    <p>aenean rhoncus posuere odio in tincidunt proin iaculis.</p>
                </div>
            </div>
        )
    }
}