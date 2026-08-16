const express = require("express");
const router = express.Router();
const validate = require("./validations");
const mongoose = require("mongoose");
const { number } = require("zod");
require('dotenv').config();
const db = require('./db'); 

const mongoCred = process.env.mongoUrl;

/*

mongoose.connect(mongoCred)
.then(() => {
    console.log("Database connected Successfully");
})

.catch((error) => {
    console.log(error);
})

*/




router.post('/signUp',
    
    validate.validateEmail,
    validate.validatePassword,
    validate.validateAge,
    async(req,res) => {
        
        const email = req.body.email;
        const checkExisting = await db.findOne({email});

        if(!checkExisting){
            const details = new db({...req.body})
            await details.save();
            res.status(200).json({
                "msg" : "User Created Successfully"
            })
        }else{
            res.status(400).json({
                "msg" : "User already present. Please login"
            })
        }
    }
);


module.exports = router;