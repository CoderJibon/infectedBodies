import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HeadLine = () => {
    return (
        <section className='headline'>
            <Container>
                <Row>
                    <Col>
                        <div className='line'>
                            <div className='lineHight'></div>
                           <div className='logo'>
                                <div className='logoBox'>
                                    <Image className='desktop' src="/skull.png" width="100" height="100" />
                                    <img className='mobile' src="/skull.png" alt="" />
                                </div>
                            </div>
                            <div className='lineHight'></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeadLine;