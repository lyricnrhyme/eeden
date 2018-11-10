// const bookshelf = require('./bookshelf');

// const Keywords = bookshelf.Model.extend({
//     tableName: 'keywords',
//     idAttribute: 'keyword_id',
//     hasTimestamps: true
// });

// module.exports = Keywords;

const bookshelf = require('./bookshelf');

class Keywords extends bookshelf.Model {
  get tableName() {
    return 'keywords'
  }
  get idAttribute() {
    return 'keyword_id'
  }
  get hasTimestamps() {
    return true;
  }
}

module.exports = bookshelf.model('Keywords', Keywords)