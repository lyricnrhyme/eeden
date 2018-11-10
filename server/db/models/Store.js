const bookshelf = require('./bookshelf');
const Dreams = require('./Dreams.js');


const Store = bookshelf.Model.extend({
    tableName: 'store',
    dream_id: function () {
        return this.belongsTo(Dreams, "id");
      },
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = Store;