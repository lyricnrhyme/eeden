exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Harsh Kotak',
          email: 'harsh@admin.com',
          password: 'admin',
          has_store: true,
          is_admin: true
        },
        {
          name: 'Jamie Yamashita',
          email: 'jyama@admin.com',
          password: 'admin',
          has_store: true,
          is_admin: false
        },
        {
          name: 'Jamie Frady',
          email: 'jamie@admin.com',
          password: 'admin',
          has_store: true,
          is_admin: false
        },
        {
          name: 'Romeo Corpuz',
          email: 'romeo@admin.com',
          password: 'admin',
          has_store: true,
          is_admin: false
        },
        {
          name: 'Tester',
          email: 'test@test.com',
          password: 'test',
          has_store: false,
          is_admin: false
        }

      ]);
    });
};
