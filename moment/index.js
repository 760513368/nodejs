const moment = require('moment');

// console.log(moment);

// const res = + moment().utc();
// console.log(res);

// 时间格式：xxxx-xx-xx  xxxx/xx/xx
// console.log(moment(0).toString());
// console.log(moment.utc(0).toString());

const date = '2020-04-03';
const format = 'YYYY年MM月DD日 HH时mm分ss秒 x Qo Q DDD'

const now = moment(date).utc().fromNow()
console.log(now);

// const now2 = moment()
// console.log(now2);

const nowUTC = moment.utc(date).format(format)
console.log(nowUTC);

