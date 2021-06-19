import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import '../components/Header.css'
import { Container, Row, Col } from 'react-bootstrap'
import {  Navbar, NavbarToggler, NavbarBrand} from 'reactstrap';
import mic from '../icons/mic.png'
import Logo from '../icons/mainLogo.png'
import {Screen} from '../components/Modal'

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
                        <Link to="/">
                           <img src={Logo} alt="" id="image" /> 
                        </Link>
                        
                    </div>

                </Col>
                <Col lg={true} >
                    <div className="mega d-flex justify-content-center">
                        <div className="main">
                            <div className="social">
                                <a href="asd"><img alt="" src="http://www.dimecoti.com/_binalia/framework/v2/modules/WebBuilder/dimeco-web/template/images/footer.social.facebook.png" id="face" /></a>
                                <a href="asd" id="in">in</a>
                                <img alt="" src={mic} id="mic" />
                            </div>


                        </div>
                        <div className="main2">
                            <div className="lan">
                                <a href="asd">EN</a>
                                <span style={{ color: 'white' }}> | </span>
                                <a href="asd">ES</a>
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

    
    

    return (
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
                <Screen/>
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






