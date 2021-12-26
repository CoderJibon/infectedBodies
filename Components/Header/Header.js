import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <header className='header'>
                <Container>
                    <Row>
                        <Col>
                            <Link href="/">
                                <div className='brandLogo'>
                                    <span className='left'>Infected</span>
                                    <div className='logo'>
                                        <div className='logoBox'>
                                        <Image src="/skull.png" width="100" height="100" />
                                        </div>
                                    </div>
                                <span className='right'>Bodies</span>
                                </div>
                            </Link>
                        </Col>
                        <Col className='menuRight'>
                            <div >
                                <nav className='menuNav'>
                                    <Link href="/mint" >Mint</Link>
                                    <Link href="/#roadmap" >Road Map</Link>
                                    <Link href="/#team" >Team</Link>
                                    <Link href="/" >Collection</Link>
                                </nav>
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
            </header>
        </>
    );
};

export default Header;