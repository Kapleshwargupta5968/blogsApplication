const jwt = require("jsonwebtoken");
const User = require("../models/user");
const authMiddleware = async (req, res, next) => {
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Token not provide, unauthorized access"
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");
        req.user = user;
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:`Internal server error ${error.message}`
        })
    }
}

module.exports = authMiddleware;