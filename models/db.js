const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("schooldb", "root", "123456", {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});


module.exports = sequelize;