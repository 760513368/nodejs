const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Admin = sequelize.define('Admin', {
    loginId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    createdAt: true,
    updatedAt: true,
    paranoid: true,
});


module.exports = Admin;