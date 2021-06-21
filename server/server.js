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
    
    let transport = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        auth: {
          user: "osra97@gmail.com",
          pass: "9BQtdJZrvwLIjCEV"
        }
      });

        await transport.sendMail({
            from: "osra97@gmail.com",
            to: "daemonium97@gmail.com",
            subject: "test email",
            html: `<div className="email" style="
            border: 1px solid black;
            padding: 20px;
            font-family: sans-serif;
            line-height: 2;
            font-size: 20px; 
            ">
            <h2>Here is your email!</h2>
            <p>${text}</p>
        
            <p>All the best, Darwin</p>
             </div>
        `
        })




})


app.listen((3000, () =>{
    console.log('Listening')
}))