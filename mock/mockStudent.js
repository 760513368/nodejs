const Mock = require('mockjs');
const Student = require('../models/Student');

const result = Mock.mock({
    "datas|500": [{
        name: '@cname',
        birthday: '@date',
        'sex|1-2': true,
        mobile: /1\d{10}/,
        // location: '@city(true)',
        'ClassId|1-6': 1,
    }]
}).datas;

console.log(result);
require('../models/relation');
Student.bulkCreate(result);