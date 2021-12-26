import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TheSpecs = () => {
    return (
        <section className='theSpecs'>
            <Container>
                <Row>
                    <Col>
                        <div className='specsContent'>
                            <div className='title'>
                                <h2 className="text-main-purple">The Specs</h2>
                                <p>
                                    <strong className="text-main-green">10,000 unique collectible NFT zombies </strong> live on the Ethereum blockchain as <strong className="text-main-yellow">ERC-721</strong>. Each IB is exclusive with a superior program created to generate and breed more than <strong className="text-main-green">100 possible traits</strong>.<br/><br/>NFTs are minted on ERC-721 compliant contracts on the Ethereum blockchain. This is the most widely supported format for digital collectibles. IB will be randomly generated with <b> no special privileges for anyone</b>. IB will be launched and minted at the same price for all.</p>
                            </div>
                            <div className='spaecsGalleryImage spaecsItem'> 
                                <img src="/TheSpecs/zombiePreview1.webp" alt="" />
                                <img src="/TheSpecs/zombiePreview2.webp" alt="" />
                                <img src="/TheSpecs/zombiePreview3.webp" alt="" />
                                <img src="/TheSpecs/zombiePreview4.webp" alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='spaecsBg'>
                            <h3>
                                <span>MINT</span> an Infected Body
                            </h3>
                            <Link href="/mint">
                                <button className='mint' >MINT</button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>   
        </section>
    );
};

export default TheSpecs;