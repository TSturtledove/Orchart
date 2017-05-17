"use strict";

const {bookshelf} = require("../../db/database");

const Treatment = require("../models/treatments");
const Plant = require("../models/plants");

// const {compare} = require("bcryptjs");

const Field = bookshelf.Model.extend({
  tableName: "fields",
  treatments: function() {
    return this.hasMany(Treatment)
  },
  plants: function() {
    return this.hasMany(Plant)
  }
}, {
  dependents: ["treatments", "plants"],
  findOneByFieldname: function(name) {
    console.log("name passed to field finder", name)
    return this.where("name", name)
    .fetch()
    .then( (field) => {
      console.log("got field");
      return field;
    })
    .catch( (err)=> {
      console.log("did not find user", err);
      return(null)
    });
  },
  getfield: function(id) {
    console.log("fired getfield", id)
    return this.forge()
    .where({id: id})
    .fetch()
    .then((row) => {
      console.log("getfield model")
      return row
    })
    .catch((err) => {
      console.log("error getting field")
      return err
    })
  },

  getallfields: function(id) {
    console.log("fired getallfields")
    return this.forge()
    .where({user_id: id})
    .fetchAll({})
    .then((rows) => {
      // console.log("getallfields model", rows)
      return rows
    })
    .catch((err) => {
      console.log("error getting fields")
      return err
    })
  }

});

module.exports = Field;
