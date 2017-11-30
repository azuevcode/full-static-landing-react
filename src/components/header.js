import React from 'react';
import TopMenu from './topmenu';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='header__overlay'></div>
                <div className='header__top'>
                    <div className='header__logo'>
                        <span className='header__logo_label'>Escape</span>
                    </div>
                    <div className='header__menu'>
                        <TopMenu />
                    </div>
                </div>
                <div className='header__content'>
                    <div className='header__text'>
                        <span className='header__text_title'>Can you build the website of my dreams?</span>
                        <span className='header__text_subtitle'>Yup, we can do that.</span>
                    </div>
                    <div className='header__button'>
                        <a href='#' className='header__button_learn-more'>Learn More</a>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;