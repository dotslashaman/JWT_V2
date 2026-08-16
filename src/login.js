const express = require("express");
const router = express.Router();
const userSchema = require('./db');
require('dotenv').config();
const mongoose = require("mongoose");
const validate = require("./validations");
const mongoCred = process.env.mongoUrl;

/*
mongoose.connect(mongoCred)
.then(() => {
    console.log("Database Connected");
})

.catch((error) => {
    console.log(error);
})

*/


router.post('/login', validate.validateEmail, validate.validatePassword, validate.validateAge, async(req,res) => {
    res.status(400).send("fail");
})
