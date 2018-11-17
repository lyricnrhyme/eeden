exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments().notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.string('name').notNullable();

        // boolean type source: 
        // https://blog.proposales.com/knex-migration-bookshelf-orm-postgresql-and-boolean-13f3d7b602cc
        table.boolean('has_store').notNullable().defaultTo(false);
        table.boolean('is_admin').notNullable().defaultTo(false); // added new column

      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  };
  