const sequelize = require('./models/db');


// (async function () {
//     try {
//         await sequelize.authenticate();
//         console.log('successfully');
//     } catch (err) {
//         console.log(err);
//     }
// })();

// 根据模型在数据库中创建表
const Admin = require('./models/Admin');
(async function() {
    await Admin.sync();
    console.log('同步完成');

})()