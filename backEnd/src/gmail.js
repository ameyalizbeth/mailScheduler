const { google } = require("googleapis")
const nodemailer = require('nodemailer');
const CLIENT_ID = "859391755975-u738dd46i94btl0tm8p3k1nab52633tk.apps.googleusercontent.com"
const CLIENT_SECRET = "UIu_P3fal9fgVjo-nawytwuF"
const REDIRECT_URL = "https://developers.google.com/oauthplayground"
const REFRESH_TOKEN = "1//04jw6tTvPrc6eCgYIARAAGAQSNwF-L9Ird6mUlvmT98wSkzO7Qu-BHFyerNkLuFthYf_P5TN2n-VLPzvq7aPvggimRQNaj4Z-QiE"
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

exports.gmail = async (mailOptions)=> {
    

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
         .then((res) => console.log("Successfully sent"))
        .catch((err) => console.log("Failed ", err))
    
    } catch (err) {
        const error =new Error('NOT AUTHENTICATED');
        error.statusCode = 401;
        throw error;
    }
}


