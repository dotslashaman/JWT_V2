const express = require("express");
const validateEmail = require("./validations");
const app = express();
app.use(express.json());

app.post('/pingg', validateEmail, (req,res) => {
    res.status(200).send("Everything fine here : )")
});
module.exports = app;