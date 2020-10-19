const Class = require('./Class')
const Student = require('./Student')
const Book = require('./Book')

Class.hasMany(Student);
Student.belongsTo(Class);