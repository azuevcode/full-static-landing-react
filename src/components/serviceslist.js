import React from 'react';

export default class ServicesList extends React.Component {
    render() {
        const left_side = [
            {
                iconName: 'branding-indentity',
                title: 'Branding & Indentity',
                description: 'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.'
            },
            {
                iconName: 'mobile-app-develop',
                title: 'Mobile App Development',
                description: 'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.'
            },
            {
                iconName: 'ui-ux',
                title: 'UI/UX',
                description: 'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.'
            }
        ]

        const right_side = [
            {
                iconName: 'web-graphic-design',
                title: 'Web & Graphic Design',
                description: 'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.'
            },
            {
                iconName: 'animations',
                title: 'Animations',
                description: 'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.'
            },
            {
                iconName: 'photography',
                title: 'Photography',
                description: 'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.'
            }
        ]

        const sides = [left_side, right_side];

        return (
            <div className='services-item services__list'>
                {sides.map((side, idx) => 
                    <div key={idx} className='services__side'>
                        {side.map((service_item, idx) => 
                            <div key={idx} className='services__list-item'>
                                <div className={`services__list-icon services__list-icon_${service_item.iconName}`}></div>
                                <div className='services__description services__description_small'>
                                    <div className='title title__services-list'>{service_item.title}</div>
                                    <div className='services__description-item'>{service_item.description}</div>
                                </div>
                            </div>
                        )}
                    </div>
                )}        
            </div>
        )
    }
}