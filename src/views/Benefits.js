import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import bene1 from '../benefits_images/Bennefits1.jpg'
import bene2 from '../benefits_images/Bennefits2.jpg'
import bene3 from '../benefits_images/Bennefits3.jpg'
import '../views/Benefits.css'

export const Benefits = () => {
    return (
        <Container fluid style={{ background: 'black', padding: '40px' }}>
            <div className="titles">
                <h2>VIP PER HEAD</h2>
                <h3>REFERRAL PROGRAM</h3>
            </div>


            <Row style={{ paddingBottom: '20px' }}>

                <Col lg={true}>
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
                <div>
                    <Card className="bg-dark text-white" style={{ padding: '1px' }}>
                        <Card.Img src={bene2} alt="" id="imageB2" />
                        <Card.ImgOverlay>
                            <div style={{ background: '#23001a' }} className="textA">
                                <p>Such as: free week, discounts of up to
                                </p>
                                <p style={{color:'#8e834c'}}>50% off in a week,</p>
                                <p>best prices and percentage</p>
                                <p>discounts on our services, and more!
                                </p>

                            </div>

                        </Card.ImgOverlay>
                    </Card>
                </div>



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
                    <img src={bene3} alt="" id="imageB1" />
                </Col>
            </Row>
        </Container>
    )
}


