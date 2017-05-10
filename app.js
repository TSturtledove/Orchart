"use strict";

//require in the constants
require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors =require("cors");
const routes = require("./server/routes/");
console.log("routes", routes)
const session = require("express-session");
const passport = require("passport");
const KnexSessionStore = require("connect-session-knex")(session);
const { knex } = require("./db/database");


const app = express();

app.use(cors())
//setting base route

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(session({
  store: new KnexSessionStore({
    knex,
    tablename: "sessions"
  }),
  resave:false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET || "farmersecretkey"
}))

require("./server/lib/passport-strategies")
app.use(passport.initialize())
app.use(passport.session())

app.use( (req, res, next) => {
  app.locals.username = req.user && req.user.username
  next()
})

app.use(express.static("public"))
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
