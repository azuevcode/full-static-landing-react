import React from 'react';

export default class Title extends React.Component {
    render() {
        const mainClass = this.props.mainClass; 
        const title = this.props.title.split(' ');
        const subtitle = this.props.subtitle;

        return (
            <div className={`title title__${mainClass}`}>
                <span className='title__item title__item_light '>{title[0]} </span>
                <span className='title__item title__item_bold'>{title[1]}</span>
                {subtitle &&
                <div className={`title__subtitle title__subtitle_${subtitle.color}`}>{subtitle.text}</div>
                }   
            </div>
        )
    }
}