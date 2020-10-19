require('./Admin');
require('./Class');
require('./Student');
require('./Book');
const sequelize = require('./db');

sequelize.sync({force: true}).then(() => {
    console.log('全部同步完成');
})