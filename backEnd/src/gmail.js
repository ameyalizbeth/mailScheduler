require('dotenv').config({ path: './.env' });

const sendmail = require ('../src/models/sendmails')
const { google } = require("googleapis")
const nodemailer = require('nodemailer');
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URL =  process.env.REDIRECT_URL
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

exports.gmail = async (mailOptions,id)=> {
    

    try {
    
    const acessToken = await oAuth2Client.getAccessToken()
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'ameyalizbeth@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: acessToken
          
        }
    
    });
        
     await transporter.sendMail(mailOptions)
         .then(async(res) => {
             console.log("Successfully sent")
             const send = await sendmail.find({ toEmail: mailOptions.to, emailId: id });
             if (send.length== 0) {
                 const mail = await sendmail.create({ toEmail: mailOptions.to, fromEmail: mailOptions.from, subject: mailOptions.subject, body: mailOptions.text,emailId:id });
             }
             
            
         })
        .catch((err) => console.log("Failed ", err))
    
    } catch (err) {
        const error =new Error('NOT AUTHENTICATED');
        error.statusCode = 401;
        throw error;
    }
}


