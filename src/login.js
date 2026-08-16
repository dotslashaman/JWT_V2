const express = require("express");
const router = express.Router();
const db = require('./db');
require('dotenv').config();
const mongoose = require("mongoose");
const validate = require("./validations");


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
        const checkExisting = await db.findOne({email});

        if(!checkExisting){
            console.log(req.body);
             res.status(400).json({
                "mgs" : "Log In Failed",
                "details" : "User Does Not Exists"
            })
        }
        else{
            res.status(200).json({
                "msg" : "Welcome!Logged In"
            })
        }
    }
)



module.exports = router;
