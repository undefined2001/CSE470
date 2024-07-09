const User = require('../models/user.model');


const userLogin = async (req, res) => {
    const { phone, password } = req.body;
    const user = await User.findOne({ where: { phone: phone } });
    const isValid = await user.validatePassword(password);
    if (isValid) {
        res.json({ message: "Logged in Successfully." });
    }
    else {
        res.status(401).json({ message: "Number or Password is Invalid" });
    }
}

const userRegister = async (req, res) => {
    const { firstName, lastName, phone, password } = req.body;
    let existingUser = await User.findOne({ where: { phone: phone } });
    if (existingUser) {
        return res.status(409).json({ message: "user with this phone number already exists" });
    }
    user = await User.create({ firstName: firstName, lastName: lastName, phone: phone, password: password });
    user.save();
    res.json({ message: "user created successfully" });
}

const getAllUser = async (req, res) => {
    const user = await User.findAll({ attributes: { exclude: ["password", "role"] } })
    res.status(200).send({ user });
}

module.exports = { getAllUser, userLogin, userRegister };