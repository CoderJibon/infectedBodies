import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoIosArrowUp } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='scriltop' >
                 <ScrollToTop smooth component={<IoIosArrowUp/>} />
           </div>
            <Container>
                <Row>
                    <Col>
                        <div className='social'>
                            <div className='iconsMenu'>
                                    <div className='iconsBox'>
                                        <a target="true" href="https://opensea.io/collection/infectedbodies" rel="noreferrer">
                                             <Image src="/headerIcons/opensea.png" width="30" height="30" />
                                        </a>
                                    </div>
                                    <div className='iconsBox'>
                                        <a target="true" href="https://www.instagram.com/Infectedbodies/" rel="noreferrer">
                                            <Image src="/headerIcons/instagram.png" width="28" height="28" />
                                        </a>
                                    </div>
                                    <div className='iconsBox'>
                                        <a target="true" href="https://discord.com/invite/vVv4NfkqVx" rel="noreferrer">
                                            <Image src="/headerIcons/discord.png" width="36" height="25" />
                                        </a>
                                    </div>
                                    <div className='iconsBox'>
                                        <a target="true" href="https://twitter.com/InfectedBodies" rel="noreferrer">
                                            <Image src="/headerIcons/twitter.png" width="32" height="27" />
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='yellowBox'></div>
        </div>
    );
};

export default Footer;