import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const mint = () => {
    return (
        <div className='minit'>
            <Container>
                <Row>
                    <Col>
                        <div className='minithead'>
                            <span>MINT</span> an Infected Body
                        </div>
                        <div className='minitbody'>
                            <div className='mintleft'>
                                <div>
                                    <h2>To continue you need to connect your wallet</h2>
                                    <button>Connect your wallet</button>
                                </div>
                            </div>
                            <div className='mintright'>
                                <img src="/zombiePreview1.webp" alt="" />
                            </div>
                        </div>
                        <div className='minitfooter'>
                            Account: (not connected)
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default mint;