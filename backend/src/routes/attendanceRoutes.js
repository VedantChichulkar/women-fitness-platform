const express = require("express");

const router = express.Router();

const { authorize } = require("../middleware/roleMiddleware");

const {
    markCheckIn,
    markCheckOut,
    getMyAttendanceHistory,
    getAttendance,
    dashboardStats,
} = require("../controllers/attendanceController");

const {
    protect,
} = require("../middleware/authMiddleware");

router.post(
    "/checkin",
    protect,
    markCheckIn
);

router.patch(
    "/checkout",
    protect,
    markCheckOut
);

router.get(
    "/me",
    protect,
    getMyAttendanceHistory
);

router.get(
    "/",
    protect,
    getAttendance
);

router.get(
    "/dashboard",
    protect,
    authorize("ADMIN"),
    dashboardStats
);

module.exports = router;