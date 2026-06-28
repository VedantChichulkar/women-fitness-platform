const { body } = require("express-validator");

const registerValidation = [

    body("fullName")
        .trim()
        .notEmpty()
        .withMessage("Full name is required")
        .isLength({ min: 3, max: 50 })
        .withMessage("Full name must be between 3 and 50 characters"),

    body("email")
        .trim()
        .isEmail()
        .withMessage("Enter a valid email")
        .normalizeEmail(),

    body("phone")
        .trim()
        .matches(/^[0-9]{10}$/)
        .withMessage("Phone number must contain exactly 10 digits"),

    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")
        .matches(/[A-Z]/)
        .withMessage("Password must contain at least one uppercase letter")
        .matches(/[a-z]/)
        .withMessage("Password must contain at least one lowercase letter")
        .matches(/[0-9]/)
        .withMessage("Password must contain at least one number"),

    body("gender")
        .optional()
        .isIn(["MALE", "FEMALE", "OTHER"])
        .withMessage("Invalid gender"),

    body("height")
        .optional()
        .isFloat({ min: 50, max: 300 })
        .withMessage("Height must be between 50 cm and 300 cm"),

    body("weight")
        .optional()
        .isFloat({ min: 20, max: 500 })
        .withMessage("Weight must be between 20 kg and 500 kg"),

    body("goal")
        .optional()
        .trim(),

    body("batchTiming")
        .optional()
        .trim(),
];

const loginValidation = [

    body("email")
        .trim()
        .isEmail()
        .withMessage("Enter a valid email")
        .normalizeEmail(),

    body("password")
        .notEmpty()
        .withMessage("Password is required"),
];

module.exports = {
    registerValidation,
    loginValidation,
};
