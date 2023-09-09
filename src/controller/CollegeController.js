const { validationResult } = require("express-validator")
const CollageModel = require("../model/CollegeModel")
const InternModel = require("../model/InternModel")

  
exports.createCollege = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).send({ status: false, message: errors.array()[0].msg })
        }
        const data = req.body
        const collage = await CollageModel.create(data)
        return res.status(201).send({ status: true, message: "Collage created successfully", collage })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}


exports.getCollegeDetails = async (req, res) => {
    try {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).send({ status: false, message: error.array()[0].msg })
        }

        const { collegeName } = req.query
        const college = await CollageModel.findOne({ name: collegeName, isDeleted: false })
        if (!college) {
            return res.status(404).send({ status: false, message: 'collage not found' })
        }
        const Interns = await InternModel.find({ collegeId: college._id, isDeleted: false }).select({ name: 1, email: 1, mobile: 1 })
        const result = {
            name: college.name,
            fullName: college.fullName,
            logoLink: college.logoLink,
            interns: Interns.length == 0 ? "no interns found for this college." : Interns
        }
        return res.status(200).send({ status: true, data: result })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}