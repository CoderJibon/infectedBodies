import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const BannerHome = () => {
    return (
        <div className='bannerSection'>
            <Container>
                <Row>
                    <Col>
                        <div className='bgBanner'>
                            {/* <Image src="/home/mainArtwork.webp" width="992" height="744" /> */}
                            <img src="/home/mainArtwork.webp" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BannerHome;
