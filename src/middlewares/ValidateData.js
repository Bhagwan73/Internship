const { body, query } = require("express-validator");


const validateCollege = [
    body("name")
        .notEmpty().withMessage("Name is required")
        .isString().withMessage("Enter valid name"),
    body("fullName")
        .notEmpty().withMessage("Full name is required")
        .isString().withMessage("Enter valid fullName"),
    body("logoLink")
        .notEmpty().withMessage("Logo link is required")
        .isURL().withMessage("Enter valid logoLink"),
];


const validateIntern = [
    body("name")
        .notEmpty().withMessage("Name is required")
        .isString().withMessage("Enter valid name"),
    body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Enter valid email"),
    body("mobile")
        .notEmpty().withMessage("Mobile is required")
        .isMobilePhone().withMessage("Enter valid mobile"),
]

const ValidateQuery=[
    query("collegeName")
        .notEmpty().withMessage("collegeName is required")
        .isString().withMessage("Enter valid collage name")
]

module.exports={validateCollege,validateIntern,ValidateQuery}