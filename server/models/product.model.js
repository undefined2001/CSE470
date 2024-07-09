const { DataTypes } = require('sequelize');
const sequlize = require('./db');

const Product = sequlize.define('products', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description:
    {
        type: DataTypes.TEXT,
        allowNull: true
    },
    imgPath:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
    ,
    region:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    price:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Product;