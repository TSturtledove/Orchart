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
    return this.forge({name})
    .fetch()
    .then( (user) => {
      // console.log("got user", user.get("name"));
      return user;
    })
    .catch( ()=> {
      // console.log("did not find user");
      return(null)
    });
  }
});

module.exports = Farmer;
