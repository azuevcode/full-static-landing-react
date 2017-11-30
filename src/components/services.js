import React from 'react';
import MainService from './mainservice';
import ServicesList from './serviceslist';

export default class Services extends React.Component {
    render() {
        const mainServices = [
            {
                className: 'development', 
                description: {
                    title: 'Web Development',
                    items: [
                        'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.',
                        'Iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. Proin iaculis purus consequat sem cure digni ssim.'
                    ]
                }, 
                img: {
                    src: require('../images/icons/flow-tree-icon.png'),
                    alt: 'flow tree icon'
                }    
            },
            {
                className: 'branding', 
                description: {
                    title: 'Indentity Branding',
                    items: [
                        'Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt.',
                        'Iaculis purus consequat sem cure digni ssim. Donec porttitora entum suscipit aenean rhoncus posuere odio in tincidunt. Proin iaculis purus consequat sem cure digni ssim.'
                    ]
                }, 
                img: {
                    src: require('../images/icons/users-icon.png'),
                    alt: 'users icon'
                }    
            },
        ]

        return (
            <div className='content__block services'>
                {mainServices.map((mainService, idx) => 
                    <MainService key={idx} elem={mainService} />
                )}
                <ServicesList />
            </div>
        )
    }
}
