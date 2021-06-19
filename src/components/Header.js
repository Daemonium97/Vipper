import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../components/Header.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import mic from '../icons/mic.png'
import Logo from '../icons/mainLogo.png'
import { Screen } from '../components/Modal'

export const Header = () => {
    return (
        <Container fluid >
            <Row style={{ background: 'linear-gradient(90deg, rgba(0,0,0,1) 6%, rgba(74,5,74,1) 53%, rgba(0,0,0,1) 99%)' }}>
                <div className="numbers1">
                    <p style={{ color: '#997c2c' }}>1-888-992-3891</p>
                    <p style={{ color: 'white' }}>Call Us for Free US</p>
                     <p style={{ color: '#997c2c' }}>01-800-099-0754</p>
                    <p style={{ color: 'white' }}>Call Us for Free Mexico</p>
                </div>
                
                   
                
                <div>
                    <Link to="/">
                        <img src={Logo} alt="" id="image" />
                    </Link>
                </div>
                <div>
                    <a href="asd"><img alt="" src="http://www.dimecoti.com/_binalia/framework/v2/modules/WebBuilder/dimeco-web/template/images/footer.social.facebook.png" id="face" /></a>
                    <a href="asd" id="in">in</a>
                    <img alt="" src={mic} id="mic" />
                </div>
                <div >
                                <a href="asd">EN</a>
                                <span style={{ color: 'white' }}> | </span>
                                <a href="asd">ES</a>
                            </div>
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
                <Screen />
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






