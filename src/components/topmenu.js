import React from 'react';

class TopMenu extends React.Component {
    render() {
        return (
            <ul className='header__menu-items'>
                <li className='header__item'>
                    <a href='#' className='header__item_link'>Home</a>
                </li>
                <li className='header__item'>
                    <a href='#services' className='header__item_link'>Services</a>
                </li>
                <li className='header__item'>
                    <a href='#clients' className='header__item_link'>Clients</a>
                </li>
                <li className='header__item'>
                    <a href='#team' className='header__item_link'>Team</a>
                </li>
                <li className='header__item'>
                    <a href='#contact' className='header__item_link'>Contact</a>
                </li>
            </ul>
        )
    }
}

export default TopMenu;