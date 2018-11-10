const bookshelf = require('./bookshelf');
const Purchased = require('./Purchased.js');
const Store = require('./Store.js');


const User = bookshelf.Model.extend({
    tableName: 'users',
    purchase_id: function () {
        return this.belongsTo(Purchased, "id");
      },
    store_id: function () {
        return this.belongsTo(Store, "id");
      },
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = User;