const { validationResult } = require("express-validator")
const CollageModel = require("../model/CollegeModel")
const InternModel = require("../model/InternModel")


exports.registerIntern = async (req, res) => {
    try {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).send({ status: false, message: error.array()[0].msg })
        }
        const {email,mobile,collegeName}=req.body
        const validEmail=await InternModel.findOne({email:email,isDeleted:false})
        if(validEmail) return res.status(400).send({status:false,message:"Email is already registered"})
        const validMobile=await InternModel.findOne({mobile:mobile,isDeleted:false})
        if(validMobile) return res.status(400).send({status:false,message:"Mobile is already registered"})
        const validCollage=await CollageModel.findOne({name:collegeName,isDeleted:false})
        if(!validCollage) return res.status(404).send({status:false,message:"Collage not found"})
        
        req.body['collegeId']=validCollage._id
        const Intern=await InternModel.create(req.body)
        return res.status(201).send({status:true,message:'Internship application submitted successfully!', Intern})
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}