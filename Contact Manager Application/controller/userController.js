// @desc Register All User
// @route POST /api/users/register
// @access public

const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");



const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All feilds are required");
    }
    const alreadyRegister = User.findOne({ email });
    if (alreadyRegister){ 
        res.status(400);
        throw new Error("Email is already taken");
    }
    // hashed password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password is", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });
    if (user) {
        res.status(200).json({ message: "Successfully Registered", _id: user._id, name: user.name, email: user.email });
    }
    else {
        res.status(400);
        throw new Error("Couldn't register");
    }
    res.json({message: "Registered Successfully"});
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All feilds are required");
    }
    const user = await User.findOne({ email });
    // console.log(user);
    // compare password owth hashed passwprd
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
        }, process.env.ACCESS_TOKEN, {
            expiresIn: "10m"
        });
        res.status(200).json({ accessToken })
    }else{
        res.status(400).json({ message: "Invalid Credentials" });
    }
    res.status(200).json({ message: "Successfully Logged In" });
});

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };