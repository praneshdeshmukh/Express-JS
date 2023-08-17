// import models
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

const registration = async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    try {
        if (!name || !email || !password) {
            throw new Error("Name, Email, and Password are required!");
        }

        if (password !== confirmPassword) {
            throw new Error("Passwords do not match!");
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email format!");
        }

        const userExist = await User.findOne({ email });
        if (userExist) {
            throw new Error("User already exists!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const logIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            throw new Error("Email and password are required!");
        }

        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials',
            });
        }

        // Successful login
        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    registration,
    logIn,
};
