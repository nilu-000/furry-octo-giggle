const books = require('./books/controller');
const authors = require('./authors/controller');
const users = require('./user/controller');
module.exports = [
    books,
    authors,
    users
]