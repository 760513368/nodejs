const Mock = require('mockjs');

const result = Mock.mock(
    {
        "datas|17": [{
            "id|+1":1,
            "name": "前端第 @id 期",
            "openDate":"@date",

        }],
        
    }
).datas;

console.log(result);

require('../models/relation')
const Class = require('../models/Class');
Class.bulkCreate(result);