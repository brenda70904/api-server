"use strict";

require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;



const logger = require("./middleware/logger");
const validator = require("./middleware/validator");
const handleError = require("./errorHandlers/500.js");
const notFound = require("./errorHandlers/404.js");
const customerRouter = require("./routes/customer");

app.use(customerRouter);
app.use(express.json);
app.use(logger);

app.get("/",(req, res, next)=>{
    res.status(200).send("API server");
});


app.use("*", notFound);
app.use(handleError);

const start = () => {
    app.listen(PORT, () => console.log(`listening to ${PORT}`));
}

module.exports = { app, start }