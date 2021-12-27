import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Container, Offcanvas, Row } from 'react-bootstrap';

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
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
                            <div className='mobile' >
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
                            <div className='mobileicons'>
                                <button className={show ? 'closeIcons' : "" } onClick={handleShow}>
                                    <div className='linebar one'></div>
                                    <div className='linebar'></div>
                                    <div className='linebar two'></div>
                                </button>
                            </div>
                        </Col>
                    </Row>
               </Container>
            </header>
             <Offcanvas show={show} onHide={handleClose} placement="end">
                <div>
                     <div className='offmenuBox' >
                        <nav className='offmenu'>
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
                </div>
            </Offcanvas>
            
        </>
    );
};

export default Header;