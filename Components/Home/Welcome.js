import React from 'react';
import { Container } from 'react-bootstrap';

const Welcome = () => {
    return (
        <section className='welcome'>
            <Container>
                 <div className='welcomeCol'>
                    <div className='contentBox'>
                        <h2>Welcome</h2>
                        <p>
                            <strong className="text-main-green">INFECTED </strong>
                            <strong className="text-main-purple">BODIES </strong>
                            are <b>10,000</b> unique collectible NFT zombies that live on the Ethereum blockchain.<br />By owning one of our Infected Bodies, you will reap<strong className="text-main-yellow"> great rewards</strong>. Not only do you get our <b>superior art</b>, but you will also have <b>many different advantages</b> just being a member of our community.<br />Always remember <strong className="text-main-green">we’re the family you choose</strong>.
                        </p>
                    </div>
                    <div className='welComeimage'>
                        <div className='welImg'>
                            <img src="/home/sitewelcome.webp" alt="" />
                        </div>
                    </div>
                </div>
                <div className='welfooter'>
                    <p>Our roadmap will convey and announce <b>all updates and events</b> for our token holders . Collectively our token holders will sense the quality of what we have created here and will be fortunate to be an <strong className="text-main-yellow">exclusive member of IB</strong>.</p>
                </div>
           </Container>
        </section>
    );
};

export default Welcome;