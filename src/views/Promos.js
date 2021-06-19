import React from 'react'
import { Container, Row } from 'react-bootstrap'
import promo1 from '../promos_images/Promo1.jpg'
import promo2 from '../promos_images/pormo2.jpg'
import promo3 from '../promos_images/promo3.jpg'
import promo4 from '../promos_images/promo4.jpg'
import promo5 from '../promos_images/promo5.jpg'
import '../views/Promos.css'


export const Promos = () => {
    return (
        <Container fluid>
            <Row style={{ background: 'black', textAlign: 'center', justifyContent: 'center', paddingTop:'45px' }}>
                
                <div style={{ textAlign: 'center' , paddingBottom:'70px'}} className="to">
                    <h2 style={{ color: '#8e834d' }} >
                        VIP PER HEAD PROMOS
                    </h2>
                    <p style={{ color: 'white' }}>VIP Per Head welcomes you to our platform with different promotions that you can take advantage of from the moment you sign
</p>
                    <p style={{ color: 'white' }}>up. Our promos must be selected before the start of the first active week to be valid.</p>
                </div>

            </Row>
            <Row style={{justifyContent:'center', background:'black'}}>
                <img src={promo1} alt="" id="ImageP" />
            </Row>
            <Row style={{justifyContent:'center', background: 'black'}}>
            <img src={promo2} alt="" style={{padding:'20px 10px 15px 15px'}} id="ImageP"/> 
            <img src={promo3} alt="" style={{padding:'20px 15px 15px 10px'}} id="ImageP"/> 
            </Row>
            <Row style={{justifyContent:'center', background: 'black', paddingBottom:'50px'}}>
            <img src={promo4} alt="" style={{padding:'10px 10px 25px 15px'}} id="ImageP"/> 
            <img src={promo5} alt="" style={{padding:'10px 15px 25px 10px'}} id="ImageP"/> 
            </Row>
        </Container>
    )
}


