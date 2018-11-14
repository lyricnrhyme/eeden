exports.up = function(knex, Promise) {
    return knex.schema.createTable('purchased', function(table) {
      table.increments().notNullable();

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

      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('purchased');
  };
  