const express = require("express");
const router = express.Router();
const db = require('./db');
require('dotenv').config();
const mongoose = require("mongoose");
const validate = require("./validations");
const bcrypt = require("bcrypt");



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
            return res.status(200).send("welcome : ) You are logged in");
        }else{
            
            
            return res.status(400).send("Wrong password");
        }
        }
    }
)



module.exports = router;
