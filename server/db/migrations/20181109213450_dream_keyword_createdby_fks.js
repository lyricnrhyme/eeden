exports.up = function(knex, Promise) {
    return knex.schema.table('store', function(table) {
      
        table.integer('dream_id')
        .unsigned()

        table
        .foreign('dream_id')
        .references('id')
        .inTable('dreams');

        table.integer('created_by')
        .unsigned()

        table
        .foreign('created_by')
        .references('id')
        .inTable('users');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('store', function(table) {
      table.dropColumn('dream_id');
      table.dropColumn('created_by');
    });
  };
  