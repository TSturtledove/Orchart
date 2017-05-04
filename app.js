"use strict";

//require in the constants
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors =require("cors");
const routes = require("./routes/");

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//setting base route
app.use("/api/v1/", routes);

//the catch for the 404 error
app.use(function(req, res, next) {
  let err = new Error("Not found, 404 triggered");
  err.status = 404;
  next(err);
});

if(app.get("env") === "development" || app.get("env") === "test") {
  app.use( (err, req, res, next) => {
    console.log("error setting env", err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error:err
    });
  });
}

app.use( (err, req, res, next) => {
  res.status(err.status || 500);
  res.json ({
    message: err.message,
    error: {}
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

module.exports = app;
