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
  },
  editThisFieldTreatment: function({id, treatment, date}) {
    return this.forge({ id, treatment, date})
    .save()
    .then( () => {
      return { 'msg': 'Field Treatment updated'}
    })
    .catch ( (err) => {
      console.log('err from edit field treatment', err)
      return  err
    })
  }



});

module.exports = Treatment;
