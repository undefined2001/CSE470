const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            const hash = bcrypt.hashSync(value, saltRounds);
            this.setDataValue('password', hash);
        }
    },
}, {
    timestamps: true,
});

User.prototype.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = User;
