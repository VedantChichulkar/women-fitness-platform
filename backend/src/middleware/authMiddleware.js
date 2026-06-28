const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma");

const protect = async (req, res, next) => {
    try {
        let token;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            const user = await prisma.user.findUnique({
                where: {
                    id: decoded.id,
                },
            });

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: "User not found",
                });
            }

            req.user = user;

            next();
        } else {
            return res.status(401).json({
                success: false,
                message: "Not authorized",
            });
        }
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Token is invalid",
        });
    }
};

module.exports = {
    protect,
};