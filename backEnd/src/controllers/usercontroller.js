const jwt = require("jsonwebtoken");
const user = require ('../models/users')
const bcrypt = require('bcryptjs');
// const nodemailer = require('nodemailer');


exports.signup = async (req, res) => {

    const { email, password, confirmPassword } = req.body

    if(password != confirmPassword){
        return res.json({ status: "error", msg: "Password does not match" })
    }
    if( password.length < 8){
        return res.json({ status: "error", msg: "Weak password" })
    }

    try{

        const npassword = await bcrypt.hash(password, 10)
        const users = await user.create({ email, password: npassword })
        const username = users.email;
        const token = jwt.sign({ username }, process.env.SECRET, {expiresIn: 7200,});
           

        return res.json({ status: "ok", msg: "User created Successfully", token:token, auth: true })

    }catch(e){
        return res.json({ status: "error" })
     }

}



exports.login = (req, res) => {
    user.find({ email: req.body.email }, null, { limit: 1 } )
        .then((user) => {
            if (user) {
                bcrypt.compare(
                    req.body.password,
                    user.password,
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
                                token: token
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
