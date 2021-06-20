import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


import vip from '../icons/VIPPerHead_logo.png'
import '../components/Footer.css'


export const Footer = () => {  
    return (
        <Container fluid style={{ background: '#1b0015' }}>
            <Row style={{background: 'linear-gradient(90deg, rgba(108,93,55,1) 21%, rgba(199,182,136,1) 41%, rgba(250,229,175,1) 61%, rgba(68,50,18,1) 80%)', paddingTop:'10px'}}></Row>
            <Row>
                <Col lg={true} style={{}} className="d-flex justify-content-start">
                    <img src={vip} id="perhead" alt="" />
                </Col>
                <Col lg={true} id="colu1">
                    <div className="num">
                        <div style={{ color: '#aca375' }}>1-888-992-3891</div>
                        <div style={{ color: 'white' }}>Call Us for Free US</div>

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
                                <a href="fasdas"><img alt="" src="https://img.icons8.com/nolan/37/facebook.png" style={{paddingTop:'3px'}}/></a>
                                <a href="sdsa" id="in">in</a>
                                <a href="asd"><img alt="" src="https://img.icons8.com/nolan/37/twitter.png" style={{paddingTop:'3px'}}/></a>
                                
                            </div>


                        </div>
                        <div className="main2">
                            <div className="lan">
                                <a href="asd" style={{color: '#aca375'}}>EN</a>
                                <span style={{ color: 'white' }}> | </span>
                                <a href="asd">ES</a>
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{paddingBottom: '20px'}}>
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }} >
                    <div className="be">PRODUCTS </div>
                </Col>
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }}><div className="be">BETTING SOFTWARE</div> </Col>
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }}>
                    <div className="be">
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
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }}><div className="be">PROMOS</div></Col>
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }}>
                    <div className="be">BENEFITS</div>
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
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }}><div className="be">CONTACT US</div></Col>
                <Col lg={true} style={{ color: '#aca375', fontSize: '25px' }}> <div className="be">QUICK CONTACT</div></Col>
            </Row>
            <Row style={{ justifyContent: 'space-between', alignItems: 'center', background: '#151315' }}>
                
                <div className="fu">
                    <ul>
                        <li style={{ color: '#8d7e4d', fontSize: '16px' }}>GLOSAARY</li>
                        <li style={{ color: '#8d7e4d', fontSize: '16px' }}>FAQ</li>
                        <li style={{ color: '#8d7e4d', fontSize: '16px' }}>SITE MAP</li>
                        <li style={{ color: '#8d7e4d', fontSize: '16px' }}>SIGN UP</li>
                        <li style={{ color: '#8d7e4d', fontSize: '16px' }}>ICONO</li>
                    </ul>
                    
                </div>
                <span style={{ color: '#8d7e4d' }}>Copyright 2010 - 2019 VIP Per Head</span>


            </Row>
        </Container>
    )
}