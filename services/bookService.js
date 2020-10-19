const Book = require('../models/Book');

exports.addBook = async function(bookObject) {
    const ins = await Book.create(bookObject);
    return ins.toJSON();
}

exports.deleteBook = async function(bookId) {
    const res = await Book.destroy({
        where: {
            id: bookId,
        }
    });
    return res;
}

exports.updateBook = async function(id, bookObject) {
    const res = await Book.update(bookObject, {
        where: {
            id,
        }
    });
    return res;
}