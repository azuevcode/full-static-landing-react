import React from 'react';
import Review from './review';
import Title from './title';

class Clients extends React.Component {
    render() {
        const reviews = [
            {
                photo: '',
                review: 'Proin iaculis purus consequat sem cure  digni ssim donec porttitora entum suscipit aenean rhoncus.',
                signature: 'Jamie Richardson, Founder of Cocoa Media'
            },
            {
                photo: '',
                review: 'Proin iaculis purus consequat sem cure  digni ssim donec porttitora entum suscipit aenean rhoncus.',
                signature: 'Bart Thompson, Founder of Rainel'
            }
        ];

        const subtitle = {
            text: 'See what nice things our clients said about us. ',
            color: 'gray'
        }

        return (
            <div className='content__block clients'>
                <Title title='Awesome Clients' 
                       mainClass='clients' 
                       subtitle={subtitle} />
                {reviews.map((review, idx) => 
                    <Review key={idx} item={review} index={idx + 1}/>
                )}
            </div>
        )
    }
}

export default Clients;