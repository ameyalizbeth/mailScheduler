
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    // const token = req.headers["x-access-token"];
    const token = req.get("x-access-token");
    if(!token) {
        
        
        const error =new Error('NOT AUTHENTICATED');
        error.statusCode = 401;
        throw error;
    }
    let decodedToken;
    try{
        decodedToken=jwt.verify(token, process.env.SECRET);
    }catch (err){
         res.json({
                    auth: false,
                    message: "Failed to Auth"
                });
    }
    if(!decodedToken){
         res.json({
                    auth: false,
                    message: "Failed to Auth"
                });
    }
    next();
};