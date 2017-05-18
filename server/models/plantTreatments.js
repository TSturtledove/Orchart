"use strict";

const {bookshelf} = require("../../db/database");

const PlantTreatment = bookshelf.Model.extend({
  tableName: "treatment_plants"
}, {
  getallPlantTreatments: function(id) {
    console.log("fired getallPlantTreatments")
    return this.forge()
    .where({plant_id: id})
    .fetchAll({})
    .then((rows) => {
      // console.log("getallPlantTreatments model", rows)
      return rows
    })
    .catch((err) => {
      console.log("error getting plant treatments")
      return err
    })
  },
  editThisPlantTreatment: function({id, treatment, date}) {
    return this.forge({ id, treatment, date})
    .save()
    .then( () => {
      return { 'msg': 'Plant Treatment updated'}
    })
    .catch ( (err) => {
      console.log('err from edit plant treatment', err)
      return  err
    })
  }



});

module.exports = PlantTreatment;
