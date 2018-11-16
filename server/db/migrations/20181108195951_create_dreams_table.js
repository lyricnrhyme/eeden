exports.up = function(knex, Promise) {
    return knex.schema.createTable('dreams', function(table) {
        table.increments().notNullable(); // changed to just id name
        table.string('title').notNullable(); // changed to not unique
        table.string('description');
        table.integer('price').notNullable();
        table.string('genre').notNullable();
        table.string('duration').notNullable();
        table.string('featured_video').notNullable();
        table.string('dream_images').notNullable(); // has many?

        table.integer('store_id')
        .references('id') 
        .inTable('store') 
        .onDelete('CASCADE') 
        .index();

        table.integer('user_id')
        .references('id') 
        .inTable('users') 
        .onDelete('CASCADE') 
        .index();

        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('dreams');
  };
  