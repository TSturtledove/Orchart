"use strict";

const {bookshelf} = require("../../db/database");

const Plant = bookshelf.Model.extend({
  tableName: "plants"
}, {

  getOnePlant: function(id) {
    console.log("fired getOnePlant")
    return this.forge({id})
    .fetch()
    .then((row) => {
      console.log("getOnePlant model", row)
      return row
    })
    .catch((err) => {
      console.log("error getting plant")
      return err
    })
  },

  getallplants: function(id) {
    console.log("fired getallplants")
    return this.forge()
    .fetchAll({})
    .then((rows) => {
      console.log("getallplants model", rows)
      return rows
    })
    .catch((err) => {
      console.log("error getting plants")
      return err
    })
  }
});

module.exports = Plant;
