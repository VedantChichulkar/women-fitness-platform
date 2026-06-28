const express = require("express");

const router = express.Router();

const {
    getUsers,
    getUser,
    updateUserDetails,
    deleteUserDetails,
} = require("../controllers/userController");

const {
    protect,
} = require("../middleware/authMiddleware");

const {
    authorize,
} = require("../middleware/roleMiddleware");

router.get(
    "/",
    protect,
    authorize("ADMIN"),
    getUsers
);

router.get(
    "/:id",
    protect,
    authorize("ADMIN"),
    getUser
);

router.put(
    "/:id",
    protect,
    authorize("ADMIN"),
    updateUserDetails
);

router.delete(
    "/:id",
    protect,
    authorize("ADMIN"),
    deleteUserDetails
);


module.exports = router;