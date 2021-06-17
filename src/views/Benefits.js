import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import bene1 from '../benefits_images/Bennefits1.jpg'
import bene2 from '../benefits_images/Bennefits2.jpg'
import bene3 from '../benefits_images/Bennefits3.jpg'
import '../views/Benefits.css'

export const Benefits = () => {
    return (
       <Container fluid style={{background:'black', padding:'40px'}}>
           <div className="titles">
                   <h2>VIP PER HEAD</h2>
                   <h3>REFERRAL PROGRAM</h3>
               </div>
           <Row>
               
               <Col lg={true}>
                   <h2>
                       <div style={{color: 'white'}}>VIP PER HEAD</div>
                       <div style={{color:'#8e834d'}}>LOYALTY PROGRAM</div>
                   </h2>
               </Col>
               <Col lg={true}>
                   <img src={bene1} alt="" id="imageB1"/>
               </Col>
           </Row>
       </Container>
    )
}


