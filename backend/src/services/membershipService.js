const prisma = require("../config/prisma");

const createMembershipPlan = async (planData) => {

    const {
        name,
        description,
        durationInDays,
        price,
    } = planData;

    // Check if plan already exists
    const existingPlan = await prisma.membershipPlan.findFirst({
        where: {
            name,
        },
    });

    if (existingPlan) {
        throw new Error("Membership plan already exists.");
    }

    // Create plan
    const membershipPlan = await prisma.membershipPlan.create({
        data: {
            name,
            description,
            durationInDays,
            price,
        },
    });

    return membershipPlan;
};

const getAllMembershipPlans = async (query) => {

    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;

    const search = query.search || "";

    const status = query.status;

    const sort = query.sort || "createdAt";

    const where = {};

    // Search by plan name
    if (search) {
        where.name = {
            contains: search,
        };
    }

    // Filter by active / inactive
    if (status === "active") {
        where.isActive = true;
    }

    if (status === "inactive") {
        where.isActive = false;
    }

    const orderBy = {};

    if (sort === "price") {
        orderBy.price = "asc";
    } else if (sort === "duration") {
        orderBy.durationInDays = "asc";
    } else if (sort === "name") {
        orderBy.name = "asc";
    } else {
        orderBy.createdAt = "desc";
    }

    const [plans, total] = await Promise.all([

        prisma.membershipPlan.findMany({
            where,
            skip,
            take: limit,
            orderBy,
        }),

        prisma.membershipPlan.count({
            where,
        }),

    ]);

    return {
        page,
        limit,
        total,
        plans,
    };
};

// ===============================
// GET MEMBERSHIP PLAN BY ID
// ===============================
const getMembershipPlanById = async (id) => {

    const membershipPlan = await prisma.membershipPlan.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!membershipPlan) {
        throw new Error("Membership plan not found.");
    }

    return membershipPlan;
};

const updateMembershipPlan = async (id, updates) => {

    const plan = await prisma.membershipPlan.findUnique({
        where: {
            id,
        },
    });

    if (!plan) {
        throw new Error("Membership plan not found.");
    }

    return await prisma.membershipPlan.update({
        where: {
            id,
        },
        data: updates,
    });
};

const deleteMembershipPlan = async (id) => {

    const plan = await prisma.membershipPlan.findUnique({
        where: {
            id,
        },
    });

    if (!plan) {
        throw new Error("Membership plan not found.");
    }

    await prisma.membershipPlan.delete({
        where: {
            id,
        },
    });
};

// ===============================
// PURCHASE MEMBERSHIP
// ===============================
const purchaseMembership = async (userId, membershipPlanId) => {

    // STEP 1
    // Find membership plan

    const membershipPlan = await prisma.membershipPlan.findUnique({
        where: {
            id: Number(membershipPlanId),
        },
    });

    if (!membershipPlan) {
        throw new Error("Membership plan not found.");
    }

    // STEP 2
    // Check if plan is active

    if (!membershipPlan.isActive) {
        throw new Error("Membership plan is inactive.");
    }

    // STEP 3
    // Check existing active membership

    const activeMembership = await prisma.userMembership.findFirst({

        where: {
            userId,
            isActive: true,
        },

    });

    if (activeMembership) {
        throw new Error("You already have an active membership.");
    }

    // STEP 4
    // Calculate dates

    const startDate = new Date();

    const endDate = new Date(startDate);

    endDate.setDate(
        endDate.getDate() + membershipPlan.durationInDays
    );

    // STEP 5
    // Create membership snapshot

    const membership = await prisma.userMembership.create({

        data: {

            userId,

            membershipPlanId: membershipPlan.id,

            planName: membershipPlan.name,

            durationInDays: membershipPlan.durationInDays,

            pricePaid: membershipPlan.price,

            startDate,

            endDate,

            isActive: true,

        },

    });

    return membership;

};

// ===============================
// GET CURRENT MEMBERSHIP
// ===============================
const getCurrentMembership = async (userId) => {

    const membership = await prisma.userMembership.findFirst({

        where: {
            userId,
            isActive: true,
        },

        include: {
            membershipPlan: true,
        },

        orderBy: {
            createdAt: "desc",
        },

    });

    if (!membership) {
        throw new Error("No active membership found.");
    }

    // Calculate remaining days
    const today = new Date();

    const remainingMilliseconds =
        membership.endDate.getTime() - today.getTime();

    const daysRemaining = Math.max(
        0,
        Math.ceil(remainingMilliseconds / (1000 * 60 * 60 * 24))
    );

    return {
        ...membership,
        daysRemaining,
    };
};

module.exports = {
    createMembershipPlan,
    getAllMembershipPlans,
    getMembershipPlanById,
    purchaseMembership,
    getCurrentMembership,
};