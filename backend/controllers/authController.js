const User = require("../models/user");
const signup = async (req, res) => {
    try{
        const {name, email, password, role} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(409).json({
                success:false,
                message:"User already registered"
            });
        }

        const user = await User.create({
            name,
            email,
            password
        });

        const payload = {
            id:user._id,
            email:user.email,
            role:user.role
        }

        const token = generateToken(payload);
        res.cookie("token", token, {
            httpOnly:true,
            samesite:process.env.NODE_ENV === "production" ? "none" : "lax",
            secure:true,
            maxAge:7*24*60*60*1000
        });
        return res.status(201).json({
            sucess:true,
            message:"User registered successfully",
            token
        });
    }catch(error){
        return res.status(500).json({
            success:false,
            message:`Internal server error ${error.message}`
        })
    }
};

const signin = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                messgae:"All fields are required"
            });
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }
        const isPasswordMatch = await user.comparePassword(password);
        if(!isPasswordMatch){
            return res.status(403).json({
                success:false,
                message:"Invalid credentials"
            });
        }

        const payload = {
            id:user._id,
            email:user.email,
            role:user.role
        }
        const token = generateToken(payload);

        res.cookie("token", token, {
            httpOnly:true,
            sameSite:process.env.NODE_ENV === "production" ? "none" : "lax",
            secure:true,
            maxAge:7*24*60*60*1000
        });

        return res.status(200).json({
            success:true,
            message:"User login successfuly",
            token
        });
    }catch(error){
        return res.status(500).json({
            success:false,
            message:`Internal server errror ${error.message}`
        });
    }
};

const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: process.env.NODE_ENV==="production" ? "none" : "lax",
        });

        return res.status(200).json({
            success: true,
            message: "User logged out successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Internal server error ${error.message}`
        });
    }
};

const me = async (req, res) => {
    try{
        const user = req.user;
        if(!user){
            return res.status(401).json({
                success:false,
                message:"unauthorized access"
            });
        }
        return res.status(200).json({
            success:true,
            user,
            message:"User loggedIn here"
        });
    }catch(error){
        return res.status(500).json({
            success:false,
            message:`Internal server error ${error.message}`
        });
    }
};

module.exports = {signup, signin, logout, me};