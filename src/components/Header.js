import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import '../components/Header.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import mic from '../icons/mic.png'
import Logo from '../icons/mainLogo.png'

export const Header = () => {
    return (
        <Container fluid className="all">
            <Row>
                <Col lg={true} className="numbers">

                    <div >
                        <div id="call">1-888-992-3891</div>
                        <div>Call Us for Free Us</div>
                    </div>
                    <div>
                        <div id="call">01-800-099-0754</div>
                        <div>Call Us for Free Mexico</div>
                    </div>
                </Col>
                <Col lg={true}>
                    <div className="d-flex justify-content-center">
                        <img src={Logo} alt="" id="image" />
                    </div>

                </Col>
                <Col lg={true} >
                    <div className="mega d-flex justify-content-center">
                        <div className="main">
                            <div className="social">
                                <a href="#"><img src="http://www.dimecoti.com/_binalia/framework/v2/modules/WebBuilder/dimeco-web/template/images/footer.social.facebook.png" id="face" /></a>
                                <a href="#" id="in">in</a>
                                <img src={mic} id="mic" />
                            </div>


                        </div>
                        <div className="main2">
                            <div className="lan">
                                <a href="#">EN</a>
                                <span style={{ color: 'white' }}> | </span>
                                <a href="#">ES</a>
                            </div>

                        </div>
                    </div>

                </Col>
            </Row>
        </Container>

    )
}

export const Logoo = props => {
    return (
        <Container fluid>
            <Row>

                <span id="title">{props.TitleName}</span>

                <img src={props.ImageLogo} alt="" id="logo" />
            </Row>


        </Container>
    )

}
export const NavBar = props => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar id="cola">
                    <Nav navbar>
                        <NavItem>
                            <Link to="/About">
                            <NavLink id="nav">About Us</NavLink>
                            </Link>
                            
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" id="nav">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}




Logoo.propTypes = {
    ImageLogo: PropTypes.any,
    TitleName: PropTypes.any
};
NavbarToggler.propTypes = {
    type: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    
  }






