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
                        width:'450px',
                        height: '120px',
                        
                    }}/>
                </Col>
                <Col lg={true} style={{ 
                    display: 'flex',
                    justifyContent: 'end',
                    gap: '70px',
                    paddingTop: '50px'
                    
                     }}>
                    <div style={{marginLeft: '190px'}}>
                        <div style={{color: '#aca375'}}>1-888-992-3891</div>
                        <div style={{color: 'white'}}>Call Us for Free Us</div>
                    </div>
                    <div>
                        <div style={{color: '#aca375'}}>01-800-099-0754</div>
                        <div style={{color: 'white'}}>Call Us for Free Mexico</div>
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
        </Container>
    )
}