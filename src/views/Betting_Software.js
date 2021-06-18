import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../views/Betting_Software.css'
import casino from '../betting_software/casino-gold.png'
import horses from '../betting_software/horses-gold.png'
import liveB from '../betting_software/livebetting-gold.png'
import liveC from '../betting_software/livecasino-gold.png'
import mobile from '../betting_software/mobilebetting-gold.png'
import poker from '../betting_software/poker-gold.png'
import sportB from '../betting_software/sportbetting-gold.png'
import squares from '../betting_software/squares-gold.png'
import SB from '../betting_software/sportsbetting.jpg'

export const Betting_Software = () => {
    return (
        <Container fluid style={{ background: 'black', paddingTop: '50px' }}>
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
                        <p style={{ color: 'white' }}>time with all the activities and movements in the betting
                        </p>
                        <p style={{ color: 'white' }}>business.</p>
                    </div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center text-center">
                <div className="text3">
                    <p style={{ color: 'white' }}>With this software, the bookie can manage its players, set betting limits, set alerts for sports, lines, or players,</p>
                    <p style={{ color: 'white' }}>move lines, close the accounts of dangerous players or debtors, and many other features.</p>
                </div>
                <div className="diCo">
                    <img src={sportB} alt="" id="icoBS" />
                    <img src={liveB} alt="" id="icoBS" />
                    <img src={mobile} alt="" id="icoBS" />
                    <img src={horses} alt="" id="icoBS" />
                    <img src={casino} alt="" id="icoBS" />
                    <img src={liveC} alt="" id="icoBS" />
                    <img src={poker} alt="" id="icoBS" />
                    <img src={squares} alt="" id="icoBS" />
                </div>
            </Row>
            <Row>
                <Col lg={true}>
                    <h6>
                        <div style={{ color: 'white' }} id="sub1">SPORTS</div>
                        <div style={{ color: '#8e834d' }} id="sub2">BETTING</div>
                    </h6>
                    <div className="textoA">
                        <p style={{ color: 'white' }}>Bookies that use VIP Per Head services can offer their bettors</p>
                        <p style={{ color: 'white' }}>a wide range of betting options, including traditional but</p>
                        <p style={{ color: 'white' }}>popular leagues such as the NFL, MLB, NBA, and NHL. The</p>
                        <p style={{ color: 'white' }}>players will also access international betting options such as
                        </p>
                        <p style={{ color: 'white' }}>tennis, soccer, and even the Olympic games. VIP Per Head
                        </p>
                        <p style={{ color: 'white' }}>goes one step further and includes other types of betting
                        </p>
                        <p style={{ color: 'white' }} id="pS2">options such as politics and entertainment.</p>
                        <p style={{ color: '#8b7a42' }}>With a catalog of betting options as complete as this</p>
                        <p style={{ color: '#8b7a42' }}>one, bookies can serve all types of customers,</p>
                        <p style={{ color: '#8b7a42' }}>ensuring a more profitable betting business.</p>

                    </div>
                </Col>
                <Col lg={true}>
                    <img src={SB} alt="" id="imaBS" />
                </Col>
            </Row>
            <Row style={{ display: 'flex' }} className="d-flex justify-content-center">
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

            </Row>
        </Container>
    )
}


