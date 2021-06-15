import React from 'react'
import '../views/Home.css'
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap'

import image1 from '../images_home/1.jpg'
import image2 from '../images_home/2.jpg'
import image3 from '../images_home/3.jpg'
import image4 from '../images_home/4.jpg'
import image5 from '../images_home/5.jpg'
import image6 from '../images_home/6.jpg'
import sports from '../images_home/sportsbook.jpg'
import horses from '../images_home/horses.jpg'
import call from '../images_home/callcenter.jpg'
import betting from '../images_home/livebetting.jpg'
import casino from '../images_home/livecasino.jpg'
import online from '../images_home/online_casino.jpg'

export const Home = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="imageHome"
                    src={image1}
                    alt=""
                />

            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="imageHome"
                    src={image2}
                    alt=""
                />

            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="imageHome"
                    src={image3}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="imageHome"
                    src={image4}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="imageHome"
                    src={image5}
                    alt=""
                />
            </Carousel.Item>
        </Carousel>

    )
}

export const Business = () => {
    return (
        <Container fluid className="all2">
            <Row>
                <Col lg={true}>
                    <h1 id="h1">
                        <div id="titleHome1">YOUR BUSINESS</div>
                        <div id="titleHome2">IS OUR BUSINESS!</div>
                    </h1>

                    <div>
                        <p id="mai">When you win, we win! and that is why we are compromised. With VIP Per Head services, your sportsbook will have the latest technology enabling you to run their business quickly, efficiently, and without complications. We have everything you need to operate a successful betting business.</p>
                    </div>

                </Col>
                <Col lg={true}>
                    <div className="divBusi">
                        <img src={image6} alt="" id="ImageBusi" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export const Premium = () => {
    return (
        <Container fluid className="all3">
            <Row>
                <div >
                    <h2 id="titleHome3">A PREMIUM EXPERIENCE</h2>
                    <h3 id="titleHome4">FOR EVERYONE</h3>
                    <p id="mai2">VIP Per Head is a company focused on providing the best Pay Per Head service on the market.
                    We have designed a superior pay-per-head service for professional bookies who demand the latest technologies, the best customer service, and the most comprehensive digital tools that will enable you to manage your business anytime and anywhere.
                    </p>
                </div>

            </Row>
            <Row>
                <div>
                    <div>
                        <h2>THE BEST BETTING SERVICES</h2>
                    </div>

                    <Col lg={true}>
                        <div>
                            <Card className="bg-dark text-white">
                                <Card.Img src={sports} alt="" id="ImageSports" />
                                <Card.ImgOverlay>
                                    <Card.Title id="textSports">SPORTSBOOK SOFTWARE</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </div>

                    </Col>
                    <Col lg={true}></Col>
                    <Col lg={true}></Col>

                </div>
            </Row>

        </Container>
    )
}


