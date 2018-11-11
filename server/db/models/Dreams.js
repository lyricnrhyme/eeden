// const bookshelf = require('./bookshelf');
// const Keywords = require('./Keywords.js');
// const Users = require('./Users.js');

// const Dreams = bookshelf.Model.extend({
//     tableName: 'dreams',
//     keywords_id: function () {
//         return this.belongsTo(Keywords, "keyword_id");
//       },
//     created_by: function () {
//         return this.belongsTo(Users, "id");
//       },
//     idAttribute: 'id',
//     hasTimestamps: true
// });

// module.exports = Dreams;
// Source: https://github.com/bookshelf/bookshelf/wiki/Plugin:-Model-Registry

const bookshelf = require('./bookshelf');
require('./Users');
require('./Keywords');
require('./Purchased');

class Dreams extends bookshelf.Model {
  get tableName() {
    return 'dreams'
  }
  get hasTimestamps() {
    return true;
  }
  keyword_id() {
    return this.belongsTo('Keywords', 'keyword_id')
  }
  created_by() {
    return this.belongsTo('Users', 'id')
  }
  purchase_id() {
    return this.hasMany('Purchased', 'id')
  }
}

module.exports = bookshelf.model('Dreams', Dreams)