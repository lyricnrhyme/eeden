exports.up = function(knex, Promise) {
    return knex.schema.table('purchased', function(table) {
        table.integer('user_id')
        .unsigned();

        table
        .foreign('user_id')
        .references('id')
        .inTable('users');

        table.integer('dream_id')
        .unsigned()

        table
        .foreign('dream_id')
        .references('id')
        .inTable('dreams');        
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('purchased', function(table) {
      table.dropColumn('user_id');
      table.dropColumn('dream_id');
    });
  };
  