const {
    createMembershipPlan,
    getAllMembershipPlans,
    getMembershipPlanById,
    purchaseMembership,
    getCurrentMembership,
} = require("../services/membershipService");

// ===============================
// CREATE MEMBERSHIP PLAN
// ===============================
const createPlan = async (req, res) => {
    try {

        const membershipPlan = await createMembershipPlan(req.body);

        res.status(201).json({
            success: true,
            message: "Membership plan created successfully.",
            data: membershipPlan,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};

// ===============================
// GET ALL MEMBERSHIP PLANS
// ===============================
const getPlans = async (req, res) => {

    try {

        const result = await getAllMembershipPlans(req.query);

        res.status(200).json({
            success: true,
            page: result.page,
            limit: result.limit,
            total: result.total,
            data: result.plans,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

// ===============================
// GET MEMBERSHIP PLAN BY ID
// ===============================
const getPlanById = async (req, res) => {

    try {

        const membershipPlan = await getMembershipPlanById(req.params.id);

        res.status(200).json({
            success: true,
            data: membershipPlan,
        });

    } catch (error) {

        res.status(404).json({
            success: false,
            message: error.message,
        });

    }

};

// ===============================
// PURCHASE MEMBERSHIP
// ===============================
const purchasePlan = async (req, res) => {

    try {

        const membership = await purchaseMembership(
            req.user.id,
            req.body.membershipPlanId
        );

        res.status(201).json({
            success: true,
            message: "Membership purchased successfully.",
            data: membership,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

// ===============================
// GET MY MEMBERSHIP
// ===============================
const getMyMembership = async (req, res) => {

    try {

        const membership = await getCurrentMembership(req.user.id);

        res.status(200).json({
            success: true,
            data: membership,
        });

    } catch (error) {

        res.status(404).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    createPlan,
    getPlans,
    getPlanById,
    purchasePlan,
    getMyMembership,
};