import React from 'react'
import {Container, Row} from 'react-bootstrap'

export const Form = () => {
    return (
        <Container fluid>
            <Row style={{ background: 'black', justifyContent: 'center' }}>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <form action="/send-email" method="POST">
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Name" autoFocus className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="phone" className="form-control" placeholder="Phone" />
                                        </div>
                                        <div className="form-group">
                                            <textarea  name="message" rows="2" className="form-control" placeholder="Message"/>
                                        </div>

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


