const express = require("express")
const app = express()
require("dotenv").config()

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/send_email", cors(), async (req, res) => {
  let { text, name, phone, email } = req.body

  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: "daemonium97@gmail.com",
    subject: "Test email",
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


app.listen((process.env.PORT || 4000, () => {
  console.log("Listening")
}))