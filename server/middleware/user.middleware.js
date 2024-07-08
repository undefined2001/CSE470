const User = require('../models/user.model');

const isAdmin = async (req, res, next) => {
    const user_role = "admin";
    const user = await User.findOne({ where: { role: user_role } });
    if (user) {
        console.log(user);
    }
    else {
        console.log("no admin found creating one");
    }
    next();
}

module.exports = {
    isAdmin
}