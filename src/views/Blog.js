import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../views/Blog.css'
import money from '../blog_images/blog-investing.jpg'
import web from '../blog_images/blog-professional-web.jpg'
import mf from '../blog_images/blog-sportsbook-bussiness.jpg'
import phone from '../blog_images/blog-grow-betting.jpg'
import share from '../icons/pngegg.png'


export const Blog = () => {
    return (
        <Container fluid>
            <Row style={{ background: 'black', paddingTop: '60px' }}>
                <Col lg={4}>
                    
                </Col>
                <Col lg={4}>
                    <div>
                        <img src={money} alt="" id="ImageBlo" style={{ padding: '40px 1px 1px 1px' }} />
                        <div style={{ padding: '9px 0px 0px 0px' }}>
                            <p style={{ color: 'white' }}>Posted by <span style={{ color: '#727047' }}>Jhon</span></p>
                            <p style={{ color: 'white' }}>09 February  in <span style={{ color: '#727047' }}>News</span></p>
                        </div>
                        <div>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>2020 COLLEGE BASKETBALL REGULAR</p>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>SEASON BETTING PREDICTIONS</p>
                            <p style={{ color: 'white' }}>With the 2019/2020 College Basketball
</p>
                            <p style={{ color: 'white' }}>season in its early st…
</p>
                        </div>
                    </div>
                    <div>
                        <img src={web} alt="" id="ImageBlo" style={{ padding: '40px 1px 1px 1px' }} />
                        <div style={{ padding: '9px 0px 0px 0px' }}>
                            <p style={{ color: 'white' }}>Posted by <span style={{ color: '#727047' }}>Jhon</span></p>
                            <p style={{ color: 'white' }}>09 February  in <span style={{ color: '#727047' }}>News</span></p>
                        </div>
                        <div>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>2020 COLLEGE BASKETBALL REGULAR</p>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>SEASON BETTING PREDICTIONS</p>
                            <p style={{ color: 'white' }}>With the 2019/2020 College Basketball
</p>
                            <p style={{ color: 'white' }}>season in its early st…
</p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                <div>
                        <img src={mf} alt="" id="ImageBlo" style={{ padding: '40px 1px 1px 1px' }} />
                        <div style={{ padding: '9px 0px 0px 0px' }}>
                            <p style={{ color: 'white' }}>Posted by <span style={{ color: '#727047' }}>Jhon</span></p>
                            <p style={{ color: 'white' }}>09 February  in <span style={{ color: '#727047' }}>News</span></p>
                        </div>
                        <div>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>2020 COLLEGE BASKETBALL REGULAR</p>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>SEASON BETTING PREDICTIONS</p>
                            <p style={{ color: 'white' }}>With the 2019/2020 College Basketball
</p>
                            <p style={{ color: 'white' }}>season in its early st…
</p>
                        </div>
                    </div>
                    <div>
                        <img src={phone} alt="" id="ImageBlo" style={{ padding: '40px 1px 1px 1px' }} />
                        <div style={{ padding: '9px 0px 0px 0px' }}>
                            <p style={{ color: 'white' }}>Posted by <span style={{ color: '#727047' }}>Jhon</span></p>
                            <p style={{ color: 'white' }}>09 February  in <span style={{ color: '#727047' }}>News</span></p>
                        </div>
                        <div>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>2020 COLLEGE BASKETBALL REGULAR</p>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>SEASON BETTING PREDICTIONS</p>
                            <p style={{ color: 'white' }}>With the 2019/2020 College Basketball
</p>
                            <p style={{ color: 'white' }}>season in its early st…
</p>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}


