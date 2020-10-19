const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Admin = sequelize.define('Admin', {
    loginId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    loginId: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});


module.exports = Admin;