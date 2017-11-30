import React from 'react';

export default class Review extends React.Component {
    render() {
        const photo = this.props.item.photo;
        const review = this.props.item.review;
        const signature = this.props.item.signature;
        const is_even = this.props.index % 2 === 0;

        return (
            <div className='clients__item'>
                <div className='clients__photo'>
                    {photo.length > 0 && 
                        <img src={photo} alt={signature} />
                    }
                </div>
                <div className={`clients__review clients__review_${is_even ? 'even' : 'odd'}`}>
                    <div className='clients__quote'>“ {review} ”</div>
                    <div className='clients__author'>- {signature}</div>
                </div>
            </div>
        )
    }
}
