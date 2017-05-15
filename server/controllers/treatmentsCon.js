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


module.exports.maketreatment = ({params: {id}}, res, next) => {
  // console.log("dog")
  console.log("making a field with", req.body)
  console.log("user id", req.user.id)

  // module.exports.getField = ({params: {id}}, res, next) => {
    console.log("called getField")
    Field.getfield(id)
    .then((field) => {
      // console.log("gotback from field model", fields)
      console.log("gotback from field model")
      return res.json(field)
    })
    .catch((err) => { return next(err)
    })
  }


  // Field.findOneByFieldname(req.body.name)
  // .then( (field) => {
    console.log("findOneByFieldname ran")
    // if (field) return res.status(400).json(field);//err if name was used already
    let name = req.body.name
    let date = req.body.date
    let user_id = req.user.id
    console.log("checking body for field name", name)
    return Field.forge({name, user_id, date})
    .save()
    .then( ()=> {
      console.log("end of field making")
      return res.json({})
    })
    .catch( (err)=> {
      res.status(400)
      console.log("error on finding field", err)
    })
  })
}
