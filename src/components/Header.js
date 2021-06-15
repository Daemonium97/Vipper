import React from 'react'
import '../components/Header.css'
import { Container, Row, Col } from 'react-bootstrap'

function Header() {
    return (
        <Container fluid className="all">
            <Row>
                <Col lg={true} className="numbers">

                    <div >
                        <div>1-888-992-3891</div>
                        <div>Call Us for Free Us</div>
                    </div>
                    <div>
                        <div>01-800-099-0754</div>
                        <div>Call Us for Free Us</div>
                    </div>
                </Col>
                <Col lg={true}>
                    <div className="d-flex justify-content-center">
                        <img src="https://storage.googleapis.com/mmc-elcaribe-bucket/uploads/2020/06/67d60a00-casino-fondos-ue_20415256_20200417193134-5efa1cca01587.jpg" alt="" id="image" />
                    </div>

                </Col>
                <Col lg={true} >
                    <div className="mega d-flex justify-content-center">
                        <div className="main">
                            <div className="social">
                                <a href="#"><img src="http://www.dimecoti.com/_binalia/framework/v2/modules/WebBuilder/dimeco-web/template/images/footer.social.facebook.png" id="face" /></a>
                                <a href="#" id="in">in</a>
                                <img src="https://toppng.com/uploads/preview/interview-matchup-guest-icon-microphone-white-record-icon-white-11562988544xnmogc3pmb.png" id="mic" />
                            </div>


                        </div>
                        <div className="main2">
                            <div className="lan">
                                <a href="#">EN</a>
                                <span style={{color: 'white'}}> | </span>
                                <a href="#">ES</a>
                            </div>

                        </div>
                    </div>



                </Col>

            </Row>


        </Container>

    )
}

export default Header
