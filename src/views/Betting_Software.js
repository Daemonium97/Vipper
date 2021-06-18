import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../views/Betting_Software.css'

export const Betting_Software = () => {
    return (
        <Container fluid style={{ background: 'black', paddingTop: '50px', paddingBottom:'50px' }}>
            <Row className="d-flex justify-content-center">
                <Col lg={true} >
                    <div style={{ background: '#23001a' }} className="text1">
                        <p style={{ color: 'white' }}>VIP Per Head works with the best software developers on the
                            </p>
                        <p style={{ color: 'white' }}>market to create a robust, agile, and dynamic platform that
                        </p>
                        <p style={{ color: 'white' }}>will allow the bookie to run their betting business from
                        </p>
                        <p style={{ color: 'white' }} id="pS">anywhere in the world at any time of the day.
                        </p>
                        <p style={{ color: 'white' }}>This software has the highest security and privacy standards,</p>
                        <p style={{ color: 'white' }}>so the bookie can rest assured that third parties can’t access</p>
                        <p style={{ color: 'white' }}>his business’s sensitive information and his clients.</p>
                    </div>
                   
                </Col>
                <Col lg={true}>
                <div style={{ background: '#52491e' }} className="text2">
                        <p style={{ color: 'white' }}>At VIP Per Head, technology, processes, and people work as a
</p>
                        <p style={{ color: 'white' }}>single well-geared machine to ensure the software is always
</p>
                        <p style={{ color: 'white' }}>working correctly.The VIP Per Head bookie software will give
</p>
                        <p style={{ color: 'white' }} id="pS">the bookie complete control of his betting business.</p>
                        <p style={{ color: 'white' }}>The bookie can access its administration dashboard 24</p>
                        <p style={{ color: 'white' }}>hours a day from anywhere globally with an internet</p>
                        <p style={{ color: 'white' }}>connection. The dashboard information is updated in real</p>
                        <p style={{color:'white'}}>time with all the activities and movements in the betting
                        </p>
                        <p style={{color:'white'}}>business.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


