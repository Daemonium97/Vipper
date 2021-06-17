import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../icons/mainLogo.png'


export const Footer = () => {
    return (
        <Container fluid style={{ background: '#170512' }}>
            <Row>
                <Col lg={true}>
                    <img src={Logo} alt="" />
                </Col>
                <Col lg={true}>
                    <div>
                        <div>1-888-992-3891</div>
                        <div>Call Us for Free Us</div>
                    </div>
                    <div>
                        <div >01-800-099-0754</div>
                        <div>Call Us for Free Mexico</div>
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


