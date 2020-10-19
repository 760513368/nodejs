const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Book = sequelize.define('Book', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imgurl: {
        type: DataTypes.STRING,
    },
    publishDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    createdAt: true,
    updatedAt: true,
    paranoid: true,
});


module.exports = Book;