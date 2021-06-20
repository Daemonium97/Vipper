const { Router} = require('express')
const nodemailer = require('nodemailer')
const router = Router();

router.post('/send-email', async (req, res) =>{
    const {name, email, phone, message} = req.body;

    contentHTML = `
            <h1>User Information</h1>
            <ul>
                <li>Username: ${name}</li>
                <li>User Email: ${email}</li> 
                <li>Phone: ${phone}</li>
            
            </ul>
            <p>${message}</p>
    `;
    
    const transporter = nodemailer.createTransport({
        host:'smtp-relay.sendinblue.com',
        port: 587,
        secure: false,
        auth:{
            user:'osra97@gmail.com',
            pass:'9BQtdJZrvwLIjCEV'
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    
    const info = await transporter.sendMail({
        from:'<osra97@gmail.com>',
        to:'daemonium97@gmail.com',
        subject:'User information',
        html: contentHTML
    });


    res.send('received');
});


console.log("hol totoro")
module.exports = router;
