"use strict";

const {bookshelf} = require("../../db/database");

const Treatment = bookshelf.Model.extend({
  tableName: "treatment_fields"
}, {
  getalltreatments: function(id) {
    console.log("fired getalltreatments")
    return this.forge()
    .where({field_id: id})
    .fetchAll({})
    .then((rows) => {
      console.log("getalltreatments model")
      return rows
    })
    .catch((err) => {
      console.log("error getting treatments")
      return err
    })
  }



});

module.exports = Treatment;
