import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import bene1 from '../benefits_images/Bennefits1.jpg'
import bene2 from '../benefits_images/Bennefits2.jpg'
import bene3 from '../benefits_images/Bennefits3.jpg'
import '../views/Benefits.css'

export const Benefits = () => {
    return (
        <Container fluid style={{ background: 'black', padding: '40px' }}>
            <div className="titles">
                <h2 style={{ color: '#8e834c' }}>VIP PER HEAD</h2>
                <Link to="/Benefits_Referral" style={{ textDecoration: 'none' }}>
                    <h3 style={{ color: '#645e44' }}>REFERRAL PROGRAM</h3>
                </Link>

            </div>


            <Row style={{ paddingBottom: '20px', paddingTop: '60px' }} >

                <Col lg={true} >
                    <h2>
                        <div style={{ color: 'white' }} id="subtitle1">VIP PER HEAD</div>
                        <div style={{ color: '#8e834d' }} id="subtitle2">LOYALTY PROGRAM</div>
                    </h2>
                    <div className="textB">
                        <p style={{ color: 'white' }}>Any client that has been with us for two seasons or</p>
                        <p style={{ color: 'white' }}>more and has made sure to keep a positive balance</p>
                        <p style={{ color: 'white' }}>will receive special prices throughout the year.</p>
                    </div>
                </Col>
                <Col lg={true}>
                    <img src={bene1} alt="" id="imageB1" />
                </Col>
            </Row>
            <Row >
                <Col lg={6}>
                    <img src={bene2} alt="" id="imageB2" />
                </Col>
                <Col lg={6}>
                    <Jumbotron style={{ background: '#190013', textAlign: 'center' }}>
                        <p style={{ color: 'white' }}>Such as: free week, discounts of up to</p>
                        <p style={{ color: '#8e834d' }}>50% off in a week,</p>
                        <p style={{ color: 'white' }}>best prices and percentage</p>
                        <p style={{ color: 'white' }}> discounts on our services, and more!</p>

                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col lg={true}>
                    <div className="textC">
                        <p style={{ color: 'white' }}>Contact us to let us know you are interested in the loyalty</p>
                        <p style={{ color: 'white' }}>program. We will run a study, and in less than 24 hours, you will
</p>
                        <p style={{ color: 'white' }}>be part of our closest client. Our representatives will ensure
</p>
                        <p style={{ color: 'white' }}>you can take your business to the next level!</p>
                    </div>
                </Col>
                <Col lg={true}>
                    <img src={bene3} alt="" id="imageB1" style={{ paddingBottom: '50px' }} />
                </Col>
            </Row>
        </Container>
    )
}

export const BenefitsR = () => {
    return (
        <Container fluid style={{ background: 'black' }}>
            <div className="titles">
                <Link to="/Benefits" style={{ textDecoration: 'none' }}>
                    <h2 style={{ color: '#645e44' }}>VIP PER HEAD</h2>
                </Link>
                <h3 style={{ color: '#8e834c' }}>REFERRAL PROGRAM</h3>

            </div>
            <Row>
                <Col lg={6}>
                    <h2>
                        <div style={{ color: 'white' }} id="subtitle1">REFERRAL</div>
                        <div style={{ color: '#8e834d' }} id="subtitle2">PROGRAM</div>
                    </h2>
                    <div>
                        <p style={{ color: 'white' }}>Many of our clients would love to have extra income
                        or earn commissions by referring friends to excellent
                        services. That is why we have decided to create our
                        referral program</p>
                        <p style={{ color: 'white' }}>Refer your friends to VIP per head. We will reward you
                        with a fantastic price
                        to your balance.
                        The reward depends on the referral you are sending.</p>
                        <p style={{color:'white'}}>If the bookie has 0- 25 bettors, you will earn 1 week’s
                        worth of the SERVICES BOOKIE CONTRACTED.</p>
                        <p style={{color:'white'}}>If the bookie has 26-50 bettors, you will earn 2 WEEKS
                            WORTH OF THE SERVICE THE BOOKIE CONTRACTED.</p>
                        <p style={{color:'white'}}>If the bookie has 51 or more bettors, you will earn 3
                        WEEKS WORTH OF THE SERVICES THE BOOKIE
                        CONTRACTED.</p>
                    </div>

                </Col>
                <Col lg={6}> </Col>
            </Row>

        </Container>
    )
}


