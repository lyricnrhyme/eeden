exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('store').del()
    .then(function () {
      // Inserts seed entries
      return knex('store').insert([
        {
          title: 'El Jefe',
          description: 'La Tienda el Jefe.  Cash dinero only',
          created_by: 1
        },
        {
          title: 'Silver Noobs',
          description: 'Bring your A game',
          created_by: 2
        },
        {
          title: 'Pretties',
          description: 'I have all them pretties',
          created_by: 3
        },
        {
          title: 'Backend Dreams',
          description: 'Livin in the backend',
          created_by: 4
        }
      ]);
    });
};
