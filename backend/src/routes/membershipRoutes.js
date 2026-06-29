const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const {
    createPlan,
    getPlans,
    getPlanById,
    purchasePlan,
    getMyMembership,
} = require("../controllers/membershipController");

const {
    createMembershipPlanValidation,
} = require("../validators/membershipValidator");

const {
    purchaseMembershipValidation,
} = require("../validators/purchaseMembershipValidator");

// ===============================
// CREATE MEMBERSHIP PLAN (ADMIN)
// ===============================
router.post(
    "/",
    protect,
    authorize("ADMIN"),
    createMembershipPlanValidation,
    createPlan
);

// ===============================
// GET ALL MEMBERSHIP PLANS
// ===============================
router.get(
    "/",
    protect,
    getPlans
);

// ===============================
// GET MY CURRENT MEMBERSHIP
// ===============================
router.get(
    "/my-membership",
    protect,
    getMyMembership
);

// ===============================
// PURCHASE MEMBERSHIP
// ===============================
router.post(
    "/purchase",
    protect,
    purchaseMembershipValidation,
    purchasePlan
);

// ===============================
// GET MEMBERSHIP PLAN BY ID
// ===============================
router.get(
    "/:id",
    protect,
    getPlanById
);

module.exports = router;