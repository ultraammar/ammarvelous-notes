const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user")

async function signup(req, res) {
    const email = req.body.email;
    //hashed pass gen
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    try{
        const user = await User.create({
        email,
        password: hashedPassword,
        })
        res.sendStatus(200);
    }
    catch(err){
        res.status(400).json({error: "User already exists"});
    }
}

async function login(req, res) {
    try{
        const email = req.body.email;
        const password = req.body.password;

        //find user
        const user = await User.findOne({email: email});
        if(!user){
            res.status(401).json({error: "User does not exist"});
        }

        //check password
        const passwordMatch = bcrypt.compareSync(password, user.password); //true
        if(!passwordMatch){
            res.status(401).json({error: "Password is incorrect"});
        }

        //jwt token creation
        const exp = Date.now() + 1000 *60 *60*24*30;
        const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);
        
        //send cookie
        res.cookie("auth_token", token, {
            expires: new Date(exp),
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === "production"
        })

        //send status
        res.sendStatus(200);
    }catch(err){
        res.status(500).json({error: "Server error"});
    }
    

    
}

function checkAuth(req, res){
    try{
        res.sendStatus(200);
    }catch(err){
        res.status(500).json({error: "Server error"});
    
    }
}

async function logout(req, res) {
  try{
    res.clearCookie("auth_token").sendStatus(200);
  } catch(err){
    console.log(err);
    res.status(500).json({error: "Server error"});
  }
}

module.exports = {
    signup,
    login,
    logout,
    checkAuth
};