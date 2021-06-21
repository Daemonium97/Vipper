import axios from 'axios'
import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'

export const Form = () => {

    const [sent, setSent] = useState(false)
    const [text, setText] = useState("")
    const handleSend = async (e) => {
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
            <Row style={{ background: 'black', padding:'60px 0px 60px 0px', justifyContent: 'center' }}>
                <div className="App">
                    {!sent ? (
                        <form onSubmit={handleSend}>
                            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

                            <button type="submit">Send Email</button>
                        </form>
                    ) : (
                        <h1>Email Sent</h1>
                    )}
                </div>
            </Row>
        </Container>
    )
}