import React from 'react';
import Title from './title';

export default class MainService extends React.Component {
    render() {
        const elem = this.props.elem;
    
        return (
            <div className={`services-item services__${elem.className}`}>
                <div className='services__main-description'>
                    <Title title={elem.description.title} mainClass='services' />
                    <div className='services__description'>
                        {elem.description.items.map((item, idx) => 
                            <p key={idx} className='services__description-item'>{item}</p>
                        )}
                    </div>
                </div>
                <div className={`services__${elem.className}-icon`}>
                    <img src={elem.img.src} 
                         alt={elem.img.alt} />
                </div>
            </div>
        )
    }
}
