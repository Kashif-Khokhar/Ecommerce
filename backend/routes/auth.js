const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        console.error("Registration Error:", err);
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            $or: [
                { username: req.body.username },
                { email: req.body.username }
            ]
        });
        if (!user) {
            console.log("Login Failure: User not found -", req.body.username);
            return res.status(401).json("Wrong credentials!");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            console.log("Login Failure: Invalid password for user -", req.body.username);
            return res.status(401).json("Wrong credentials!");
        }

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;

        console.log("Backend Login Success for user:", user.username);
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json(err);
    }
});

module.exports = router;
