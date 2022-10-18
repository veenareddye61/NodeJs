const User = require('../models/user.model.js');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')

dotenv.config();
exports.signup = (req,res) => {
    const pwd = req.body.password;
    const salt =  bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(pwd,salt);

   if(!req.body){
       return res.status(400).send({
           message : "User content cannot be empty"
       });
   }
   const user = new User({
       email: req.body.email,
       password:req.body.password
   })
   user.save().then(data => {
       res.send(data);
   }).catch( err => {
       res.status(500).send({
           msg:"Error occured while creating record !!! "
       });
   });
};
exports.findAll = (req,res) => {
    User.find().then(
        users => {
            res.send(users)
        }
    ).catch( err => {
        res.status(500).send({
            msg : "error occured while fetching users"
        })
    })
}

//Login or Authentcation 
exports.signin = (req,res) => {
        // request : email and pwd (alex@gmail.com 123456)


        // db: email and pwd  (alex@gmail.com  bcrypt_hashed_pwd)


        //  compare email and hashed pwd with user sent in request

        //return jwt- token
        //else return unauthorised user or false or user and pwd not match
}


exports.generateToken = (req,res) => {
    let jwtsecretKey = process.env.JWT_SECRECT_KEY;
    let data = {
        time: Date(),
        userId:101
    }
    const token = jwt.sign(data,jwtsecretKey);
    res.send(token);
}

exports.validateToken = ( req,res ) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtsecretkey = process.env.JWT_SECRECT_KEY;

    try{
        const token = req.headers.authorization;   
       
        const verified = jwt.verify(token,jwtsecretkey);
        if(verified){
            return res.send(" Token successfully verified");
        }else{
            return res.status(401).send(error);
        }
    }catch(error){
        return res.status(401).send(error);
    }
}