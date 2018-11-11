exports.up = function(knex, Promise) {
    return knex.schema.table('store', function(table) {
        table
        .integer('dream_id')
        .references('id')
        .inTable('dreams');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('store', function(table) {
      table.dropColumn('dream_id');
    });
  };
  