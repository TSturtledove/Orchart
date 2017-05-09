"use strict";

const Farmer = require("../models/farmers")
const passport = require("passport");
module.exports.authcheck = (req, res, next) =>
  passport.authenticate("local", (err, user, msg) => {
    if(err) return next(err)
    if(!user) return res.render("login", {page: "login", msg});

    req.login(user, (err)=> {
      if (err) return next(err)
      res.redirect("/")
    });
  })(req, res, next)

module.exports.create = ({body: {name, password, confirmation}}, res) => {
  if (password === confirmation) {
    Farmer.findOneByUsername(username)
    .then( (user) => {
      if (user) return res.render("register", {msg: "Name already used"});
      return User.forge({username, password})
      .save()
      .then( ()=> {
        res.redirect("/")
      });
      .catch( (err)=> res.render("register", {msg: "problem on save"}));
    });
    .catch( (err)=> res.render("register", {msg: "problem on findOneByUsername"}));
  } else {
    res.render("register", {msg: "password and confirmation don't match"});
  }
}
