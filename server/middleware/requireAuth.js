const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function requireAuth(req, res, next){
    try{
        
        //read token off cookies
        const token = req.cookies.auth_token;

        //decode token
        const decoded = jwt.verify(token, process.env.SECRET);

        //check expiration
        if(Date.now() >= decoded.exp) {
            return res.status(401).json({error: "Token expired"})
        }

        //find user using decoded token
        const user = await User.findById(decoded.sub);
        if(!user) return res.status(401).json({error: "User not found."});
        

        //attach user to req object
        req.user = user;

        //continue on
        next();
    }catch(err){
        res.status(405).json({error: "Unauthorized"});
    }
}

module.exports = requireAuth;