const bookshelf = require('./bookshelf');

const User = bookshelf.Model.extend({
    tableName: 'users',
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = User;