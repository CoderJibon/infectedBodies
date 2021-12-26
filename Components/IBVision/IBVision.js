import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const IBVision = () => {
    return (
        <section className='ibvision'>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className='vision'>
                                <h2 className="text-main-purple">IB Vision</h2>
                                <p>We hope this is <b>the beginning of</b> <strong className="text-main-green">something special</strong>. We’re pointing towards <strong className="text-main-yellow">leveling our artwork worldwide</strong>while anticipating <b>the most kickass Digital Art Collections and Community</b>.<br/>Our team is working diligently to grow our project and community!</p>
                            </div>
                            <div className='visionBox'>
                                <h3 className="our">Our <br />Mission</h3>
                                <p>As we look forward to the future we’ll never walk alone, we´ll always <b>interact with our community</b> by listening and <b>respecting their thoughts and ideas</b>. We have full confidence in our team, project, art, and <b>power of a loyal community</b>.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default IBVision;