import React from 'react'
import { Container, Row, Col, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../views/Blog.css'
import money from '../blog_images/blog-investing.jpg'
import web from '../blog_images/blog-professional-web.jpg'
import mf from '../blog_images/blog-sportsbook-bussiness.jpg'
import phone from '../blog_images/blog-grow-betting.jpg'
import share from '../icons/pngegg.png'
import l1 from '../blog_images/Blog-lateral-1.jpg'
import l2 from '../blog_images/Blog-lateral-2.jpg'
import l3 from '../blog_images/Blog-lateral-3.jpg'
import l4 from '../blog_images/Blog-lateral-4.jpg'


export const Blog = () => {
    return (
        <Container fluid>
            <Row style={{ background: 'black', paddingTop: '60px' }}>
                <Col lg={4} style={{ padding: '0px 0px 0px 30px' }}>
                    <div style={{}}>
                        <h3 style={{ color: '#e5debd' }}>SEARCH BLOG
                        </h3>
                        <FormControl
                            type="search"
                            placeholder="Search..."
                            className="mr-2"
                            aria-label="Search"
                            style={{ width: '320px', marginBottom: '20px' }}
                        />
                        <h4 style={{ color: '#e4d78c' }}>CATEGORIES
                        </h4>
                        <div>
                            <ul style={{ listStyle: 'none', padding: '0px 0px 0px 1px' }}>
                                <li style={{ color: '#dfb964' }}>News</li>
                                <li style={{ color: '#dfb964' }}>Categorie 1</li>
                                <li style={{ color: '#dfb964' }}>Categorie 1</li>
                                <li style={{ color: '#dfb964' }}>Categorie 1</li>
                                <li style={{ color: '#dfb964' }}>Categorie 1</li>

                            </ul>

                        </div>
                    </div>
                    <div>
                        <h5 style={{ color: '#e5debd' }}>
                            LATEST BLOG POSTS

                        </h5>
                        <img src={l1} alt="" id="lateral" />
                        <div>
                            <p style={{ color: '#9f9352' }}>2020 COLLEGE BASKETBALL REGULAR
</p>
                            <p style={{ color: '#9f9352' }}>SEASON BETTING PREDICTIONS
</p>
                            <button class="custom-btn bt-5"
                                style={{
                                    border: 'none',
                                    borderRadius: '3px',
                                    color: 'black',
                                    background: '#716a43',
                                    marginTop: '7px',
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                    width: '110px',
                                    height: '40px',
                                    marginBottom: '16px'

                                }}><span>SEE MORE</span></button>
                        </div>
                    </div>
                    <div>
                        <h5 style={{ color: '#e5debd' }}>
                            LATEST BLOG POSTS

                        </h5>
                        <img src={l2} alt="" id="lateral" />
                        <div>
                            <p style={{ color: '#9f9352' }}>2020 COLLEGE BASKETBALL REGULAR
</p>
                            <p style={{ color: '#9f9352' }}>SEASON BETTING PREDICTIONS
                            </p>
                            <button class="custom-btn bt-5"
                                style={{
                                    border: 'none',
                                    borderRadius: '3px',
                                    color: 'black',
                                    background: '#716a43',
                                    marginTop: '7px',
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                    width: '110px',
                                    height: '40px',
                                    marginBottom: '16px'

                                }}><span>SEE MORE</span></button>
                        </div>

                    </div>
                    <div>
                        <h5 style={{ color: '#e5debd' }}>
                            LATEST BLOG POSTS

                        </h5>
                        <img src={l3} alt="" id="lateral" />
                        <div>
                            <p style={{ color: '#9f9352' }}>2020 COLLEGE BASKETBALL REGULAR
</p>
                            <p style={{ color: '#9f9352' }}>SEASON BETTING PREDICTIONS
</p>
                            <button class="custom-btn bt-5"
                                style={{
                                    border: 'none',
                                    borderRadius: '3px',
                                    color: 'black',
                                    background: '#716a43',
                                    marginTop: '7px',
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                    width: '110px',
                                    height: '40px',
                                    marginBottom: '16px'

                                }}><span>SEE MORE</span></button>
                        </div>
                    </div>
                    <div>
                        <h5 style={{ color: '#e5debd' }}>
                            LATEST BLOG POSTS

                        </h5>
                        <img src={l4} alt="" id="lateral" />
                        <div>
                            <p style={{ color: '#9f9352' }}>2020 COLLEGE BASKETBALL REGULAR
</p>
                            <p style={{ color: '#9f9352' }}>SEASON BETTING PREDICTIONS
</p>
                            <button class="custom-btn bt-5"
                                style={{
                                    border: 'none',
                                    borderRadius: '3px',
                                    color: 'black',
                                    background: '#716a43',
                                    marginTop: '7px',
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                    width: '110px',
                                    height: '40px',
                                    marginBottom: '16px'

                                }}><span>SEE MORE</span></button>
                        </div>
                    </div>
                </Col>
                <Col lg={4} >
                    <div style={{ width: 'fit-content' }}>
                        <img src={money} alt="" id="ImageBlo" style={{ padding: '40px 1px 1px 1px' }} />
                        <div style={{ padding: '13px 0px 0px 0px' }}>
                            <p style={{ color: 'white' }}>Posted by <span style={{ color: '#727047' }}>Jhon</span></p>
                            <p style={{ color: 'white' }}>09 February  in <span style={{ color: '#727047' }}>News</span></p>
                        </div>
                        <div>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>2020 COLLEGE BASKETBALL REGULAR</p>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>SEASON BETTING PREDICTIONS</p>
                            <p style={{ color: 'white' }}>With the 2019/2020 College Basketball
</p>
                            <p style={{ color: 'white' }}>season in its early st…
</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <img src={share} alt="" style={{ width: '30px', height: '30px' }} />
                            <Link to="/Blog_money"><button class="custom-btn btBlog-5"
                                style={{
                                    border: 'none',
                                    borderRadius: '3px',
                                    color: 'black',
                                    background: '#716a43',

                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                    width: '110px',
                                    height: '40px'

                                }}><span>SEE MORE</span></button></Link>

                        </div>
                    </div>
                    <div style={{ width: 'fit-content' }}>
                        <img src={web} alt="" id="ImageBlo" style={{ padding: '40px 1px 1px 1px' }} />
                        <div style={{ padding: '13px 0px 0px 0px' }}>
                            <p style={{ color: 'white' }}>Posted by <span style={{ color: '#727047' }}>Jhon</span></p>
                            <p style={{ color: 'white' }}>09 February  in <span style={{ color: '#727047' }}>News</span></p>
                        </div>
                        <div>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>2020 COLLEGE BASKETBALL REGULAR</p>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>SEASON BETTING PREDICTIONS</p>
                            <p style={{ color: 'white' }}>With the 2019/2020 College Basketball
</p>
                            <p style={{ color: 'white' }}>season in its early st…
</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <img src={share} alt="" style={{ width: '30px', height: '30px' }} />
                            <Link to="/Blog_web">
                                <button class="custom-btn btBlog-5"
                                    style={{
                                        border: 'none',
                                        borderRadius: '3px',
                                        color: 'black',
                                        background: '#716a43',

                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                        width: '110px',
                                        height: '40px'

                                    }}><span>SEE MORE</span></button></Link>

                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div style={{ width: 'fit-content' }}>
                        <img src={mf} alt="" id="ImageBlo" style={{ padding: '40px 1px 1px 1px' }} />
                        <div style={{ padding: '13px 0px 0px 0px' }}>
                            <p style={{ color: 'white' }}>Posted by <span style={{ color: '#727047' }}>Jhon</span></p>
                            <p style={{ color: 'white' }}>09 February  in <span style={{ color: '#727047' }}>News</span></p>
                        </div>
                        <div>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>2020 COLLEGE BASKETBALL REGULAR</p>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>SEASON BETTING PREDICTIONS</p>
                            <p style={{ color: 'white' }}>With the 2019/2020 College Basketball
</p>
                            <p style={{ color: 'white' }}>season in its early st…
</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <img src={share} alt="" style={{ width: '30px', height: '30px' }} />
                            <Link to="/Blog_fut">
                                <button class="custom-btn btBlog-5"
                                    style={{
                                        border: 'none',
                                        borderRadius: '3px',
                                        color: 'black',
                                        background: '#716a43',

                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                        width: '110px',
                                        height: '40px'

                                    }}><span>SEE MORE</span></button>
                            </Link>

                        </div>
                    </div>
                    <div style={{ width: 'fit-content' }}>
                        <img src={phone} alt="" id="ImageBlo" style={{ padding: '40px 1px 1px 1px' }} />
                        <div style={{ padding: '13px 0px 0px 0px' }}>
                            <p style={{ color: 'white' }}>Posted by <span style={{ color: '#727047' }}>Jhon</span></p>
                            <p style={{ color: 'white' }}>09 February  in <span style={{ color: '#727047' }}>News</span></p>
                        </div>
                        <div>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>2020 COLLEGE BASKETBALL REGULAR</p>
                            <p style={{ color: '#b2a879', fontWeight: 'bold' }}>SEASON BETTING PREDICTIONS</p>
                            <p style={{ color: 'white' }}>With the 2019/2020 College Basketball
</p>
                            <p style={{ color: 'white' }}>season in its early st…
</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <img src={share} alt="" style={{ width: '30px', height: '30px' }} />
                            <Link to="/Blog_phone">
                                <button class="custom-btn btBlog-5"
                                    style={{
                                        border: 'none',
                                        borderRadius: '3px',
                                        color: 'black',
                                        background: '#716a43',

                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                        width: '110px',
                                        height: '40px'

                                    }}><span>SEE MORE</span></button>
                            </Link>

                        </div>
                    </div>

                </Col>
            </Row>

        </Container>
    )
}

export const BlogView = props => {
    return (
        <Container fluid>
            <Row style={{ background: 'black', paddingTop: '60px' }}>
                <Col lg={4} style={{ padding: '0px 0px 0px 30px' }}>
                    <div style={{}}>
                        <h3 style={{ color: '#e5debd' }}>SEARCH BLOG
                        </h3>
                        <FormControl
                            type="search"
                            placeholder="Search..."
                            className="mr-2"
                            aria-label="Search"
                            style={{ width: '320px', marginBottom: '20px' }}
                        />
                        <h4 style={{ color: '#e4d78c' }}>CATEGORIES
                        </h4>
                        <div>
                            <ul style={{ listStyle: 'none', padding: '0px 0px 0px 1px' }}>
                                <li style={{ color: '#dfb964' }}>News</li>
                                <li style={{ color: '#dfb964' }}>Categorie 1</li>
                                <li style={{ color: '#dfb964' }}>Categorie 1</li>
                                <li style={{ color: '#dfb964' }}>Categorie 1</li>
                                <li style={{ color: '#dfb964' }}>Categorie 1</li>

                            </ul>

                        </div>
                    </div>
                    <div>
                        <h5 style={{ color: '#e5debd' }}>
                            LATEST BLOG POSTS

                        </h5>
                        <img src={l1} alt="" id="lateral" />
                        <div>
                            <p style={{ color: '#9f9352' }}>2020 COLLEGE BASKETBALL REGULAR
</p>
                            <p style={{ color: '#9f9352' }}>SEASON BETTING PREDICTIONS
</p>
                            <button class="custom-btn bt-5"
                                style={{
                                    border: 'none',
                                    borderRadius: '3px',
                                    color: 'black',
                                    background: '#716a43',
                                    marginTop: '7px',
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                    width: '110px',
                                    height: '40px',
                                    marginBottom: '16px'

                                }}><span>SEE MORE</span></button>
                        </div>
                    </div>
                    <div>
                        <h5 style={{ color: '#e5debd' }}>
                            LATEST BLOG POSTS

                        </h5>
                        <img src={l2} alt="" id="lateral" />
                        <div>
                            <p style={{ color: '#9f9352' }}>2020 COLLEGE BASKETBALL REGULAR
</p>
                            <p style={{ color: '#9f9352' }}>SEASON BETTING PREDICTIONS
                            </p>
                            <button class="custom-btn bt-5"
                                style={{
                                    border: 'none',
                                    borderRadius: '3px',
                                    color: 'black',
                                    background: '#716a43',
                                    marginTop: '7px',
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                    width: '110px',
                                    height: '40px',
                                    marginBottom: '16px'

                                }}><span>SEE MORE</span></button>
                        </div>

                    </div>
                    <div>
                        <h5 style={{ color: '#e5debd' }}>
                            LATEST BLOG POSTS

                        </h5>
                        <img src={l3} alt="" id="lateral" />
                        <div>
                            <p style={{ color: '#9f9352' }}>2020 COLLEGE BASKETBALL REGULAR
</p>
                            <p style={{ color: '#9f9352' }}>SEASON BETTING PREDICTIONS
</p>
                            <button class="custom-btn bt-5"
                                style={{
                                    border: 'none',
                                    borderRadius: '3px',
                                    color: 'black',
                                    background: '#716a43',
                                    marginTop: '7px',
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                    width: '110px',
                                    height: '40px',
                                    marginBottom: '16px'

                                }}><span>SEE MORE</span></button>
                        </div>
                    </div>
                    <div>
                        <h5 style={{ color: '#e5debd' }}>
                            LATEST BLOG POSTS

                        </h5>
                        <img src={l4} alt="" id="lateral" />
                        <div>
                            <p style={{ color: '#9f9352' }}>2020 COLLEGE BASKETBALL REGULAR
</p>
                            <p style={{ color: '#9f9352' }}>SEASON BETTING PREDICTIONS
</p>
                            <button class="custom-btn bt-5"
                                style={{
                                    border: 'none',
                                    borderRadius: '3px',
                                    color: 'black',
                                    background: '#716a43',
                                    marginTop: '7px',
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                    width: '110px',
                                    height: '40px',
                                    marginBottom: '16px'

                                }}><span>SEE MORE</span></button>
                        </div>
                    </div>
                </Col>
                <Col lg={8}>
                    <img src={props.ImageNews} alt="" id="ImaN" style={{paddingBottom:'30px'}} />
                    <div className="d-flex justify-content">
                        <p style={{ color: 'white' }}>Posted by <span style={{ color: '#5f6134' }}>Jhon</span></p>
                        <p style={{ color: 'white' }}>09 February</p>
                        <p style={{ color: 'white' }}>in <span style={{ color: '#5f6134' }}>News</span></p>
                    </div>
                    <div >
                        <h3 style={{ color: '#b2a66f' }}>
                            2020 COLLEGE BASKETBALL REGULAR SEASON BETTING PREDICTIONS</h3>
                        <p style={{ color: 'white', paddingBottom: '13px', textAlign:'justify' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. </p>
                        <p style={{ color: 'white', paddingBottom: '13px', textAlign:'justify' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. </p>
                        <p style={{ color: 'white', paddingBottom: '13px', textAlign:'justify' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. </p>
                        <p style={{ color: 'white', paddingBottom: '13px', textAlign:'justify' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. </p>
                        <p style={{ color: 'white', paddingBottom: '13px', textAlign:'justify' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. </p>
                        <p style={{ color: 'white', paddingBottom: '13px', textAlign:'justify' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. </p>
                        <p style={{ color: 'white', paddingBottom: '13px', textAlign:'justify' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. </p>
                        <p style={{ color: 'white', paddingBottom: '13px', textAlign:'justify' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. </p>
                        <p style={{ color: 'white', paddingBottom: '13px', textAlign:'justify' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. </p>
                        <p style={{ color: 'white', paddingBottom: '13px', textAlign:'justify' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. </p>
                        <p style={{ color: 'white', paddingBottom: '13px', textAlign:'justify' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. </p>


                    </div>
                </Col>

            </Row>
        </Container>
    )
}

BlogView.propTypes = {
    ImageNews: PropTypes.any

}


