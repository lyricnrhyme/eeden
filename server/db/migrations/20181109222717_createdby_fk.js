// exports.up = function(knex, Promise) {
//     return knex.schema.table('dreams', function(table) {
//         table
//         .integer('created_by')
//         .references('id')
//         .inTable('users');        
//     });
//   };
  
//   exports.down = function(knex, Promise) {
//     return knex.schema.table('dreams', function(table) {
//       table.dropColumn('created_by');
//     });
//   };
  