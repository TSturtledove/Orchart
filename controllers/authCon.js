"use strict";

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

module.exports.create = ({body: {username, password, confirmation}}, res) => {
  if (password === confirmation) {
    User.findOneByUsername(username)
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
  }
}
