import React from 'react';

export default class Contact extends React.Component {
    render() {
        const participant = {
            photo: this.props.item.photo,
            name: this.props.item.name,
            position: this.props.item.position,
            media: this.props.item.media
        }
        
        return (
            <div className='team__participant participant'>
                <div className='participant__photo'>
                    {
                        participant.photo.length > 0 &&
                        <img src={participant.photo} alt={participant.name} />
                    }
                </div>
                <div className='participant__person'>
                    <p className='participant__name'>{participant.name}</p>
                    <p className='participant__position'>{participant.position}</p>
                </div>
                <div className='participant__media'>
                {
                    participant.media.map((media, idx) => 
                    <a href={media.link} key={idx} className={`participant__social participant__social_${media.name}`}></a>
                    )
                }
                </div>
            </div>
        )
    }
}