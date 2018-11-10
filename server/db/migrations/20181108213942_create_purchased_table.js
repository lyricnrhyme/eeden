exports.up = function(knex, Promise) {
    return knex.schema.createTable('purchased', function(table) {
        table.increments().notNullable();

      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('purchased');
  };
  