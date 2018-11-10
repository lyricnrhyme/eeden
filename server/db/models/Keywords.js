const bookshelf = require('./bookshelf');

const Keywords = bookshelf.Model.extend({
    tableName: 'keywords',
    idAttribute: 'keyword_id',
    hasTimestamps: true
});

module.exports = Keywords;