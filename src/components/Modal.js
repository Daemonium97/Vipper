
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

                <Modal.Body style={{ background: '#1c0414', borderRadius: '4px' }}>
                    <div style={{
                        color: '#938551',
                        fontSize: '20px'
                    }}>PRODUCTS</div>
                    <div style={{
                        color: '#938551',
                        fontSize: '20px'
                    }}>BETTING SOFTWARE</div>
                    <div style={{
                        color: '#938551',
                        fontSize: '20px'
                    }}>BETTING FEATURES</div>
                    <div style={{
                        color: '#938551',
                        fontSize: '20px'
                    }}>PROMOS</div>
                    <Link to="About" style={{ textDecoration: 'none' }}>
                        <div style={{
                            color: '#938551',
                            fontSize: '20px'

                        }}>BENEFITS</div>
                    </Link>

                    <div style={{
                        color: '#938551',
                        fontSize: '20px'
                    }}>CONTACT US.</div>

                </Modal.Body>
            </Modal>

        </>

    )
}