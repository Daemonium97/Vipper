import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const About = () => {
    return (
        <Container fluid style={{ background: 'black', paddingBottom: '70px' }}>
            <Row style={{
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h2 style={{ textAlign: 'center' }}>
                    <div style={{
                        color: '#898149',
                        fontSize: '60px',
                        fontWeight: 'bolder',
                        paddingTop: '50px',
                        paddingBottom: '40px'
                    }}>WHY VIP PER HEAD</div>
                </h2>
                <div style={{ textAlign: 'center' }}>
                    <p style={{
                        display: 'block',
                        color: 'white',
                        fontSize:'24px'
                    }}>Vip Per Head is an offshore company located in Costa Rica. Our products and excellent </p>
                    <p style={{ color: 'white',
                        fontSize:'24px' }}>customer service make us one of the most prestigious per head in the industry. Our vision is to</p>
                    <p style={{ color: 'white',
                        fontSize:'24px' }}>be able to offer our clients a premium service at a very affordable cost. </p>
                </div>
                <div style={{ textAlign: 'center',
                paddingBottom:'90px'
             }}>
                    <p style={{ color: 'white',
                        fontSize:'24px' }}>In order to achive this vision real, we develop an infrastructure with the bests software and</p>
                    <p style={{ color: 'white',
                        fontSize:'24px' }}>hardware, as well as the best and most trained customer service staff. </p>
                </div>
                <div style={{textAlign:'center'}}>
                    <p style={{fontSize:'24px', color:'#ada172'}}>JOIN THE SELECT GROUP OF BOOKIES THAT USE VIP PER HEAD TODAY.</p>
                    <p style={{color:'#ada172', fontSize:'24px'}}>Complete the form and access a free 4-week trial.</p>
                    
                </div>
                <div style={{textAlign:'center'}}>
                   <button class="custom-btn bt-5"
                        style={{
                            marginLeft: '1px',
                            color: 'black',
                            background: '#716a43',
                            marginTop: '7px',
                            fontSize: '17px',
                            fontWeight: 'bold',
                            lineHeight:'42px',
                            borderRadius:'3px',
                            border:'none'

                        }}><span>JOIN TODAY</span></button> 
                </div>
                

            </Row>
            
        </Container>
    )
}


