const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();
const userRoutes = require("./routes/userRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const membershipRoutes = require("./routes/membershipRoutes");
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/attendance", attendanceRoutes);
app.use("/api/v1/membership-plans", membershipRoutes);

// Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Women Fitness Platform API is running 🚀"
    });
});

// API Routes
app.use("/api/v1/auth", authRoutes);

// Handle Unknown Routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Error Handling Middleware ( MUST be last)
const errorHandler = require("./middleware/errorMiddleware");
app.use(errorHandler);

module.exports = app;
