import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../views/Products.css'
import casino from '../products_images/casino.jpg'
import epos from '../products_images/epos.jpg'
import skin from '../products_images/skinpremium.jpg'
import sport from '../products_images/sportbooks.jpg'

export const Products = () => {
    return (
        <Container fluid>
            <Row style={{ background: 'black', textAlign: 'center', justifyContent: 'center' }} >
                <div style={{ padding: '80px 4px 90px 4px', fontSize: '25px' }}>
                    <p style={{ color: 'white' }}>Our developers offer a wide variety of designs to supply your need. They fulfill practical solutions for those who
                    </p>
                    <p style={{ color: 'white' }}>have physical control, such as restaurants and sports bars, to be able to meet the most demanding
                </p>
                    <p style={{ color: 'white' }}>customers.</p>
                </div>
            </Row>
            <Row style={{ background: '#1f0017' }}>
                <Col lg={4}>
                    <div style={{ padding: '140px 2px 10px 2px', textAlign: 'center' }}>
                        <h4 style={{ color: '#b2a879', fontSize: '70px' }}>
                            SPORTSBOOK
                        </h4>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'white', fontSize: '22px' }}>Our developers have expertly created
</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>a sportsbook software ready to be</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>installed on your website and entertain
</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>your visitors. You will never be short of</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>sharp lines and betting options.</p>
                    </div>
                </Col>
                <Col lg={true}>
                    <img src={sport} alt="" id="ImagePro" style={{ padding: '50px 30px 70px 30px' }} />
                </Col>


            </Row>
            <Row style={{ background: 'black' }}>
                <Col lg={4}>
                    <div style={{ padding: '140px 2px 10px 2px', textAlign: 'center' }}>
                        <h3 style={{ color: '#b2a879', fontSize: '70px' }}>SKINS</h3>
                        <h3 style={{ color: '#b2a879', fontSize: '70px' }}>Premium</h3>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'white', fontSize: '22px' }}>The best designer has created</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>premium skins. We have a wide variety</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>for you to decide which one suits your
</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>brand best.</p>
                    </div>
                </Col>
                <Col lg={true}>
                    <img src={skin} alt="" id="ImagePro" style={{ padding: '50px 30px 70px 30px' }} />
                </Col>
            </Row>
            <Row style={{ background: '#1f0017' }}>
                <Col lg={4}>
                    <div style={{ padding: '140px 2px 10px 2px', textAlign: 'center' }}>
                        <h3 style={{ color: '#b2a879', fontSize: '70px' }}>EPOS</h3>
                        
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'white', fontSize: '22px' }}>EPOS stands for Electronic Point Of Sale.</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>This is an essential technology
</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>designed for businesses that manage
</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>customers virtually and in person. This </p>
                        <p style={{ color: 'white', fontSize: '22px' }}>combination of software and</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>hardware will ensure you can safely
</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>administrate your business.
</p>

                    </div>
                </Col>
                <Col lg={true}>
                    <img src={epos} alt="" id="ImagePro" style={{ padding: '50px 30px 70px 30px' }} />
                </Col>
            </Row>
            <Row style={{ background: 'black' }}>
                <Col lg={4}>
                    <div style={{ padding: '140px 2px 10px 2px', textAlign: 'center' }}>
                        <h3 style={{ color: '#b2a879', fontSize: '70px' }}>CASINO</h3>
                        
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'white', fontSize: '22px' }}>We are affiliated with the best casino</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>games. Ready for you to add to your</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>website.</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>Your customers will have loads of fun
</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>playing on these fantastic casinos.</p>
                        
                    </div>
                </Col>
                <Col lg={true}>
                    <img src={casino} alt="" id="ImagePro" style={{ padding: '50px 30px 70px 30px' }} />
                </Col>
            </Row>
            <Row style={{ background: 'black', textAlign: 'center', justifyContent: 'center', paddingBottom:'80px', paddingTop:'80px' }}>
                <div>
                    <p style={{color:'#a4a776', fontSize:'30px'}}>JOIN THE SELECT GROUP OF BOOKIES THAT USE VIP PER HEAD TODAY.</p>
                    <p style={{color:'#90985a',fontSize:'25px'}}>Complete the form and access a free 3-week trial.</p>
                    <button class="custom-btn bt-5"
                    style={{
                        border:'none',
                        borderRadius:'3px',
                        color: 'black',
                        background: '#716a43',
                        marginTop: '20px',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        width: '110px',
                        height:'40px'
                    }}><span>JOIN TODAY</span></button>

                </div>

            </Row>



        </Container>

    )
}


