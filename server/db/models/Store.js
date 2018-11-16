const bookshelf = require('./bookshelf');
const Users = require('./Users.js');

const Store = bookshelf.Model.extend({
    tableName: 'store',
    created_by: function () {
      return this.belongsTo(Users, "created_by");
    },
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = Store;