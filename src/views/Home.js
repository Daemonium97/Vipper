import React from 'react'
import '../views/Home.css'
import { Carousel} from 'react-bootstrap'


import image1 from '../images_home/1.jpg'
import image2 from '../images_home/2.jpg'
import image3 from '../images_home/3.jpg'
import image4 from '../images_home/4.jpg'
import image5 from '../images_home/5.jpg'






export const Present = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="imageHome"
                    src={image1}
                    alt=""
                />

            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="imageHome"
                    src={image2}
                    alt=""
                />

            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="imageHome"
                    src={image3}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="imageHome"
                    src={image4}
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="imageHome"
                    src={image5}
                    alt=""
                />
            </Carousel.Item>
        </Carousel>

    )
}







