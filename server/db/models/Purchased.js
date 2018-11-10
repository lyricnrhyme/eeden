// const bookshelf = require('./bookshelf');
// const Dreams = require('./Dreams.js');
// const Users = require('./Users.js');



// const Purchased = bookshelf.Model.extend({
//     tableName: 'purchased',
//     dream_id: function () {
//         return this.belongsTo(Dreams, "id");
//       },
//     user_id: function () {
//         return this.belongsTo(Users, "id");
//       },
//     idAttribute: 'id',
//     hasTimestamps: true
// });

// module.exports = Purchased;

// Source: https://github.com/bookshelf/bookshelf/wiki/Plugin:-Model-Registry
const bookshelf = require('./bookshelf');
require('./Users');
require('./Dreams');

class Purchased extends bookshelf.Model {
  get tableName() {
    return 'purchased'
  }
  get hasTimestamps() {
    return true;
  }
  user_id() {
    return this.belongsTo('Users', 'id')
  }
  dream_id() {
    return this.belongsTo('Dreams', 'id')
  }
}

module.exports = bookshelf.model('Purchased', Purchased)