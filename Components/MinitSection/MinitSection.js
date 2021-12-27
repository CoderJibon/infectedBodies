import React, { useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';

const MinitSection = () => {
    const [modalShow, setModalShow] = useState(false);
    
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
                                    <button onClick={() => setModalShow(true)}>Connect your wallet</button>
                                     
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
             <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className='bodyText'>
                        <h4>Choose your provider</h4>
                        <button>Metamask</button>
                        <button>TrustConnect</button>
                    </div>
                </Modal.Body>
                
            </Modal>
        </div>
    );
};

export default MinitSection;