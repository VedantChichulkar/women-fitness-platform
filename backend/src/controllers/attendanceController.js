const {
    checkIn,
    checkOut,
    getMyAttendance,
    getAllAttendance,
    getDashboardStats,
} = require("../services/attendanceService");

const markCheckIn = async (req, res) => {
    try {

        const attendance = await checkIn(req.user.id);

        res.status(201).json({
            success: true,
            message: "Check-in successful",
            data: attendance,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};

const markCheckOut = async (req, res) => {
    try {

        console.log(req.user);

        const attendance = await checkOut(req.user.id);

        res.status(200).json({
            success: true,
            message: "Check-out successful",
            data: attendance,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};

const getMyAttendanceHistory = async (req, res) => {

    try {

        const attendance = await getMyAttendance(req.user.id);

        res.status(200).json({
            success: true,
            count: attendance.length,
            data: attendance,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

const getAttendance = async (req, res) => {

    try {

        const attendance = await getAllAttendance();

        res.status(200).json({
            success: true,
            count: attendance.length,
            data: attendance,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

const dashboardStats = async (req, res) => {

    try {

        const stats = await getDashboardStats();

        res.status(200).json({
            success: true,
            data: stats,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    markCheckIn,
    markCheckOut,
    getMyAttendanceHistory,
    getAttendance,
    dashboardStats,
};