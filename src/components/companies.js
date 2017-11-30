import React from 'react';

class Team extends React.Component {
    render() {
        const companies = [
            {
                logo: require('../images/companies/Envato.png'),
                alt: 'Envato'
            },
            {
                logo: require('../images/companies/WordPress.png'),
                alt: 'Wordpress'
            },
            {
                logo: require('../images/companies/Tuts+.png'),
                alt: 'Tuts+'
            },
            {
                logo: require('../images/companies/Microlancer.png'),
                alt: 'Microlancer'
            }
        ]

        return (
            <div className='content__block companies'>
                {
                    companies.map((company, idx) => 
                        <img src={company.logo} 
                                alt={company.alt} 
                                key={idx} 
                                className='companies__logo'/>
                    )
                }
            </div>
        )
    }
}

export default Team;