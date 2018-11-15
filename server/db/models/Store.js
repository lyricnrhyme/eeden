const bookshelf = require('./bookshelf');
const Users = require('./Users.js');
const Dreams = require('./Dreams.js');

const Store = bookshelf.Model.extend({
    tableName: 'store',
    created_by: function () {
      return this.belongsTo(Users, "created_by");
    },
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = Store;
// Source: https://github.com/bookshelf/bookshelf/wiki/Plugin:-Model-Registry

// const bookshelf = require('./bookshelf');
// require('./Dreams');
// require('./Keywords');
// require('./Users');

// class Store extends bookshelf.Model{
//   get tableName(){
//     return 'store'
//   }

//   get hasTimestamps(){
//     return true;
//   }
//   created_by(){
//     return this.hasMany('Users', 'id')
//     }
//   dream_id(){
//     return this.hasMany('Dreams', 'id')
//     }
//   keyword_id(){
//     return this.hasMany('Keywords', 'keyword_id')
//   }   
// }

// module.exports = bookshelf.model('Store', Store)


