"use strict";

const passport = require("passport");

const Farmer = require("../models/farmers")

module.exports.authcheck = (req, res, next) =>{
  // console.log("req", req.body)
  passport.authenticate("local", (err, user, msg) => {
    console.log("goat there", msg)
    if(err) return next(err)
    if(!user) return res.status(400).json(user);

    req.login(user, (err)=> {
      if (err) return next(err)
      req.session.save( ()=> {
        res.redirect("/")
      })
      console.log("user logged in", user)
    })
  })(req, res, next)
}

module.exports.create = (req, res, next) => {
  console.log(req.body)
  if (req.body.password === req.body.confirmation) {
    Farmer.findOneByUsername(req.body.name)
    .then( (user) => {
      console.log("then after findOneByUsername")
      if (user) return res.status(400).json(user);//err if name was already used
      let {name, password} = req.body
      console.log("checking body", {name, password})
      return Farmer.forge({name, password})
      .save()
      .then( ()=> {
        // console.log("does it get passed", req.body)
        // let {name, password} = req.body
        // console.log("does it get passed after here", {name, password})
        // console.log("does it get passed after here", name)
        // let user = {name, password}
        //
        // passport.authenticate("local", (err, {name, password}, msg) => {
        //   console.log("does it get here", name)
        //   if(err) return next(err)
        //   console.log("got to here first", user)
        //   if(!user) return res.status(200).json(user)//if err when registering this should send user back to registerpage
        //   console.log("got to here")
        //   req.login(user, (err)=> {
        //     console.log("login check", user)
        //     if (err) return next(err)
        //     req.session.save( ()=> {
        //       res.redirect("/")
        //     })
        //   })
        // })(req, res, next)
        console.log("end of authenticate")
        return res.json({})
      })
      .catch( (err)=>{ res.status(400)//render("login", {msg: "problem on save"}));
      console.log("error on findone", err)
    })
    })
    .catch( (err)=> res.status(400))//render("login", {msg: "problem on findOneByUsername"}));
  } else {
    res.status(400)//render("login", {msg: "password and confirmation don't match"});
  }
}

module.exports.destroy = (req, res) => {
  console.log("going to logout", req.user.name)
  req.logout()
  return res.json({})
  console.log("logged out")
}
