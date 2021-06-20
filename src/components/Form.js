import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const Form = () => {


    return (
        <Container fluid>
            <Row style={{ background: 'black', justifyContent: 'center' }}>
                <div className="container p-4" style={{ background: 'black' }}>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card" style={{ background: 'black' }}>
                                <div className="card-body">
                                    <form action="/send-email" method="POST">
                                        <div className="form-group" >
                                            <input type="text" name="name" placeholder="Name" autoFocus className="form-control"
                                                style={{ background: 'black', color: 'white' }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" placeholder="Email"
                                                style={{ background: 'black', color: 'white' }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="phone" className="form-control" placeholder="Phone"
                                                style={{ background: 'black', color: 'white' }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" rows="2" className="form-control" placeholder="Message"
                                                style={{ background: 'black', color: 'white' }}
                                            />
                                        </div>
                                        <button className="btn btn-block" style={{color:'black', fontWeight:'bold', fontSize:'19px', background:'linear-gradient(90deg, rgba(108,93,55,1) 21%, rgba(199,182,136,1) 41%, rgba(250,229,175,1) 61%, rgba(68,50,18,1) 80%)'}}>
                                            JOIN TODAY
                                        </button>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </Row>
        </Container>
    )
}


