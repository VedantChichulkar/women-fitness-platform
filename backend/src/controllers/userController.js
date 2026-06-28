const asyncHandler = require("../utils/asyncHandler");

const {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
} = require("../services/userService");

const updateUserDetails = asyncHandler(async (req, res) => {

    const user = await updateUser(
        req.params.id,
        req.body
    );

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: user,
    });

});

const getUsers = asyncHandler(async (req, res) => {

    const search = req.query.search || "";

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    // Allowed sorting fields
    const allowedSortFields = [
        "fullName",
        "email",
        "createdAt",
        "role",
        "height",
        "weight"
    ];

    const sort = allowedSortFields.includes(req.query.sort)
        ? req.query.sort
        : "createdAt";

    const order =
        req.query.order === "asc" || req.query.order === "desc"
            ? req.query.order
            : "desc";

    const role = req.query.role;
    const gender = req.query.gender;
    const isActive = req.query.isActive;

    const result = await getAllUsers(
        search,
        page,
        limit,
        sort,
        order,
        role,
        gender,
        isActive
    );

    res.status(200).json({
        success: true,
        page,
        limit,
        totalUsers: result.totalUsers,
        totalPages: Math.ceil(result.totalUsers / limit),
        count: result.users.length,
        data: result.users,
    });

});

const getUser = asyncHandler(async (req, res) => {

    const { id } = req.params;
    const user = await getUserById(id);

    res.status(200).json({
        success: true,
        data: user,
    });

});


const deleteUserDetails = asyncHandler(async (req, res) => {

    const user = await deleteUser(req.params.id);

    res.status(200).json({
        success: true,
        message: "User deleted successfully",
    });

});

module.exports = {
    getUsers,
    getUser,
    updateUserDetails,
    deleteUserDetails,
};