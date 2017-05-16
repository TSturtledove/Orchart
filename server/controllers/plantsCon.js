"use strict";

const Plant = require("../models/plants");

const Field = require("../models/fields");

module.exports.getPlants = ({params: {id}}, res, next) => {
  console.log("called getPlants")
  Plant.getallplants(id)
  .then((plants) => {
    // console.log("gotback from field model", fields)
    console.log("gotback from plant model")
    return res.json(plants)
  })
  .catch((err) => { return next(err)
  })
}

module.exports.getOnePlant = ({params: {id}}, res, next) => {
  console.log("called getOnePlants")
  Plant.getOnePlant(id)
  .then((plant) => {
    // console.log("gotback from field model", fields)
    console.log("gotback from plant model")
    return res.json(plant)
  })
  .catch((err) => { return next(err)
  })
}

module.exports.makePlant = (req, res, next) => {
  // console.log("dog")
  console.log("making a plant with", req.body)

  // module.exports.getField = ({params: {id}}, res, next) => {
    // console.log("called getField")
    // Field.getfield(id)
    // .then((field) => {
      let date = req.body.date
      let name = req.body.name
      let field_id = req.body.id
    //
      console.log("date", date)
      console.log("name", name)
      console.log("field id", field_id)
    //   console.log("gotback from field model")
      return Plant.forge({name, field_id, date})
      .save()
      .then( ()=> {
        console.log("end of plant making for field")
        return res.json({})
      })
    // })
    .catch((err) => {
      console.log("error on forge plant", err)
      return next(err)
    })
  }
