const express = require("express");
const router = express.Router();
require('dotenv').config();
const mongoose = require("mongoose");
const validate = require("./validations");
const mongoCred = process.env.mongoUrl;


mongoose.connect(mongoCred)
.then(() => {
    console.log("Database Connected");
})

.catch((error) => {
    console.log(error);
})

const userSchema = new mongoose.Schema({
    email : String,
    password : String,
    age : Number
});

const db = mongoose.model('UserData', userSchema);

router.post('/login', validate.validateEmail, validate.validatePassword, validate.validateAge, async(req,res) => {

})
