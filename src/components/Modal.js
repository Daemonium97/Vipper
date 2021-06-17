
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { NavbarToggler } from 'reactstrap'
import { Link } from 'react-router-dom'


export const Screen = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [collapsed, setCollapsed] = useState(true);


    return (

        <>
            <NavbarToggler onClick={handleShow} className="mr-2" />

            <Modal className="text-center" show={show} onHide={handleClose} style={{
                marginTop: '300px'
            }}>

                <Modal.Body style={{ background: '#1c0414' }}>
                    <Link to="/Products" style={{ textDecoration: 'none' }}>
                        <div style={{
                            color: '#938551',
                            fontSize: '20px'

                        }} onClick={handleClose}>PRODUCTS</div>
                    </Link>
                    <Link to="/Betting_Software" style={{ textDecoration: 'none' }}>
                        <div style={{
                            color: '#938551',
                            fontSize: '20px'

                        }} onClick={handleClose}>BETTING SOFTWARE</div>
                    </Link>
                    <Link to="/Software_Features" style={{ textDecoration: 'none' }}>
                        <div style={{
                            color: '#938551',
                            fontSize: '20px'

                        }} onClick={handleClose}>SOFTWARE FEATURES</div>
                    </Link>
                    <Link to="/Promo" style={{ textDecoration: 'none' }}>
                        <div style={{
                            color: '#938551',
                            fontSize: '20px'

                        }} onClick={handleClose}>PROMOS</div>
                    </Link>
                    <Link to="/Benefits" style={{ textDecoration: 'none' }}>
                        <div style={{
                            color: '#938551',
                            fontSize: '20px'

                        }} onClick={handleClose}>BENEFITS</div>
                    </Link>
                    <Link to="Contact" style={{ textDecoration: 'none' }}>
                        <div style={{
                            color: '#938551',
                            fontSize: '20px'

                        }} onClick={handleClose}>CONTACT US.</div>
                    </Link>
                    <Link to="/About" style={{ textDecoration: 'none' }}>
                        <div style={{
                            color: '#938551',
                            fontSize: '20px'

                        }} onClick={handleClose}>ABOUT US</div>
                    </Link>
                    <Link to="/Blog" style={{ textDecoration: 'none' }}>
                        <div style={{
                            color: '#938551',
                            fontSize: '20px'

                        }} onClick={handleClose}>BLOG</div>
                    </Link>

                </Modal.Body>
            </Modal>

        </>

    )
}