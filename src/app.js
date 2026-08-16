const express = require("express");
const app = express();
const signUpRouter = require('./signup');
const loginRouter = require('./login');
app.use(express.json());

app.get('/pingg', (req,res) => {
    res.status(200).send("Everything fine here : )")
});

app.use('/', signUpRouter);

app.use('/', loginRouter);

module.exports = app;