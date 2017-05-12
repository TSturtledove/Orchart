"use strict";

const Field = require("../models/fields");

module.exports.seedfield = (req, res, next) => {
  console.log("dog")
  console.log("making a field with", req.body)
  // Field.findOneByFieldname(req.body.name)
  // .then( (field) => {
  //   console.log("findOneByFieldname ran")
  //   if (field) return res.status(400).json(field);//err if name was used already
  //   let name = req.body
  //   console.log("checking body for field name", name)
  //   return Field.forge(name)
  //   .save()
  //   .then( ()=> {
  //     console.log("end of field making")
  //     return res.json({})
  //   })
  //   .catch( (err)=> {
  //     res.status(400)
  //     console.log("error on finding field", err)
  //   })
  // })
  res.json({})
}
