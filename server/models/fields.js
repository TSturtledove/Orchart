"use strict";

const {bookshelf} = require("../../db/database");
// const {compare} = require("bcryptjs");

const Field = bookshelf.Model.extend({
  tableName: "fields",
  // compareName: function (fieldnameStr) {
    // console.log("password", passwordStr);
    // console.log("user", this.attributes);
    // return compare(fieldnameStr, this.attributes.name)
  // }
}, {
  findOneByFieldname: function(name) {
    console.log("name passed to field finder", name)
    return this.forge({name})
    .fetch()
    .then( (field) => {
      console.log("got user", field);
      return field;
    })
    .catch( (err)=> {
      console.log("did not find user", err);
      return(null)
    });
  }
});

module.exports = Field;
