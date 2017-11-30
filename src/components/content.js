import React from 'react';
import Services from './services';
import Clients from './clients';
import Companies from './companies';
import Team from './team';
import Contact from './contact';

class Content extends React.Component {
    render() {
        return (
            <div className='content'>
                <Services />
                <Clients />
                <Companies />
                <Team />
                <Contact />
            </div>
        )
    }
}

export default Content;