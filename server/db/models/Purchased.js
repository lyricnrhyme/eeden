const bookshelf = require('./bookshelf');
const Dreams = require('./Dreams.js');
const Users = require('./Users.js');

const Purchased = bookshelf.Model.extend({
    tableName: 'purchased',
    dream_id: function () {
        return this.belongsTo(Dreams, "dream_id");
      },
    user_id: function () {
        return this.belongsTo(Users, "user_id");
      },
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = Purchased;