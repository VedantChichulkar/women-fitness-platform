const asyncHandler = require("../utils/asyncHandler");

const {
    registerUser,
    loginUser,
} = require("../services/authService");

// =========================
// Register User
// =========================
const register = asyncHandler(async (req, res) => {

    const data = await registerUser(req.body);

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        data,
    });

});

// =========================
// Login User
// =========================
const login = asyncHandler(async (req, res) => {

    const data = await loginUser(req.body);

    res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data,
    });

});

// =========================
// Get Current User
// =========================
const getProfile = asyncHandler(async (req, res) => {

    const { password, ...user } = req.user;

    res.status(200).json({
        success: true,
        data: user,
    });

});

module.exports = {
    register,
    login,
    getProfile,
};