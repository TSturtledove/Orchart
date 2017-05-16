"use strict";

const Treatment = require("../models/treatments");

const Field = require("../models/fields");

module.exports.getTreatments = ({params: {id}}, res, next) => {
  console.log("called getFields")
  Treatment.getalltreatments(id)
  .then((treatments) => {
    // console.log("gotback from field model", fields)
    console.log("gotback from treatment model")
    return res.json(treatments)
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
