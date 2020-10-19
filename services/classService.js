const Class = require('../models/Class');

exports.addClass = async function(classObject) {
    const ins = await Class.create(classObject);
    return ins.toJSON();
}

exports.deleteClass = async function(classId) {
    const res = await Class.destroy({
        where: {
            id: classId,
        }
    });
    return res;
}

exports.updateClass = async function(id, classObject) {
    const res = await Class.update(classObject, {
        where: {
            id,
        }
    });
    return res;
}