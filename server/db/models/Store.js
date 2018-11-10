// const bookshelf = require('./bookshelf');
// const Dreams = require('./Dreams.js');


// const Store = bookshelf.Model.extend({
//     tableName: 'store',
//     dream_id: function () {
//         return this.belongsTo(Dreams, "id");
//       },
//     idAttribute: 'id',
//     hasTimestamps: true
// });

// module.exports = Store;
// Source: https://github.com/bookshelf/bookshelf/wiki/Plugin:-Model-Registry

const bookshelf = require('./bookshelf');
require('./Dreams');

class Store extends bookshelf.Model{
  get tableName(){
    return 'store'
  }

  get hasTimestamps(){
    return true;
  }

  dream_id(){
    return this.hasMany('Dreams', 'id')
    } 
}

module.exports = bookshelf.model('Store', Store)


