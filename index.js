// require('./spider/fetchBooks');
const adminServ = require('./services/adminService');
const studentServ = require('./services/studentService');

// adminServ.getAllAdmin().then(res => {
//     console.log(res);
// })

// studentServ.getOneStudnet({sex: 1}).then(res => {
//     console.log(res);
// })

// studentServ.getByPk(123).then(res => {
//     console.log(res);
// })

studentServ.getStudents().then(res => {
    console.log(res);
})