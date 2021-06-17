import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../icons/mainLogo.png'
import mic from '../icons/mic.png'
import vip from '../icons/VIPPerHead_logo.png'


export const Footer = () => {
    return (
        <Container fluid style={{ background: '#1b0015' }}>
            <Row>
                <Col lg={true} style={{}} className="d-flex justify-content-start">
                    <img src={vip} alt="" style={{
                        width: '450px',
                        height: '120px'

                    }} />
                </Col>
                <Col lg={true} style={{
                    display: 'flex',
                    justifyContent: 'end',
                    gap: '70px',
                    paddingTop: '50px'

                }}>
                    <div style={{ marginLeft: '190px' }}>
                        <div style={{ color: '#aca375' }}>1-888-992-3891</div>
                        <div style={{ color: 'white' }}>Call Us for Free Us</div>
                    </div>
                    <div>
                        <div style={{ color: '#aca375' }}>01-800-099-0754</div>
                        <div style={{ color: 'white' }}>Call Us for Free Mexico</div>
                    </div>
                </Col>
                <Col lg={true}>
                    <div className="mega d-flex justify-content-center">
                        <div className="main">
                            <div className="social">
                                <a href="#"><img src="http://www.dimecoti.com/_binalia/framework/v2/modules/WebBuilder/dimeco-web/template/images/footer.social.facebook.png" id="face" /></a>
                                <a href="#" id="in">in</a>
                                <img src={mic} id="mic" />
                            </div>


                        </div>
                        <div className="main2">
                            <div className="lan">
                                <a href="#">EN</a>
                                <span style={{ color: 'white' }}> | </span>
                                <a href="#">ES</a>
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }} className="d-flex justify-content-center">
                    PRODUCTS
                </Col>
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }}>BETTING SOFTWARE </Col>
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }}>
                    <div>
                        BETTING FEATURES
                    </div>
                    <div >
                        <ul style={{
                            listStyleType: 'none',
                            paddingLeft: '1px'

                        }}>
                            <li style={{ color: '#aca375' }}>Sports betting </li>
                            <li style={{ color: '#aca375' }}>Live betting </li>
                            <li style={{ color: '#aca375' }}>Mobile betting </li>
                            <li style={{ color: '#aca375' }}>Horses and racebook </li>
                            <li style={{ color: '#aca375' }}>Casino</li>
                            <li style={{ color: '#aca375' }}>Live Casino</li>
                            <li style={{ color: '#aca375' }}>Pools</li>
                            <li style={{ color: '#aca375' }}>Squares</li>
                        </ul>
                    </div>

                </Col>
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }}>PROMOS</Col>
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }}>
                    <div>BENEFITS</div>
                    <div>
                        <ul style={{
                            listStyleType: 'none',
                            paddingLeft: '1px'

                        }}>
                            <li style={{ color: '#aca375' }}>Referral Program</li>
                            <li style={{ color: '#aca375' }}>VIP Loyalty Program</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }}>CONTACT US</Col>
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }}>QUICK CONTACT</Col>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#151315' }}>
                <div style={{ color: '#8d7e4d', paddingLeft: '50px' }}>Copyright 2010 - 2019 VIP Per Head</div>
                <div >
                    <ul style={{
                        listStyle: 'none',
                        paddingLeft: '1px',
                        display: 'inline-flex',
                        gap: '30px',
                        paddingRight:'50px'

                    }}>
                        <li style={{ color: '#8d7e4d', fontSize: '16px' }}>GLOSAARY</li>
                        <li style={{ color: '#8d7e4d', fontSize: '16px' }}>FAQ</li>
                        <li style={{ color: '#8d7e4d', fontSize: '16px' }}>SITE MAP</li>
                        <li style={{ color: '#8d7e4d', fontSize: '16px' }}>SIGN UP</li>
                        <li style={{ color: '#8d7e4d', fontSize: '16px' }}>ICONO</li>
                    </ul>
                </div>


            </Row>
        </Container>
    )
}