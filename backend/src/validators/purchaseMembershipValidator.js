const { body } = require("express-validator");

const purchaseMembershipValidation = [

    body("membershipPlanId")
        .isInt({ min: 1 })
        .withMessage("Valid membership plan ID is required"),

];

module.exports = {
    purchaseMembershipValidation,
};