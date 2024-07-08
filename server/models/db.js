const { Sequelize } = require('sequelize');



// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('farmxpert', 'casaos', 'casaos', {
    host: '192.168.1.100',
    dialect: 'postgres'
});

module.exports = sequelize;