import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
const Team = () => {
    return (
        <div id='team' className='Team'>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h2 className="text-main-purple">The Team</h2>
                            <div className='memberCount'>
                                 <div className='teamMember'>
                                    <div className='member'>
                                        <Image src="/team/okanking.webp" width="266" height="266" ></Image>
                                    </div>
                                    <div className='titleTeam'>
                                        <h4 className='Okben Okben'>Okben</h4>
                                        <h3>Infected Founder</h3>
                                    </div>
                                    <div className='socialIcons'>
                                        <a target="true" href="https://www.linkedin.com/in/okanoguz">
                                          <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                                <div className='teamMember'>
                                    <div className='member'>
                                        <Image src="/team/sokos.webp" width="266" height="266" ></Image>
                                    </div>
                                    <div className='titleTeam'>
                                        <h4 className='Okben Sokos6'>Sokos6</h4>
                                        <h3>Infected Chief of Operation and Marketing</h3>
                                    </div>
                                    <div className='socialIcons'>
                                        <a target="true" href="https://twitter.com/Sokos6">
                                          <FaTwitter />
                                        </a>
                                    </div>
                                </div>

                                <div className='teamMember'>
                                    <div className='member'>
                                        <Image src="/team/tahasertac.webp" width="266" height="266" ></Image>
                                    </div>
                                    <div className='titleTeam'>
                                        <h4 className='Okben Tahasertac'>Tahasertac</h4>
                                        <h3>Infected Artist</h3>
                                    </div>
                                    <div className='socialIcons'>
                                        <a target="true" href="https://www.linkedin.com/in/taha-serta%C3%A7-gezer-4bbb61140">
                                          <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                                <div className='teamMember'>
                                    <div className='member'>
                                        <Image src="/team/emresto.webp" width="266" height="266" ></Image>
                                    </div>
                                    <div className='titleTeam'>
                                        <h4 className='Okben Tahasertac'>Emresto</h4>
                                        <h3>Infected Artist</h3>
                                    </div>
                                    <div className='socialIcons'>
                                       <a target="true" href="https://www.linkedin.com/in/emre-%C3%A7al%C4%B1%C5%9Fkan-4987a7a1">
                                          <FaLinkedin />
                                        </a>
                                    </div>
                                </div>

                                <div className='teamMember'>
                                    <div className='member'>
                                        <Image src="/team/martiam.webp" width="266" height="266" ></Image>
                                    </div>
                                    <div className='titleTeam'>
                                        <h4 className='Okben Martiam'>Martiam</h4>
                                        <h3>Infected Lead Developer</h3>
                                    </div>
                                    <div className='socialIcons'>
                                        <a target="true" href="https://twitter.com/martiam38">
                                          <FaTwitter />
                                        </a>
                                    </div>
                                </div>
                                <div className='teamMember'>
                                    <div className='member'>
                                        <Image src="/team/denkov.webp" width="266" height="266" ></Image>
                                    </div>
                                    <div className='titleTeam'>
                                        <h4 className='Okben Sokos6'>Denkovnik</h4>
                                        <h3>Infected Website Designer</h3>
                                    </div>
                                    <div className='socialIcons'>
                                        <a target="true" href="">
                                            
                                        </a>
                                    </div>
                                </div>

                           </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Team;