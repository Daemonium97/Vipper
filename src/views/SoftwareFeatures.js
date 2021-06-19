import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import '../views/SoftwareFeatures.css'

import call from '../features_images/callcenter.jpg'
import horses from '../features_images/horses.jpg'
import liveB from '../features_images/livebetting.jpg'
import liveC from '../features_images/livecasino.jpg'
import online from '../features_images/online-casino.jpg'
import book from '../features_images/sportsbook.jpg'

export const SoftwareFeatures = () => {
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
                <h2 style={{ color: 'white' }}>
                    THE BEST BETTING SERVICES
                    </h2>
            </div>
            <Row >

                <Col lg={true}>
                    <div className="fut1">
                        <img src={book} alt="" id="ImageBlo" />
                    </div>
                </Col>
                <Col lg={true} >
                    <div className="fut1">
                        <img src={liveC} alt="" id="ImageBlo" />
                    </div>
                </Col>
                <Col lg={true}>
                    <div className="fut1">
                        <img src={online} alt="" id="ImageBlo" />
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col lg={true}>
                    <div className="fut1">
                        <img src={liveB} alt="" id="ImageBlo" />
                    </div>
                </Col>
                <Col lg={true}>
                    <div className="fut1">
                        <img src={horses} alt="" id="ImageBlo" />
                    </div>
                </Col>
                <Col lg={true}>
                    <div className="fut1">
                        <img src={call} alt="" id="ImageBlo" />
                    </div>
                </Col>
            </Row>
            <div id="services">
                <span style={{ color: '#8a834d', fontSize: '30px' }}>AND MUCH MORE</span>
            </div>
            <Row>
                <Col lg={true} className="text-center">
                    <div className="Sotext2">
                        <p style={{ color: 'white' }}>VIP PER HEAD HAS ALL THE TOOLS THAT PROFESSIONAL BOOKIES</p>
                        <p style={{ color: 'white' }}>NEED TO SUCCEED IN THEIR BUSINESS</p>
                    </div>

                </Col>
            </Row>
            <Row>
                <Col lg={true} className="d-flex justify-content-center">
                    <Jumbotron style={{ background: '#190013' }}>

                        <ul style={{ listStyle: 'none', paddingLeft:'1px'  }}>
                            <li style={{ color: '#988c61' }}>Customized Sportsbook website </li>
                            <li style={{ color: '#988c61' }}>Online/Phone Services</li>
                            <li style={{ color: '#988c61' }}>Instant Activity Report</li>
                            <li style={{ color: '#988c61' }}>Customizable</li>
                            <li style={{ color: '#988c61' }}>Agent profile </li>
                        </ul>
                    </Jumbotron>
                </Col>
                <Col lg={true} className="d-flex justify-content-center">
                    <Jumbotron style={{ background: '#190013' }}>

                        <ul style={{ listStyle: 'none', textAlign: 'center', paddingLeft: '1px' }}>
                            <li style={{ color: '#988c61' }}>Customizable Player Profile </li>
                            <li style={{ color: '#988c61' }}>Customizable limits</li>
                            <li style={{ color: '#988c61' }}>Master Account Management</li>
                            <li style={{ color: '#988c61' }}>Customizable Subagent Report
</li>
                            <li style={{ color: '#988c61' }}>Management of Line Types
</li>
                        </ul>
                    </Jumbotron>
                </Col>
                <Col lg={true} className="d-flex justify-content-center">
                    <Jumbotron style={{ background: '#190013', textAlign:'center' }}>

                        <ul style={{ listStyle: 'none', paddingLeft:'1px' }}>
                            <li style={{ color: '#988c61' }}>Email Notification System</li>
                            <li style={{ color: '#988c61' }}>Limit all Services</li>
                            <li style={{ color: '#988c61' }}>Line Mover Option</li>

                        </ul>
                    </Jumbotron>
                </Col>
            </Row>


        </Container>
    )
}


