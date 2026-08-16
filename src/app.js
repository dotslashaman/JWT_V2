const express = require("express");
const validate = require('./validations');
const app = express();
app.use(express.json());

app.post('/pingg', validate.validateAge , (req,res) => {
    res.status(200).send("Everything fine here : )")
});
module.exports = app;