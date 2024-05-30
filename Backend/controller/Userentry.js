const User = require("../model/User");
const bcrypt = require("bcrypt");
require("dotenv").config()
const jwt=require("jsonwebtoken")

exports.signup = async (req, res) => {
    try {
        const { userName, firstName, lastName, email, password, confirmPassword } =
            req.body;
        const existinguser = await User.findOne({ email });
        if (existinguser) {
            return res.status(500).json({
                success: false,
                message: "User already exist",
            });
        }
        let hashpassword;
        try {
            hashpassword = await bcrypt.hash(password, 10);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Unable to Hash the Password",
            });
        }

        try {
            if (password !== confirmPassword) {
                return res.status(500).json({
                    success: false,
                    message: "Unable to verify  the confirm Password",
                });
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "please enter confirm password in correct format",
            });
        }
        const newUser = await User.create({
            userName,
            firstName,
            lastName,
            email,
            password: hashpassword,
            confirmPassword,
        });
        return res.status(200).json({
            success: true,
            data: newUser,
            message: "User Created Successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User Unable to create",
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const oldUser = await User.findOne({ email });

        if (!oldUser) {
            return res.status(401).json({
                success: false,
                message: "Please sign up first",
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        
        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Password is not correct",
            });
        }

        const payload = { id: oldUser._id, email: oldUser.email };
        const loginToken = jwt.sign(payload, process.env.JWT_KEY);

        return res.status(200).json({
            success: true,
            loginToken: loginToken,
            message: "Login success",
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Login failure",
        });
    }
};
