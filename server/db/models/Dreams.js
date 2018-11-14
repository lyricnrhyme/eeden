const bookshelf = require('./bookshelf');
const Store = require('./Store.js');
// const Users = require('./Users.js');

const Dreams = bookshelf.Model.extend({
    tableName: 'dreams',
    store_id: function () {
        return this.belongsTo(Store, "id");
      },
    // created_by: function () {
    //     return this.belongsTo(Users, "id");
    //   },
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = Dreams;
// Source: https://github.com/bookshelf/bookshelf/wiki/Plugin:-Model-Registry

// const bookshelf = require('./bookshelf');
// require('./Users');
// require('./Keywords');
// require('./Purchased');
// require('./Store');

// class Dreams extends bookshelf.Model {
//   get tableName() {
//     return 'dreams'
//   }
//   get hasTimestamps() {
//     return true;
//   }
//   keyword_id() {
//     return this.belongsTo('Keywords', 'keyword_id')
//   }
//   created_by() {
//     return this.belongsTo('Users', 'id')
//   }
//   store_id() {
//     return this.hasMany('Store', 'id')
//   }
//   purchase_id() {
//     return this.hasMany('Purchased', 'id')
//   }
// }

// module.exports = bookshelf.model('Dreams', Dreams)