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
            <div id="services" >
                <h2 >THE BEST BETTING SERVICES</h2>
            </div>
            <Row >
                <Col lg={true}>
                    <div className="fut1">
                        <Card className="bg-dark text-white">
                            <Card.Img src={sports} alt="" id="ImageSports" />
                            <Card.ImgOverlay>
                                <Card.Title id="textSports">SPORTSBOOK SOFTWARE</Card.Title>
                            </Card.ImgOverlay>
                        </Card>

                    </div>
                    <div className="mt-5">
                        <p id="textSub">Five-star experience, solid platform, secure, and easy to use.

                        Your customers will be able to place bets online 24/7
                        </p>
                    </div>


                </Col>
                <Col lg={true}>
                    <div className="fut1">
                        <Card className="bg-dark text-white">
                            <Card.Img src={casino} alt="" id="ImageSports" />
                            <Card.ImgOverlay>
                                <Card.Title id="textLive">LIVE CASINO</Card.Title>
                            </Card.ImgOverlay>
                        </Card>


                    </div>
                    <div className="mt-5">
                        <p id="textSub">Players can access our VIP game rooms with first-rate dealers that will make sure to meet all expectations.
                        </p>
                    </div>

                </Col>
                <Col lg={true}>
                    <div className="fut1">
                        <Card className="bg-dark text-white">
                            <Card.Img src={online} alt="" id="ImageSports" />
                            <Card.ImgOverlay>
                                <Card.Title id="textSports">ONLINE CASINO</Card.Title>
                            </Card.ImgOverlay>
                        </Card>

                    </div>
                    <div className="mt-5">
                        <p id="textSub">Whether it’s on a phone, computer, or tablet, we have a wide range of casino games to choose from.
                        </p>
                    </div>
                </Col>

            </Row>

            <Row className="square2">
                <Col lg={true}>
                    <div className="fut1">
                        <Card className="bg-dark text-white">
                            <Card.Img src={betting} alt="" id="ImageSports" />
                            <Card.ImgOverlay>
                                <Card.Title id="textSports">LIVE BETTING</Card.Title>
                            </Card.ImgOverlay>
                        </Card>


                    </div>
                    <div className="mt-5">
                        <p id="textSub">Live betting available in all major leagues and sports.
                        </p>
                    </div>
                </Col>
                <Col lg={true}>
                    <div className="fut1">
                        <Card className="bg-dark text-white">
                            <Card.Img src={horses} alt="" id="ImageSports" />
                            <Card.ImgOverlay>
                                <Card.Title id="textHorse">HORSES</Card.Title>
                            </Card.ImgOverlay>
                        </Card>

                    </div>
                    <div className="mt-5">
                        <p id="textSub">Our racebook offers full features and the availability to bet on the best tracks all year round.
                        </p>
                    </div>
                </Col>
                <Col lg={true}>
                    <div className="fut1">
                        <Card className="bg-dark text-white">
                            <Card.Img src={call} alt="" id="ImageSports" />
                            <Card.ImgOverlay>
                                <Card.Title id="textSports">BILINGUAL CALL CENTER</Card.Title>
                            </Card.ImgOverlay>
                        </Card>

                    </div>
                    <div className="mt-5">
                        <p id="textSub">VIP pay per head customer service is available 24/7/365
                        Phone, chat, and email

                        </p>
                    </div>
                </Col>

            </Row>
            <div id="services2">
                <span>AND MUCH MORE</span>
            </div>

        </Container>
    )
}

export const WhyVip = () => {
    return (
        <Container fluid className="all4">
            <h1>
                <div id="titleVip">WHY VIP PER HEAD</div>
            </h1>
            <Row>

                <div className="vip">
                    <p id="mai3">VIP Per Head is a company focused on providing the best Pay Per Head service on the market. The VIP Per Head team has more than 20 years of experience in the industry. We know the needs of bookies and gamblers in depth. All this knowledge translates into a Pay Per Head service, whose main objective is to provide a premium experience for everyone.</p>
                </div>
                <div className="vip2">
                    <p id="mai4">Our platform is a state-of-the-art white label bookmaking management solution built ourselves by our in-house team of experts.</p>
                </div>
            </Row>


            <Row>
                <Col lg={true}>
                    <h1 id="h1vip">
                        <div id="titleVip2">THE BEST ALLY FOR
                        YOUR
                        </div>
                        <div id="titleVip2">BETTING
                        BUSINESS
                        </div>
                    </h1>
                    <div>
                        <p id="mai2" className="mt-5">We have hired professional bookies to tailor VIP per head as a profitable and safe betting business. 
                        </p>
                    </div>
                    <div>
                        <p id="mai2" className="mt-5">Vip Per Head tools and services allow bookies to create a business that operates 24 hours a day, seven days a week. 
                        </p>
                    </div>
                    <div>
                        <p id="mai2" className="mt-5">The bookie will be able to delegate a large part of the operational task to the Vip Per Head team, which means that your business will continue to function even while you are asleep, and best of all, it will continue to generate income.
                        </p>
                    </div>
                </Col>
                <Col lg={true}>
                    <h1 id="h1vip">
                        <div id="titleVip2">LOW
                        </div>
                        <div id="titleVip2">OPERATION COST
                        </div>
                    </h1>
                    <div>
                        <p id="mai2" className="mt-5">Using VIP Per Head services is the best way to establish a fully functional betting business with large companies’ features at a low operating cost.

                        </p>
                    </div>
                    <div>
                        <p id="mai2" className="mt-5">
                            VIP Per Head charges a weekly fee per active player. Bookies will be able to use all the tools and services of VIP Per Head and will only have to pay for players who have placed a bet during the month.
                        </p>
                    </div>
                    <div>
                        <p id="mai2" className="mt-5">
                            VIP Per Head charges a weekly fee per active player. Bookies will be able to use all the tools and services of VIP Per Head and will only have to pay for players who have placed a bet during the month.
                        </p>
                    </div>
                </Col>
            </Row>


        </Container>
    )
}





