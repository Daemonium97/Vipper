
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import {NavbarToggler} from 'reactstrap'


export const Screen = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [collapsed, setCollapsed] = useState(true);

    
    return (

        <>
            <NavbarToggler onClick={handleShow} className="mr-2" />

            <Modal className="text-center" show={show} onHide={handleClose} style={{
                marginTop:'300px',
                background:'#1c0414'
        }}>

                <Modal.Body>
                    <div style={{
                        color:'#938551',
                        fontSize:'20px'
                        }}>PRODUCTS</div>
                    <div>BETTING SOFTWARE</div>
                    <div>BETTING FEATURES</div>
                    <div>PROMOS</div>
                    <div>BENEFITS</div>
                    <div>CONTACT US.</div>

                </Modal.Body>
            </Modal>

        </>

    )
}