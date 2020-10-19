const sequelize = require('./models/db');
// require('./models/sync');

// (async function () {
//     try {
//         await sequelize.authenticate();
//         console.log('successfully');
//     } catch (err) {
//         console.log(err);
//     }
// })();

// 根据模型在数据库中创建表
// const Admin = require('./models/Admin');
// (async function() {
//     await Admin.sync();
//     console.log('同步完成');

// })();

// const Admin = require('./models/Admin');

// const ins = Admin.build({
//     loginId: 'first',
//     loginPwd: '123123',
// });

// ins.save().then(() => {
//     console.log('administrator added.');
// });

// Admin.create({
//     loginId: 'create',
//     loginPwd: '123456',
// }).then(ins => {
//     console.log(ins.id, ins.loginId);
// });

// const adminServ = require('./services/adminService');

// adminServ.addAdmin({
//     loginId: 'third',
//     loginPwd: '123123',
// }).then(ins => {
//     console.log('添加成功', ins);
// });

// adminServ.deleteAdmin(4);

// adminServ.updateAdmin(3, {
//     loginId: 'xxxxx'
// })

const classServ = require('./services/classService');

classServ.addClass({
    name: 'three',
    openDate: '2020-01-02',
});