const express = require("express");

const router = express.Router();

// Controllers
const {
    register,
    login,
    getProfile,
} = require("../controllers/authController");

// Middlewares
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");
const validate = require("../middleware/validationMiddleware");

// Validators
const {
    registerValidation,
    loginValidation,
} = require("../validators/authValidator");

// =========================
// Authentication Routes
// =========================

// Register
router.post(
    "/register",
    registerValidation,
    validate,
    register
);

// Login
router.post(
    "/login",
    loginValidation,
    validate,
    login
);

// Current Logged-in User
router.get(
    "/me",
    protect,
    getProfile
);

// Admin Test Route
router.get(
    "/admin-test",
    protect,
    authorize("ADMIN"),
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "Welcome Admin!",
        });
    }
);

module.exports = router;