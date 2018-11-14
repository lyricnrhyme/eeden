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

// Source: https://github.com/bookshelf/bookshelf/wiki/Plugin:-Model-Registry
// const bookshelf = require('./bookshelf');
// require('./Purchased');
// require('./Store');
// require('./Keywords');
// require('./Dreams');

// class Users extends bookshelf.Model{
//   get tableName(){
//     return 'users'
//   }

//   get hasTimestamps(){
//     return true;
//   }

//   purchase_id(){
//     return this.belongsTo('Purchased', 'id')
//     }
//   store_id(){
//     return this.belongsTo('Store', 'id')
//     }
//   dream_id(){
//     return this.belongsTo('Dreams', 'id')
//     }
//   keyword_id(){
//     return this.belongsTo('Keywords', 'keyword_id')
//     }       
// }

// module.exports = bookshelf.model('Users', Users)
