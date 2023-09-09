const express=require("express");
const route=express.Router()
const { createCollege, getCollegeDetails } = require("../controller/CollegeController");
const { registerIntern } = require("../controller/InternController");
const { validateCollege, validateIntern, ValidateQuery } = require("../middlewares/ValidateData");


route.post("/functionup/colleges",validateCollege,createCollege)
route.get("/functionup/collegeDetails",ValidateQuery,getCollegeDetails)

route.post("/functionup/interns",validateIntern,registerIntern)

module.exports=route;