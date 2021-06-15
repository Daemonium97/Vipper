import React from 'react'
import '../views/Home.css'
import {Carousel, Container, Row, Col} from 'react-bootstrap'
import image1 from '../images_home/1.jpg'
import image2 from '../images_home/2.jpg'
import image3 from '../images_home/3.jpg'
import image4 from '../images_home/4.jpg'
import image5 from '../images_home/5.jpg'
import image6 from '../images_home/6.jpg'

export const Home = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="imageHome"
                    src={image1}
                    alt=""
                />

            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="imageHome"
                    src={image2}
                    alt=""
                />

            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="imageHome"
                    src={image3}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="imageHome"
                    src={image4}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="imageHome"
                    src={image5}
                    alt=""
                />
            </Carousel.Item>
        </Carousel>

    )
}

export const Business = () => {
    return(
        <Container fluid className="all2">
            <Row>
                <Col lg={true}>
                    <h1 id="h1">
                        <div id="titleHome1">YOUR BUSINESS</div>
                        <div id="titleHome2">IS OUR BUSINESS!</div>
                    </h1>

                    <div>
                        <p id="mai">When you win, we win! and that is why we are compromised. With VIP Per Head services, your sportsbook will have the latest technology enabling you to run their business quickly, efficiently, and without complications. We have everything you need to operate a successful betting business.</p>
                    </div>

                </Col>
                <Col lg={true}>
                    <div className="divBusi">
                        <img src={image6} alt="" id="ImageBusi" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


