const prisma = require("../config/prisma");

// ===============================
// Get All Users
// ===============================
const getAllUsers = async (
    search = "",
    page = 1,
    limit = 10,
    sort = "createdAt",
    order = "desc",
    role,
    gender,
    isActive
) => {

    const skip = (page - 1) * limit;

    // Build filter dynamically
    const where = {
        OR: [
            {
                fullName: {
                    contains: search,
                },
            },
            {
                email: {
                    contains: search,
                },
            },
        ],
    };

    if (role) {
        where.role = role;
    }

    if (gender) {
        where.gender = gender;
    }

    if (isActive !== undefined) {
        where.isActive = isActive === "true";
    }

    const users = await prisma.user.findMany({
        where,

        select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
            role: true,
            gender: true,
            height: true,
            weight: true,
            goal: true,
            batchTiming: true,
            isActive: true,
            createdAt: true,
        },

        orderBy: {
            [sort]: order,
        },

        skip,

        take: Number(limit),
    });

    const totalUsers = await prisma.user.count({
        where,
    });

    return {
        users,
        totalUsers,
    };
};
// ===============================
// Get User By ID
// ===============================
const getUserById = async (id) => {

    const user = await prisma.user.findUnique({
        where: {
            id: Number(id),
        },
        select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
            role: true,
            gender: true,
            dateOfBirth: true,
            height: true,
            weight: true,
            goal: true,
            batchTiming: true,
            profileImage: true,
            isActive: true,
            isVerified: true,
            lastLogin: true,
            createdAt: true,
        },
    });

    if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        throw error;
    }

    return user;
};

// ===============================
// Update User
// ===============================
const updateUser = async (id, userData) => {

    const existingUser = await prisma.user.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!existingUser) {
        const error = new Error("User not found");
        error.statusCode = 404;
        throw error;
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: Number(id),
        },
        data: userData,
        select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
            role: true,
            gender: true,
            height: true,
            weight: true,
            goal: true,
            batchTiming: true,
            isActive: true,
            updatedAt: true,
        },
    });

    return updatedUser;
};

// ===============================
// Delete User
// ===============================
const deleteUser = async (id) => {

    const existingUser = await prisma.user.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!existingUser) {
        const error = new Error("User not found");
        error.statusCode = 404;
        throw error;
    }

    await prisma.user.delete({
        where: {
            id: Number(id),
        },
    });

    return;
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
};