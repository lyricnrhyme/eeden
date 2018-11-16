const bookshelf = require('./bookshelf');
const Store = require('./Store.js');
const Users = require('./Users.js');

const Dreams = bookshelf.Model.extend({
    tableName: 'dreams',
    store_id: function () {
        return this.belongsTo(Store);
      },
    user_id: function () {
        return this.belongsTo(Users, "user_id");
      },
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = Dreams;