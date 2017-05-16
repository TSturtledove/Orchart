"use strict";

const {Router} = require("express");
const router = Router();

const {maketreatment} = require("../controllers/treatmentsCon")
const {seedfield, getFields, getField} = require("../controllers/fieldsCon")
const {authcheck, create, destroy, gatecheck} = require("../controllers/authCon")

// routes to be used
// router.use(require("./homeRoute"));
// router.use(require("./registeruserRoute"));
router.post("/authcheck", authcheck);
router.post("/authcheck/new", create);
router.post("/authcheck/logout", destroy);
router.get("/gatecheck", gatecheck);


// router.use( (req, res, next) => {
//   if (req.isAuthenticated()) {
//     next();
//   } else {
//     res.redirect("/")
//   }
// });

router.get("/fields", getFields)
router.post("/field/new", seedfield)
router.get("/field/:id", getField)
router.post("/field/newtreatment", maketreatment)
//the way this is currently setup each of these links are referenceing "Route"
//pages that will have the "get", "post", "delete", etc. commands
//for reference it is like the concat-dating project
// router.use(require("./profileRoute"));//route for profile
//route to show profile
//needs a route for editing information on th eprofile (patch or post?)
//route for deleting profile?
// router.use(require("./fieldRoute"));//route for specific field
//route to show field
//route for adding a field
//needs a route for editing field
//route for removing field
// router.use(require("./plantRoute"));//route for specific plant in field
//route to show plant
//route for adding a plant
//router for editing a plant
//route for removing a plant
// router.use(require("./"));
// router.use(require("./"));

module.exports = router;
