"use strict";

const Treatment = require("../models/treatments");

const PlantTreatment = require("../models/plantTreatments");

const Field = require("../models/fields");

const Plant = require("../models/plants");

module.exports.getTreatments = ({params: {id}}, res, next) => {
  console.log("called getallTreatments")
  Treatment.getalltreatments(id)
  .then((treatments) => {
    // console.log("gotback from field model", fields)
    console.log("gotback from treatment model")
    return res.json(treatments)
  })
  .catch((err) => { return next(err)
  })
}

module.exports.getPlantTreatments = ({params: {id}}, res, next) => {
  console.log("called getallPlantTreatments")
  PlantTreatment.getallPlantTreatments(id)
  .then((planttreatments) => {
    // console.log("gotback from field model", fields)
    console.log("gotback from treatment model")
    return res.json(planttreatments)
  })
  .catch((err) => { return next(err)
  })
}


module.exports.maketreatment = (req, res, next) => {
  // console.log("dog")
  console.log("making a treatment with", req.body)

  // module.exports.getField = ({params: {id}}, res, next) => {
    // console.log("called getField")
    // Field.getfield(id)
    // .then((field) => {
      let date = req.body.date
      let treatment = req.body.name
      let field_id = req.body.id
    //
      console.log("date", date)
      console.log("name", treatment)
      console.log("field id", field_id)
    //   console.log("gotback from field model")
      return Treatment.forge({treatment, field_id, date})
      .save()
      .then( ()=> {
        console.log("end of treatment making for field")
        return res.json({})
      })
    // })
    .catch((err) => {
      console.log("error on forge treatment", err)
      return next(err)
    })
  }

  module.exports.makePlantTreatment = (req, res, next) => {
    // console.log("dog")
    console.log("making a plant treatment with", req.body)

    // module.exports.getField = ({params: {id}}, res, next) => {
      // console.log("called getField")
      // Field.getfield(id)
      // .then((field) => {
        let date = req.body.date
        let treatment = req.body.name
        let plant_id = req.body.id
      //
        console.log("date", date)
        console.log("name", treatment)
        console.log("plant id", plant_id)
      //   console.log("gotback from field model")
        return PlantTreatment.forge({treatment, plant_id, date})
        .save()
        .then( ()=> {
          console.log("end of treatment making for plant")
          return res.json({})
        })
      // })
      .catch((err) => {
        console.log("error on forge plant treatment", err)
        return next(err)
      })
    }


    module.exports.removeFieldTreatment = ( {params: {num}}, res, next) => {
      console.log("is this the id", num)
      // right here decide if how you will get rid of the treatments, plants, and plant treatments
      // that are attached to the field in question
      Treatment.forge({id: num})
      .destroy()
      .then( (Treatment) => {
          console.log("deleted field treatment")
        res.status(200).json(Treatment)
      })
      .catch( (err) => {
        console.log('deleteshow err', err)
        return next(err)
      })
    }

    module.exports.editFieldTreatment = ( req, res, next) => {
      const animal =  req.body
      const id = req.params.id
      console.log("anmial", animal)
      console.log("id", id)
      Animals.editThisAnimal(id, animal)
      .then( (res) => {
        res.status(200).json(animal)
        .catch( (err) => {
          console.log("edit error", err)
          return next(err)
        })
      })
    }
