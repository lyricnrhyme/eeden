exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
        table
        .integer('purchase_id')
        .references('id')
        .inTable('purchased');

        table
        .integer('store_id')
        .references('id')
        .inTable('store');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
      table.dropColumn('purchase_id');
      table.dropColumn('store_id');
    });
  };
  