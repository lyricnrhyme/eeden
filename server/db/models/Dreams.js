const bookshelf = require('./bookshelf');
const Keywords = require('./Keywords.js');
const Users = require('./Users.js');

const Dreams = bookshelf.Model.extend({
    tableName: 'dreams',
    keywords_id: function () {
        return this.belongsTo(Keywords, "keyword_id");
      },
    created_by: function () {
        return this.belongsTo(Users, "id");
      },
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = Dreams;