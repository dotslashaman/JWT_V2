const express = require("express");
const router = express.Router();
const db = require('./db');
require('dotenv').config();
const mongoose = require("mongoose");
const validate = require("./validations");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtKey = process.env.jwt_secret;




/*
mongoose.connect(mongoCred)
.then(() => {
    console.log("Database Connected");
})

.catch((error) => {
    console.log(error);
})

*/


router.post('/login',
    validate.validateEmail,
    validate.validatePassword,
    validate.validateAge,
    async(req,res) => {
        
        const email = req.body.email;
        const password = req.body.password;
        const checkExisting = await db.findOne({email});
        const payL = checkExisting.toObject();
        delete payL.password;
       


        if(!checkExisting){
            console.log(req.body);
            return res.status(400).json({
                "mgs" : "Log In Failed",
                "details" : "User Does Not Exists"
            })
        }
        else{
        
        const checkCorrect = await bcrypt.compare(password, checkExisting.password);
        
        if(checkCorrect == true){
            const token = jwt.sign(payL, jwtKey, {expiresIn : '60m'} )
            return res.status(200).json({
                "msg" : "Welcome, you are logged in : )",
                "token" : token
            })
        }else{
            
            
            return res.status(400).send("Wrong password");
        }
        }
    }
)



module.exports = router;
