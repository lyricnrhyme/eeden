exports.up = function(knex, Promise) {
    return knex.schema.createTable('keywords', function(table) {
        table.increments('id').notNullable(); // took out 'unique' as this will always auto generate unique value
        table.string('title').unique().notNullable();
        table.string('keyword_url'); // added feature

        table.integer('dream_id')
        .unsigned();

        table
        .foreign('dream_id')
        .references('id')
        .inTable('store');

        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('keywords');
  };
  