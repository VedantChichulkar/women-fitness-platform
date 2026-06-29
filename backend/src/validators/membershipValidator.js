const { body } = require("express-validator");

const createMembershipPlanValidation = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Plan name is required"),

    body("durationInDays")
        .isInt({ min: 1 })
        .withMessage("Duration must be at least 1 day"),

    body("price")
        .isFloat({ gt: 0 })
        .withMessage("Price must be greater than 0"),

    body("description")
        .optional()
        .isString()
        .withMessage("Description must be a string"),

];

const updateMembershipPlanValidation = [

    body("name")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Plan name is required"),

    body("durationInDays")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Duration must be at least 1 day"),

    body("price")
        .optional()
        .isFloat({ gt: 0 })
        .withMessage("Price must be greater than 0"),

    body("description")
        .optional()
        .isString()
        .withMessage("Description must be a string"),

];

module.exports = {
    createMembershipPlanValidation,
};