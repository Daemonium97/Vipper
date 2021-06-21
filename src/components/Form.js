import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'

export const Form = () => {
    const [sent, setSent] = useState(false)
    const [text, setText] = useState("")
    const handleSend = async (e) => {
        setSent(true)
        try {
            await axios.post("http://localhost:3000/send_mail", {
                text
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Container fluid>
            <Row style={{ background: 'black', justifyContent: 'center',paddingTop:'90px' }}>
                <div className="App">
                    {!sent ? (
                        <form onSubmit={handleSend}>
                            <div className="form-group">
                                <input type="text"  value={text} onChange={(e) => setText(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <button type="submit">Send Email</button>
                            </div>

                        </form>
                    ) : (
                        <h1>Email Sent</h1>
                    )}
                </div>
            </Row>
        </Container>
    )
}


