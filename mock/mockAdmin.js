const Mock = require('mockjs');
const md5 = require('md5');

const result = Mock.mock({
    'datas|10': [{
        'loginId': '@first',
        'loginPwd': /\d{6}/,
    }],
}).datas;

const res = result.map(item => {
    return {
        loginId: item.loginId,
        loginPwd: md5(item.loginPwd),
    }
})
console.log(result);
console.log(res);
const Admin = require('../models/Admin')
Admin.bulkCreate(res).then(res => {
    console.log('finished');
})