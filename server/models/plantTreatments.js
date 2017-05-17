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
  }



});

module.exports = PlantTreatment;
