"use strict";

const {bookshelf} = require("../../db/database");
const {compare} = require("bcryptjs");

const Farmer = bookshelf.Model.extend({
  tableName: "farmers",
  bcrypt: {field: "password"},
  comparePass: function (passwordStr) {
    // console.log("password", passwordStr);
    // console.log("user", this.attributes);
    return compare(passwordStr, this.attributes.password)
  }
}, {
  findOneByUsername: function(name) {
    console.log("name in finone", name)
    return this.forge({name})
    .fetch()
    .then( (user) => {
      console.log("got user", user);
      return user;
    })
    .catch( (err)=> {
      console.log("did not find user", err);
      // return(null)
    });
  }
});

module.exports = Farmer;
