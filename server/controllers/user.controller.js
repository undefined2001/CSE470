const User = require('../models/user.model');

const userLogin = async (req, res) => {

    const { phone, password } = req.body;
    const user = await User.findOne({where:{phone:phone}});
    if(user)
    {
        
    }
}

const getAllUser = async (req, res) => {
    const user = await User.findAll({ attributes: { exclude: ["password", "role"] } })
    res.status(200).send({ user });
}

module.exports = { getAllUser, userLogin };