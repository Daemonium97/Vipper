const express = require("express")
const app = express()
require("dotenv").config()

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors())

app.post("/send_email", cors(), async (req, res) => {
    let {text, name, phone, email} = req.body
    
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_HOST,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

        await transport.sendMail({
            from: process.env.MAIL_FROM,
            to: "xayoye9037@gocasin.com",
            subject: "test email",
            html: 
        })




})




app.listen((process.env.PORT, () =>{
    console.log('Listening')
}))