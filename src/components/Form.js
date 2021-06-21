import axios from 'axios'
import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'

export const Form = () => {

    const [sent, setSent] = useState(false)
    const [text, setText] = useState("")
    const handleSend = async (e) => {
        e.preventDefault();
        setSent(true)
        try {
            await axios.post("http://localhost:4000/send_mail", {
                text
            })
        } catch (error) {
            console.log("fallo tooooo")
        }
    }



    return (
        <Container fluid>
            <Row style={{ background: 'black', padding: '60px 0px 60px 0px', justifyContent: 'center' }}>
                <div className="container p-4" style={{ background: 'black' }}>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card" style={{ background: 'black' }}>
                                <div className="card-body">
                                    {
                                        !sent ? (
                                            <form onSubmit={handleSend} method="POST">
                                                <div className="form-group" >
                                                    <input type="text"
                                                        placeholder="Full name*" autoFocus className="form-control" required
                                                        style={{ background: 'black', color: 'white' }}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" className="form-control" placeholder="E-mail Address*" required
                                                        style={{ background: 'black', color: 'white' }}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="country" className="form-control" placeholder="Country*" required
                                                        style={{ background: 'black', color: 'white' }}
                                                    />
                                                </div>
                                                <div className="form-group" >
                                                    <input type="text"
                                                    name="phone"
                                                        placeholder="Phone*" className="form-control" required
                                                        style={{ background: 'black', color: 'white' }}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="agency" className="form-control" placeholder="Angency Name*" required
                                                        style={{ background: 'black', color: 'white' }}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="pass" className="form-control" placeholder="PassWord*" required
                                                        style={{ background: 'black', color: 'white' }}
                                                    />
                                                </div>
                                                <div className="form-group" >
                                                    <input type="text"
                                                        name="country"
                                                        placeholder="Country*" className="form-control" required
                                                        style={{ background: 'black', color: 'white' }}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="players" className="form-control" placeholder="N of Players" required
                                                        style={{ background: 'black', color: 'white' }}
                                                    />
                                                </div>



                                                <div className="form-group">
                                                    <textarea
                                                        value={text} rows="2"
                                                        onChange={(e) => setText(e.target.value)}
                                                        className="form-control" placeholder="Message"
                                                        style={{ background: 'black', color: 'white' }}
                                                    />
                                                </div>
                                                <button className="btn btn-block" type="submit" style={{ color: 'black', fontWeight: 'bold', fontSize: '19px', background: 'linear-gradient(90deg, rgba(108,93,55,1) 21%, rgba(199,182,136,1) 41%, rgba(250,229,175,1) 61%, rgba(68,50,18,1) 80%)', marginTop:'50px' }}>
                                                    JOIN TODAY
                                        </button>

                                            </form>

                                        ) : (
                                            <h1 style={{textAlign:'center', color:'white'}}>Email Sent</h1>
                                        )
                                    }


                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                
                
            </Row>
            <Row style={{ background: 'black' }}>

            </Row>
        </Container>
    )
}