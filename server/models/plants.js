"use strict";

const {bookshelf} = require("../../db/database");

const PlantTreatment = require("../models/plantTreatments");

const Plant = bookshelf.Model.extend({
  tableName: "plants",
  treatments: function() {
    return this.hasMany(PlantTreatment)
  },
}, {
  dependents: ["treatments"],

  getOnePlant: function(id) {
    // console.log("fired getOnePlant")
    return this.forge({id})
    .fetch()
    .then((row) => {
      // console.log("getOnePlant model")
      return row
    })
    .catch((err) => {
      console.log("error getting plant")
      return err
    })
  },

  getallplants: function(id) {
    // console.log("fired getallplants")
    return this.forge()
    .where({field_id: id})
    .fetchAll({})
    .then((rows) => {
      // console.log("getallplants model")
      return rows
    })
    .catch((err) => {
      console.log("error getting plants")
      return err
    })
  },
  editThisPlant: function({id, name, date}) {
    return this.forge({ id, name, date})
    .save()
    .then( () => {
      return { 'msg': 'Plant updated'}
    })
    .catch ( (err) => {
      console.log('err from edit plant', err)
      return  err
    })
  }


});

module.exports = Plant;
