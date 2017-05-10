"use strict";

const passport = require("passport");

const Farmer = require("../models/farmers")

module.exports.authcheck = (req, res, next) =>{
  passport.authenticate("local", (err, user, msg) => {
    console.log("goat there")
    if(err) return next(err)
    if(!user) return console.log("nope");

    req.login(user, (err)=> {
      if (err) return next(err)
      req.session.save( ()=> {
        res.redirect("/")
      })
      console.log("user logged in", user)
    })
  })(req, res, next)
}

module.exports.create = ({body: {name, password, confirmation}}, res, next) => {
  if (password === confirmation) {
    Farmer.findOneByUsername(name)
    .then( (user) => {
      if (user) return res.render("login", {msg: "Name already used"});
      return Farmer.forge({name, password})
      .save()
      .then( ()=> {
        passport.authenticate("local", (err, user, msg) => {
          if(err) return next(err)
          if(!user) return res.render("login", {page: "login", msg})
          req.login(user, (err)=> {
            if (err) return next(err)
            req.session.save( ()=> {
              res.redirect("/")
            })
          })
        })(req, res, next)
      })
      .catch( (err)=> res.render("login", {msg: "problem on save"}));
    })
    .catch( (err)=> res.render("login", {msg: "problem on findOneByUsername"}));
  } else {
    res.render("login", {msg: "password and confirmation don't match"});
  }
}

module.exports.destroy = (req, res) => {
  req.logout()
  res.redirect("/")
}
