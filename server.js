const app = require("./src/app");
const port = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

const mongoCred = process.env.mongoUrl;

mongoose.connect(mongoCred)
.then(() => {
    console.log("Database connected")
})

.catch((error) => {
    console.log(error);
})
app.listen(port,() => {
    console.log(`Sever is up and listening on ${port}`);
});

