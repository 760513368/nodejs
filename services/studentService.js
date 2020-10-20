const { Op } = require("sequelize");
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

exports.getOneStudnet = async function(where) {
    const result = await Student.findOne({
        where,
    });
    return result.toJSON();
}

exports.getByPk = async function (id) {
    const result = await Student.findByPk(123);
    if (result === null) {
    console.log('Not found!');
    } else {
        console.log(result instanceof Student); 
        return result.toJSON();
    }
}

// exports.getStudents = async function() {
//     const count = await Student.count({
//         where: {
//             sex: 1,
//         }
//     });
//     const result = await Student.findAll({
//         // attributes: ['name', 'birthday'],
//         // where: {
//         //     [Op.or]: {
//         //         name: '刘杰',
//         //         id: 123,
//         //     },
//         // },

//         offset: 3,
//         limit: 5,
//         where: {
//             sex: 1
//         }
//     }); 

//     const res = JSON.stringify(result);

//     return {
//         count,
//         data: JSON.parse(res),
//     };
// }

exports.getStudents = async function() {
    const result = await Student.findAndCountAll({
        where: {
            name: {
                [Op.like]: '%英%',
            }
        },
        offset:1,
        limit:5,
    });
  

    
    return JSON.parse( JSON.stringify(result) );
}