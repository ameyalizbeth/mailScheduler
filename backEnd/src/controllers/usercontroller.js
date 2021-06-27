const jwt = require("jsonwebtoken");
const user = require('../models/users')
const mails = require('../models/mails')
const sendmails = require ('../models/sendmails')
const bcrypt = require('bcryptjs');
const gmail = require('../gmail')
const cron = require('node-cron');



exports.signup = async (req, res,next) => {

    const { email, password, confirmPassword,googleUser } = req.body

    if(password != confirmPassword){
        return res.json({ status: "error", msg: "Password does not match" })
    }
    if( password.length < 8){
        return res.json({ status: "error", msg: "Weak password" })
    }

    try{

        const npassword = await bcrypt.hash(password, 10)
        const users = await user.create({ email, password: npassword ,googleUser})
        const username = users.email;
        const token = jwt.sign({ username }, process.env.SECRET, {expiresIn: 7200,});
           

        return res.json({ status: "ok", msg: "User created Successfully", token:token, auth: true })

    }catch(e){
        next(e);
     }

}



exports.login = (req, res) => {
    user.find({ email: req.body.email }, null, { limit: 1 } )
        .then((user) => {
          
            if (user[0]) {
                bcrypt.compare(
                    req.body.password,
                    user[0].password,
                    (err, response) => {
                        if (response) {
                           

                            const username = user.email;
                            const token = jwt.sign({
                                    username
                                },
                                process.env.SECRET, {
                                    expiresIn: 7200,
                                }
                            );
                            // console.log(req.session.user);
                            res.status(200).json({
                                auth: true,
                                token: token,
                                userEmail:username
                            });
                        } else {
                            res.json({
                                auth: false,
                                message: "wrong combinations!!",
                            });
                        }
                    }
                );
            } else {
                //    res.status(404).send({message:"No user found!!"});
                res.json({
                    auth: false,
                    message: "No user found!!"
                });
            }
        })
        .catch((err) => console.log(err));
}


exports.schedule = async (req, res, next) => {
    try {
<<<<<<< HEAD
        
    const { toEmail,  fromEmail, subject, body, html, schedule, dateAndTime, count, option } = req.body
    const mail = await mails.create({ toEmail,  fromEmail, subject, body,schedule})

=======
    console.log("hi");
    const { toEmail,  fromEmail, subject, body, html, schedule, count, category, dateAndTime} = req.body
    const mail = await mails.create({ toEmail,  fromEmail, subject, body,schedule, count,category,dateAndTime})
>>>>>>> 5356174a17455b4ee083d0403ebe24e0431f9314
        toEmail.map((e) => {
             const task =  cron.schedule(schedule, async () => {
            // Send e-mail
            let mailOptions = {
                to: e,
                from:fromEmail,
                subject: subject,
                text: body,
                html: html

            }
            gmail.gmail(mailOptions,mail._id)
           
      });
         console.log(task);
        
    })
      
            
          
    
     
       
}catch(e){
        next(e);
     }

    
}


exports.homepage = (req, res, next) => {
    mails.find({ fromEmail: req.params.userEmail })
        .then((user) => {
            res.status(200).json({ emails: user });
    })
}

exports.sendmails = (req, res, next) => {
    sendmails.find({fromEmail:req.body.userEmail})
}


exports.findbyemail = (req, res, next) => {
    mails.findById(req.params.id)
        .then((mail) => {
        res.status(200).json({mail:mail})
        })
        .catch((e) => {
            next(e);
    })
}