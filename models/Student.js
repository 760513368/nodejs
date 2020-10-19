const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sex: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.STRING(11),
        allowNull: false,
    }
}, {
    createdAt: true,
    updatedAt: true,
    paranoid: true,
});


module.exports = Student;