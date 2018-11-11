// exports.up = function(knex, Promise) {
//     return knex.schema.table('dreams', function(table) {
//         table
//         .integer('keywords_id')
//         .references('keyword_id')
//         .inTable('keywords');        
//     });
//   };
  
//   exports.down = function(knex, Promise) {
//     return knex.schema.table('dreams', function(table) {
//       table.dropColumn('keywords_id');
//     });
//   };
  