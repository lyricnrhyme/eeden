// const bookshelf = require('./bookshelf');
// const Purchased = require('./Purchased.js');
// const Store = require('./Store.js');


// const User = bookshelf.Model.extend({
//     tableName: 'users',
//     purchase_id: function () {
//         return this.belongsTo(Purchased, "id");
//       },
//     store_id: function () {
//         return this.belongsTo(Store, "id");
//       },
//     idAttribute: 'id',
//     hasTimestamps: true
// });

// module.exports = User;

// Source: https://github.com/bookshelf/bookshelf/wiki/Plugin:-Model-Registry
const bookshelf = require('./bookshelf');
require('./Purchased');
require('./Store');

class Users extends bookshelf.Model{
  get tableName(){
    return 'users'
  }

  get hasTimestamps(){
    return true;
  }

  purchase_id(){
    return this.hasMany('Purchased', 'id')
    }
    
  store_id(){
    return this.hasMany('Store', 'id')
    }   
}

module.exports = bookshelf.model('Users', Users)
