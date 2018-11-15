const bookshelf = require('./bookshelf');
const Dreams = require('./Dreams.js');

const Keywords = bookshelf.Model.extend({
    tableName: 'keywords',
    dream_id: function () {
        return this.belongsTo(Dreams, "id");
      },
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = Keywords;

// const bookshelf = require('./bookshelf');

// class Keywords extends bookshelf.Model {
//   get tableName() {
//     return 'keywords'
//   }
//   get idAttribute() {
//     return 'keyword_id'
//   }
//   get hasTimestamps() {
//     return true;
//   }
// }

// module.exports = bookshelf.model('Keywords', Keywords)