"use strict";

const {bookshelf} = require("../../db/database");

const Treatment = bookshelf.Model.extend({
  tableName: "treatment_fields"
}, {
  getalltreatments: function(id) {
    console.log("fired getalltreatments")
    return this.forge()
    .fetchAll({})
    .then((rows) => {
      console.log("getalltreatments model", rows)
      return rows
    })
    .catch((err) => {
      console.log("error getting treatments")
      return err
    })
  }



});

module.exports = Treatment;
