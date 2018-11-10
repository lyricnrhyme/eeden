const bookshelf = require('./bookshelf');
const Dreams = require('./Dreams.js');
const Users = require('./Users.js');



const Purchased = bookshelf.Model.extend({
    tableName: 'purchased',
    dream_id: function () {
        return this.belongsTo(Dreams, "id");
      },
    user_id: function () {
        return this.belongsTo(Users, "id");
      },
    idAttribute: 'id',
    hasTimestamps: true
});

module.exports = Purchased;