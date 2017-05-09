"use strict";

const passport = require("passport")
const {Strategy} = require("passport-local")
const {knex} = require("../db/database")

const Farmer = require("../models/farmers")



passport.serializeUser((user, done) => done(null, user.id));//user.id is created by the table.increments in the migration

passport.deserializeUser( (id, done) => {
  knex('users').where({id}).first()//searches the users table for a matching "id" and stops when it fine one
  .then( (user) => { done(null, user) })
  .catch( (err) => { done(err, null) })
});

const localStrategy = new Strategy({
  usernameField: 'username',//stores the username for persistance during login session
  passwordField: 'password'//stores the password for persistance during login session
},
  (name, passwordStr, done) => {
    Farmer.findOneByUsername(name)//calls the findOneByUsername fuction form userModel
    .then( (user) => {//the "user" here is a variable returned form the above search and is different from the "User" above
      if (user) {
      return Promise.all([
        user,
        user.comparePass(passwordStr)//this is comparing the input password "passwordString" with the one stored on the database for the found user
      ])
    }
    done(null, null, {msg: 'Username does not exist in system'})
  })
  .then( ([user, matches]) => {
    if (matches) {
      done(null, user, {msg: 'Login successful'})
    } else {
      done(null, null, {msg: 'Password is incorrect'})
    }
  })
  .catch(done)
})

passport.use(localStrategy)
