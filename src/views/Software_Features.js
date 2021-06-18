import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../views/Software_Features.css'
import { Link } from 'react-router-dom'
import call from '../features_images/callcenter.jpg'
import horses from '../features_images/horses.jpg'
import liveB from '../features_images/livebetting.jpg'
import liveC from '../features_images/livecasino.jpg'
import online from '../features_images/online-casino.jpg'
import book from '../features_images/sportsbook.jpg'

export const Software_Features = () => {
    return (
        <Container fluid style={{ background: 'black' }}>
            <Row>
                <Col lg={true} className="text-center">
                    <div className="Sotext">
                        <p style={{ color: 'white' }}>VIP Per Head online betting software solutions are the engine that powers the operational end of your private betting
</p>
                        <p style={{ color: 'white' }}>business whether for sports, casino, pools, etc. These specialized betting solutions are designed to process all
</p>
                        <p style={{ color: 'white' }} id="ps3">transactions that are dedicated to the business of managing your own bookmaker.</p>
                        <p style={{ color: 'white' }}>At VIP Per Head, we have staff who are among the most experienced and professional in the industry. These allow us to</p>
                        <p style={{ color: 'white' }}>be innovating in our products to provide a better service.</p>
                    </div>
                </Col>
            </Row>
            <div id="services">
                <h2>
                    THE BEST BETTING SERVICES
                    </h2>
            </div>
            <Row>

                <Col lg={true}>
                    <div id="fut1">
                        <img src={book} alt="" id="ImageSports" />
                    </div>
                </Col>
                <Col lg={true} className="">
                    <div id="fut1">
                        <img src={liveC} alt="" id="ImageSports" />
                    </div>
                </Col>
                <Col lg={true}>
                    <div id="fut1">
                        <img src={online} alt="" id="ImageSports" />
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col lg={true}>
                    <div id="fut1">
                        <img src={liveB} alt="" id="ImageSports" />
                    </div>
                </Col>
                <Col lg={true}>
                    <div id="fut1">
                        <img src={horses} alt="" id="ImageSports" />
                    </div>
                </Col>
                <Col lg={true}>
                    <div id="fut1">
                        <img src={call} alt="" id="ImageSports" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


