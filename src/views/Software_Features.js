import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import '../views/Software_Features.css'

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
            <Row >

                <Col lg={true}>
                    <div className="fut1">
                        <img src={book} alt="" id="ImageSports" />
                    </div>
                </Col>
                <Col lg={true} >
                    <div className="fut1">
                        <img src={liveC} alt="" id="ImageSports" />
                    </div>
                </Col>
                <Col lg={true}>
                    <div className="fut1">
                        <img src={online} alt="" id="ImageSports" />
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col lg={true}>
                    <div className="fut1">
                        <img src={liveB} alt="" id="ImageSports" />
                    </div>
                </Col>
                <Col lg={true}>
                    <div className="fut1">
                        <img src={horses} alt="" id="ImageSports" />
                    </div>
                </Col>
                <Col lg={true}>
                    <div className="fut1">
                        <img src={call} alt="" id="ImageSports" />
                    </div>
                </Col>
            </Row>
            <div id="services2">
                <span>AND MUCH MORE</span>
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
                    <div className="square" style={{ background: '#190013' }}>
                        <div className="content">
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{color:'#988c61'}}>Customized Sportsbook website </li>
                                <li style={{color:'#988c61'}}>Online/Phone Services</li>
                                <li style={{color:'#988c61'}}>Instant Activity Report</li>
                                <li style={{color:'#988c61'}}>Customizable</li>
                                <li style={{color:'#988c61'}}>Agent profile </li>
                            </ul>

                        </div >
                    </div>
                </Col>
                <Col lg={true} className="d-flex justify-content-center">
                    <div className="square" style={{ background: '#190013' }}>
                        <div className="content">
                            <ul style={{listStyle:'none', textAlign:'center', paddingRight:'7px'}}>
                                <li style={{color:'#988c61'}}>Customizable Player Profile </li>
                                <li style={{color:'#988c61'}}>Customizable limits</li>
                                <li style={{color:'#988c61'}}>Master Account Management</li>
                                <li style={{color:'#988c61'}}>Customizable Subagent Report
</li>
                                <li style={{color:'#988c61'}}>Management of Line Types
</li>
                            </ul>

                        </div>
                    </div>
                </Col>
                <Col lg={true} className="d-flex justify-content-center">
                <div className="square" style={{ background: '#190013' }}>
                        <div className="content">
                            <ul style={{listStyle:'none'}}>
                                <li style={{color:'#988c61'}}>Email Notification System</li>
                                <li style={{color:'#988c61'}}>Limit all Services</li>
                                <li style={{color:'#988c61'}}>Line Mover Option</li>
                                
                            </ul>

                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={true}  className="d-flex justify-content-center">
                <div className="joinText">
                    <h2>
                        <div style={{ color: '#8f8753' }}>JOIN THE SELECT GROUP OF BOOKIES THAT USE VIP PER HEAD TODAY.</div>
                        <div style={
                            { textAlign: 'center', color: '#aea46a' }}>Complete the form and access a free 3-week trial.</div>
                    </h2>
                    <button class="custom-btn btn-5"
                        style={{
                            marginLeft: '490px',
                            color: 'black',
                            background: '#716a43',
                            marginTop: '30px',
                            fontSize: '15px',
                            fontWeight: 'bold'


                        }}><span>JOIN TODAY</span></button>
                </div>
                </Col>
            </Row>

        </Container>
    )
}


