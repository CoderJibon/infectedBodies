import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const RoadMap = () => {
    return (
        <section id='roadmap' className='roodmap'>
            <Container>
                <Row>
                    <Col>
                        <div className='Rood'>
                            <h2 className="text-main-purple">Road Map</h2>
                            <div className='roodspace'>
                                <div className='item'>
                                    <div className='text-main-green'>10%</div>
                                    <p>To reward our most active users they will be <b>gifted a </b><strong className="text-main-green">rare Infected Bodies</strong><b>(IB)</b>.</p>
                                </div>
                                <div className='item'>
                                    <div className='text-main-green'>20%</div>
                                    <p>We <b>release 10 IB</b> (tokens held back from the sale) to be <strong className="text-main-blue">airdropped</strong> <b>to IB holders.</b></p>
                                </div>
                                <div className='item'>
                                    <div className='text-main-green'>30%</div>
                                    <p>IB will have their <b>very own</b> <strong className="text-main-yellow">Street Art</strong> displayed on walls as <b>graffiti</b>.</p>
                                </div>
                                <div className='item'>
                                    <div className='text-main-green'>40%</div>
                                    <p>IB loves to give back! We will <b> donate $10,000 dollars</b> to <strong className="text-main-blue">charity</strong>. (To be voted on by our IB token holders).</p>
                                </div>
                            </div>
                            <div className='textwithimage'>
                                <div className='textLeftwighOutImage'>
                                    <div className='item'>
                                        <div className='text-main-green'>50%</div>
                                       <p>IB will start the creative process of an <strong className="text-main-yellow">IB comic book</strong>.</p>
                                    </div>
                                    <div className='item'>
                                        <div className='text-main-green'>60%</div>
                                      <p><b>Member Exclusive IB</b> <strong className="text-main-blue">Merch</strong> will be released. We will also <b>gift</b> IB Merch to some of our <b>lucky token holders</b>.</p>
                                    </div>
                                    <div className='item'>
                                        <div className='text-main-green'>70%</div>
                                       <p >We are happy to announce that we will be <b>donating</b> <strong className="text-main-yellow">5,000 trees</strong> and the forest name will be Infected Bodies. We will have a <b>meet-up</b> and <strong className="text-main-blue"> party</strong> with our holders in that forest.</p>
                                    </div>
                                    <div className='item'>
                                        <div className='text-main-green'>80%</div>
                                       <p><strong className="text-main-yellow">Physical art</strong> will be portrayed and<b> gifted to token holders</b> at different events.</p>
                                    </div>
                                    <div className='item'>
                                        <div className='text-main-green'>90%</div>
                                       <p className="flex-1">There will be an<strong className="text-main-blue"> IB Exhibition and Live Auction</strong>.</p>
                                    </div>
                                     <div className='item'>
                                        <div className='text-main-green'>100%</div>
                                       <p>Finally we will share the story of Infected Bodies and announce <b>a new road map</b> that includes <b>antidotes for Infected Bodies</b> to <strong className="text-main-yellow">transform into humans</strong>. Many surprises for our Token Holders!</p>
                                    </div>

                                </div>
                               
                                <img className="roodImage" src="/rood/siteroadmap.webp" alt="" />
                               
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default RoadMap;