exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments('user_id').unique().notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();

        // boolean type source: 
        // https://blog.proposales.com/knex-migration-bookshelf-orm-postgresql-and-boolean-13f3d7b602cc
        table.boolean('has_store').notNullable().defaultTo(false);

        table
        .integer('store_id')
        .references('id')
        .inTable('store');

      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  };
  