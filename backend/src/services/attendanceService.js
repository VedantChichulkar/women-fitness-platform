const prisma = require("../config/prisma");

const getTodayRange = () => {

    const now = new Date();

    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);

    return {
        startOfDay,
        endOfDay,
    };

};

// ===============================
// CHECK IN
// ===============================
const checkIn = async (userId) => {

    const { startOfDay, endOfDay } = getTodayRange();

    const existingAttendance = await prisma.attendance.findFirst({
        where: {
            userId,
            checkIn: {
                gte: startOfDay,
                lte: endOfDay,
            },
        },
    });

    if (existingAttendance) {
        throw new Error("You have already checked in today.");
    }

    const attendance = await prisma.attendance.create({
        data: {
            userId,
            checkIn: new Date(),
            status: "PRESENT",
        },
    });

    return attendance;
};

// ===============================
// CHECK OUT
// ===============================
const checkOut = async (userId) => {

    const attendance = await prisma.attendance.findFirst({
        where: {
            userId,
            checkOut: null,
        },
        orderBy: {
            checkIn: "desc",
        },
    });

    if (!attendance) {
        throw new Error("No active check-in found.");
    }

    if (attendance.checkOut) {
        throw new Error("You have already checked out.");
    }

    const updatedAttendance = await prisma.attendance.update({
        where: {
            id: attendance.id,
        },
        data: {
            checkOut: new Date(),
        },
    });

    return updatedAttendance;
};

// ===============================
// GET MY ATTENDANCE
// ===============================
const getMyAttendance = async (userId) => {

    const attendance = await prisma.attendance.findMany({
        where: {
            userId,
        },
        orderBy: {
            checkIn: "desc",
        },
    });

    return attendance;
};

// ===============================
// GET ALL ATTENDANCE (ADMIN)
// ===============================
const getAllAttendance = async () => {

    const attendance = await prisma.attendance.findMany({

        include: {
            user: {
                select: {
                    id: true,
                    fullName: true,
                    email: true,
                    phone: true,
                    role: true,
                },
            },
        },

        orderBy: {
            checkIn: "desc",
        },

    });

    return attendance;
};
// ===============================
// GET DASHBOARD STATS
// ===============================
const getDashboardStats = async () => {

    const { startOfDay, endOfDay } = getTodayRange();

    const [
        totalMembers,
        checkedInToday,
        checkedOutToday,
        currentlyInside,
    ] = await Promise.all([

        prisma.user.count(),

        prisma.attendance.count({
            where: {
                checkIn: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
        }),

        prisma.attendance.count({
            where: {
                checkIn: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
                checkOut: {
                    not: null,
                },
            },
        }),

        prisma.attendance.count({
            where: {
                checkIn: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
                checkOut: null,
            },
        }),

    ]);

    return {
        totalMembers,
        checkedInToday,
        checkedOutToday,
        currentlyInside,
    };

};

module.exports = {
    checkIn,
    checkOut,
    getMyAttendance,
    getAllAttendance,
    getDashboardStats,
};