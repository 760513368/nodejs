const Admin = require('../models/Admin');   

exports.addAdmin = async function(adminObject) {
    // const ins = await Admin.build(adminObject);
    // await ins.save();

    const ins = await Admin.create(adminObject);

    return ins.toJSON();

}

exports.deleteAdmin = async function(adminId) {
    // 方式1（此法不好，需要调用2条sql语句，先查询，再删除）
    // 1.得到实例
    // const ins = await Admin.findByPk(adminId);
    // console.log(ins);
    // 2.删除实例
    // ins.destroy();

    // 方法2
    await Admin.destroy({
        where: {
            id: adminId,
        }
    });
    
}

exports.updateAdmin = async function(id, adminObject) {
    // 方法1（此法不好，需要调用2条sql语句，先查询，再删除）
    // 1.得到实例
    // const ins = await Admin.findByPk(id);
    // ins.loginId = adminObject.loginId;
    // 2.保存
    // ins.save();

    // 方法2
    await Admin.update(adminObject, {
        where: {
            id,
        }
    });
    
}


exports.login = async function(loginId, loginPwd) {
    const result = await Admin.findOne({
        where: {
            loginId,
            loginPwd,
        },
    });
    if (result && result.loginId === loginId && result.loginPwd === loginPwd) {
        return result.toJSON();
    }
    return null;

}

exports.getAdiminById = async function(id) {
    const result = await Admin.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

exports.getAllAdmin = async function() {
    const result = await Admin.findAll({
        attributes: ['loginId','loginPwd' ],
    });

    return JSON.parse(JSON.stringify(result));
}