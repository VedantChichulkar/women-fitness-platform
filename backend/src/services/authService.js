const bcrypt = require("bcryptjs");
const prisma = require("../config/prisma");
const generateToken = require("../utils/generateToken");

const registerUser = async (userData) => {
    const {
        fullName,
        email,
        phone,
        password,
        gender,
        dateOfBirth,
        height,
        weight,
        goal,
        batchTiming,
    } = userData;

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await prisma.user.create({
        data: {
            fullName,
            email,
            phone,
            password: hashedPassword,
            gender,
            dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
            height,
            weight,
            goal,
            batchTiming,
        },
    });

    // Generate JWT
    const token = generateToken(user.id);

    return {
        user,
        token,
    };
};

const loginUser = async (userData) => {
    const { email, password } = userData;

    // Find user by email
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid email or password");
    }

    // Update last login
    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            lastLogin: new Date(),
        },
    });

    const token = generateToken(user.id);

    const { password: _, ...userWithoutPassword } = user;

    return {
        user: userWithoutPassword,
        token,
    };
};

module.exports = {
    registerUser,
    loginUser,
};