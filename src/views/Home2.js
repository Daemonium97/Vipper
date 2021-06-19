import React from 'react'
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap'
import '../views/Home2.css'

import image1 from '../images_home/1.jpg'
import image2 from '../images_home/2.jpg'
import image3 from '../images_home/3.jpg'
import image4 from '../images_home/4.jpg'
import image5 from '../images_home/5.jpg'
import image6 from '../images_home/6.jpg'
import call from '../features_images/callcenter.jpg'
import horses from '../features_images/horses.jpg'
import liveB from '../features_images/livebetting.jpg'
import liveC from '../features_images/livecasino.jpg'
import online from '../features_images/online-casino.jpg'
import book from '../features_images/sportsbook.jpg'
import share from '../icons/pngegg.png'

export const Home2 = () => {
    return (
        <Container fluid>
            <Row style={{ background: 'black' }}>
                <Col lg={6}>
                    <div className="ti" style={{ padding: '110px 2px 10px 2px', textAlign: 'center' }}>
                        <h3 style={{ color: '#ccc59e' }}>YOUR BUSINESS IS</h3>
                        <h3 style={{ color: '#8e834d' }}>OUR BUSINESS!</h3>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'white', fontSize: '22px' }}>When you win, we win! and that is why we are compromised. With</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>VIP Per Head services, your sportsbook will have the latest</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>technology enabling you to run their business quickly, efficiently, and</p>
                        <p style={{ color: 'white', fontSize: '22px' }}>without complications. We have everything you need to operate a</p>
                        <p style={{ color: 'white', fontSize: '22px', paddingBottom: '30px' }}>successful betting business.</p>
                    </div>
                </Col>
                <Col lg={6}>
                    <img src={image6} alt="" id="ImagePro" />
                </Col>
            </Row>
            <Row style={{ background: '#210019', justifyContent:'center', paddingBottom:'50px' }}>

                <div className="divHome1" style={{ textAlign: 'center', justifyContent: 'center', paddingTop: '50px' }}>
                    <h3 style={{ color: 'white', paddingBottom: '20px' }}>A PREMIUM EXPERIENCE</h3>
                    <h3 style={{ color: '#8e834d', paddingBottom: '50px' }}>FOR EVERYONE</h3>
                    <p style={{ color: 'white' }}>VIP Per Head is a company focused on providing the best Pay Per Head service on the market. We have designed a superior pay-per-head service for</p>
                    <p style={{ color: 'white' }}>professional bookies who demand the latest technologies, the best customer service, and the most comprehensive digital tools that will enable you to</p>
                    <p style={{ color: 'white',paddingBottom:'40px' }}>manage your business anytime and anywhere.</p>
                    <h4 style={{color:'white', fontSize:'40px'}}>THE BEST BETTING SERVICES</h4>

                </div>


            </Row>
            <Row style={{background: '#210019', justifyContent:'space-around'}}>
                <Col lg={4}>
                    <div style={{textAlign:'center'}}>
                     <img src={book} alt="" id="ImagesMain"/> 
                     <p style={{color:'white',fontSize:'24px'}}>Five-star experience, solid platform,</p>
                        <p style={{color:'white',fontSize:'24px'}}>secure, and easy to use. Your customers</p>
                        <p style={{color:'white',fontSize:'24px'}}>will be able to place bets online 24/7</p>  
                    </div>
                </Col>
                <Col lg={4}>
                    <div style={{textAlign:'center'}}>
                      <img src={liveC} alt="" id="ImagesMain"/>  
                      <p style={{color:'white',fontSize:'24px'}}>Players can access our VIP game rooms</p>
                        <p style={{color:'white',fontSize:'24px'}}>with first-rate dealers that will make sure</p>
                        <p style={{color:'white',fontSize:'24px'}}>to meet all expectations.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div style={{textAlign:'center'}}>
                        <img src={online} alt="" id="ImagesMain" />
                        <p style={{color:'white',fontSize:'24px'}}>Whether it’s on a phone, computer, or</p>
                        <p style={{color:'white',fontSize:'24px'}}>tablet, we have a wide range of casino</p>
                        <p style={{color:'white',fontSize:'24px'}}>games to choose from.</p>
                    </div>
                    
                </Col>
            
            
            
            </Row>

        </Container>
    )
}


