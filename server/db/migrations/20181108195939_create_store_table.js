exports.up = function(knex, Promise) {
    return knex.schema.createTable('store', function(table) {
        table.increments().notNullable(); // changed to just id name
        table.string('title').notNullable(); // changed to not unique
        table.string('description');

      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('store');
  };
  