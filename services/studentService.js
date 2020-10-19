const Student = require('../models/Student');

exports.addStudent = async function(studentObject) {
    const ins = await Student.create(studentObject);
    return ins.toJSON();
}

exports.deleteStudent = async function(studentId) {
    const res = await Student.destroy({
        where: {
            id: studentId,
        }
    });
    return res;
}

exports.updateStudent = async function(id, studentObject) {
    const res = await Student.update(studentObject,{
        where: {
            id,
        }
    });
    return res;
}