import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../views/Products.css'

export const Products = () => {
    return (
        <Container fluid >
            <Row style={{ background:'black', textAlign:'center',justifyContent:'center' }} >
                <div style={{padding:'50px 4px 1px 4px'}}>
                    <p style={{ color: 'white' }}>Our developers offer a wide variety of designs to supply your need. They fulfill practical solutions for those who
                    </p>
                    <p style={{ color: 'white' }}>have physical control, such as restaurants and sports bars, to be able to meet the most demanding
                </p>
                    <p style={{ color: 'white' }}>customers.</p>
                </div>
            </Row>

        </Container>

    )
}


