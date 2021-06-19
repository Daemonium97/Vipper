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
            <Row style={{ background: '#210019', justifyContent: 'center', paddingBottom: '50px' }}>

                <div className="divHome1" style={{ textAlign: 'center', justifyContent: 'center', paddingTop: '50px' }}>
                    <h3 style={{ color: 'white', paddingBottom: '20px' }}>A PREMIUM EXPERIENCE</h3>
                    <h3 style={{ color: '#8e834d', paddingBottom: '50px' }}>FOR EVERYONE</h3>
                    <p style={{ color: 'white' }}>VIP Per Head is a company focused on providing the best Pay Per Head service on the market. We have designed a superior pay-per-head service for</p>
                    <p style={{ color: 'white' }}>professional bookies who demand the latest technologies, the best customer service, and the most comprehensive digital tools that will enable you to</p>
                    <p style={{ color: 'white', paddingBottom: '40px' }}>manage your business anytime and anywhere.</p>
                    <h4 style={{ color: 'white', fontSize: '40px' }}>THE BEST BETTING SERVICES</h4>

                </div>


            </Row>
            <Row style={{ background: '#210019', justifyContent: 'space-around' }}>
                <Col lg={4}>
                    <div style={{ textAlign: 'center' }}>
                        <img src={book} alt="" id="ImagesMain" />
                        <p style={{ color: 'white', fontSize: '24px' }}>Five-star experience, solid platform,</p>
                        <p style={{ color: 'white', fontSize: '24px' }}>secure, and easy to use. Your customers</p>
                        <p style={{ color: 'white', fontSize: '24px' }}>will be able to place bets online 24/7</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div style={{ textAlign: 'center' }}>
                        <img src={liveC} alt="" id="ImagesMain" />
                        <p style={{ color: 'white', fontSize: '24px' }}>Players can access our VIP game rooms</p>
                        <p style={{ color: 'white', fontSize: '24px' }}>with first-rate dealers that will make sure</p>
                        <p style={{ color: 'white', fontSize: '24px' }}>to meet all expectations.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div style={{ textAlign: 'center' }}>
                        <img src={online} alt="" id="ImagesMain" />
                        <p style={{ color: 'white', fontSize: '24px' }}>Whether it’s on a phone, computer, or</p>
                        <p style={{ color: 'white', fontSize: '24px' }}>tablet, we have a wide range of casino</p>
                        <p style={{ color: 'white', fontSize: '24px' }}>games to choose from.</p>
                    </div>

                </Col>

            </Row>

            <Row style={{ background: '#210019', justifyContent: 'space-around', paddingTop: '40px' }}>
                <Col lg={4}>
                    <div style={{ textAlign: 'center' }}>
                        <img src={liveB} alt="" id="ImagesMain" />
                        <p style={{ color: 'white', fontSize: '24px' }}>Live betting available in all major leagues</p>
                        <p style={{ color: 'white', fontSize: '24px' }}>and sports.</p>

                    </div>
                </Col>
                <Col lg={4}>
                    <div style={{ textAlign: 'center' }}>
                        <img src={horses} alt="" id="ImagesMain" />
                        <p style={{ color: 'white', fontSize: '24px' }}>Our racebook offers full features and the</p>
                        <p style={{ color: 'white', fontSize: '24px' }}>availability to bet on the best tracks all</p>
                        <p style={{ color: 'white', fontSize: '24px' }}>year round.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div style={{ textAlign: 'center' }}>
                        <img src={call} alt="" id="ImagesMain" />
                        <p style={{ color: 'white', fontSize: '24px' }}>VIP pay per head customer service is</p>
                        <p style={{ color: 'white', fontSize: '24px' }}>available 24/7/365 Phone, chat, and email. </p>

                    </div>

                </Col>

            </Row>
            <Row style={{ background: 'black', justifyContent: 'center', paddingTop: '80px' }}>
                <div className="divHome2" style={{ textAlign: 'center' }}>
                    <h7 style={{ color: '#72672b' }}>WHY VIP PER HEAD</h7>
                    <p style={{ color: 'white', paddingTop: '70px' }}>VIP Per Head is a company focused on providing the best Pay Per Head service on the market. The VIP Per Head team has more than 20 years</p>
                    <p style={{ color: 'white' }}>of experience in the industry. We know the needs of bookies and gamblers in depth. All this knowledge translates into a Pay Per Head service, whose</p>
                    <p style={{ color: 'white', paddingBottom: '40px' }}>main Fobjective is to provide a premium experience for everyone.</p>
                    <p style={{ color: 'white' }}>Our platform is a state-of-the-art white label bookmaking management solution built ourselves by our in-house team of experts.</p>

                </div>
            </Row>
            <Row style={{ background: 'black', justifyContent: 'center', padding: '80px 0px 80px 0px' }}>

                <Col lg={6}>
                    <div className="divHome3" style={{ textAlign: 'center' }}>
                        <h2 style={{ color: '#72672b', paddingTop: '50px' }}>THE BEST ALLY FOR YOUR</h2>
                        <h2 style={{ color: '#72672b', paddingBottom: '40px' }}>BETTING BUSINESS</h2>
                        <p style={{ color: 'white', padding: '0px 4px 30px 20px' }}>We have hired professional bookies to tailor VIP per head as a profitable and safe betting business.</p>
                        <p style={{ color: 'white', padding: '0px 4px 30px 20px' }}>Vip Per Head tools and services allow bookies to create a business that operates 24 hours a day, seven days a week.</p>
                        <p style={{ color: 'white', padding: '0px 4px 0px 20px' }}>The bookie will be able to delegate a large part of the operational task to the Vip Per Head team, which means that your business will continue to function even while you are asleep, and best of all, it will continue to generate income</p>

                    </div>

                </Col>
                <Col lg={6}>
                    <div className="divHome3" style={{ textAlign: 'center' }}>
                        <h2 style={{ color: '#72672b', paddingTop: '50px' }}>LOW</h2>
                        <h2 style={{ color: '#72672b', paddingBottom: '40px' }}>OPERATION COST</h2>
                        <p style={{ color: 'white', paddingBottom: '60px' }}>Using VIP Per Head services is the best way to establish a fully functional betting business with large companies’ features at a low operating cost.</p>
                        <p style={{ color: 'white', paddingBottom: '60px' }}>VIP Per Head charges a weekly fee per active player. Bookies will be able to use all the tools and services of VIP Per Head and will only have to pay for players who have placed a bet during the month.</p>
                        <p style={{ color: 'white' }}>VIP Per Head charges a weekly fee per active player. Bookies will be able to use all the tools and services of VIP Per Head and will only have to pay for players who have placed a bet during the month.</p>



                    </div>
                </Col>
            </Row>

            <Row style={{ background: '#030318', padding: '70px 0px 70px 0px', justifyContent: 'center' }}>

                <div className="divInter" style={{ textAlign: 'center' }}>
                    <h4 style={{ color: 'white' }}>A FULL SET OF SERVICES</h4>

                </div>


            </Row >


            <Row style={{ background: '#030318', justifyContent: 'space-around', padding: '0px 0px 70px 0px' }}>

                <div className="divHome4" style={{ textAlign: 'center' }}>

                    <ul style={{ listStyle: 'none' }}>
                        <li style={{ color: 'white' }}>More than 20 years of experience.</li>
                        <li style={{ color: 'white' }}>Trust and discretion.</li>
                        <li style={{ color: 'white' }}>Professional sportsbook site</li>
                        <li style={{ color: 'white' }}>Bilingual staff</li>
                        <li style={{ color: 'white' }}>Reduce your cost</li>
                        <li style={{ color: 'white' }}>The best product in the market</li>
                        <li style={{ color: 'white' }}>Online and phone wagering</li>
                        <li style={{ color: 'white' }}>24/7 service</li>
                        <li style={{ color: 'white' }}>Injury reports</li>
                    </ul>
                </div>
                <div className="divHome4">
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{ color: 'white' }}>Line management</li>
                        <li style={{ color: 'white' }}>Accurate Injury Reports</li>
                        <li style={{ color: 'white' }}>Agent Lines Management</li>
                        <li style={{ color: 'white' }}>Bilingual Staff Eng/spa</li>
                        <li style={{ color: 'white' }}>Customize Player Profile</li>
                        <li style={{ color: 'white' }}>Customize Your Website</li>
                        <li style={{ color: 'white' }}>Highly Secure Website</li>
                        <li style={{ color: 'white' }}>Lines Monitoring 24/7</li>

                    </ul>
                </div>
                <div className="divHome4">
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{ color: 'white' }}>Live Casino</li>
                        <li style={{ color: 'white' }}>Mobile Interface</li>
                        <li style={{ color: 'white' }}>Online Casino</li>
                        <li style={{ color: 'white' }}>Online Reports</li>
                        <li style={{ color: 'white' }}>Pay Per Customer Activity</li>
                        <li style={{ color: 'white' }}>Privacy And Security</li>
                        <li style={{ color: 'white' }}>Racebook</li>
                        <li style={{ color: 'white' }}>Sharpest Lines in Industry</li>
                        <li style={{ color: 'white' }}>Real-Time Online Access To Accounts</li>

                    </ul>

                </div>

            </Row>

            <Row style={{ background: 'linear-gradient(to right, #000000, #15000a, #22081a, #250722, #1e0225)', padding: '50px 0px 40px 0px' }}>
                <Col lg={6}>
                    <div className="divHome5" style={{textAlign:'center'}}>
                        <h1 style={{ color: '#594c1f', padding:'30px 0px 30px 0px' }}>REGISTRATION NOW</h1>
                        <p style={{color:'white'}}>JOIN THE SELECT GROUP OF BOOKIES</p> 
                        <p style={{color:'white'}}>THAT USE VIP PER HEAD TODAY.</p> 
                        <p style={{color:'white'}}>COMPLETE THE FORM AND ACCESS A FREE 3-WEEK TRIAL.</p> 
                    </div>

                </Col>
                <Col lg={3}>
                    <div style={{textAlign:'center', alignItems:'center'}}>
                        <span id="uno">1</span>
                    </div>
                </Col>
                <Col lg={3}></Col>

            </Row>


        </Container>
    )
}


