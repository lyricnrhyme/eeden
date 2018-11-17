exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Donald Trump',
          email: 'donald@trump.com',
          password: 'migrationslatest',
          has_store: true,
          is_admin: false
        },
        { name: 'Lebron James',
          email: 'lebron@james.com',
          password: 'seedsrun',
          has_store: true,
          is_admin: false
        },
        { name: 'Snoop Dogg',
          email: 'snoop@dogg.com',
          password: 'puppy',
          has_store: true,
          is_admin: false
        },
        { name: 'Bill Gates',
          email: 'bill@gates.com',
          password: 'microsoft',
          has_store: true,
          is_admin: false
        },
        { name: 'Justin Bieber',
          email: 'justin@bieber.com',
          password: 'neversaynever',
          has_store: true,
          is_admin: false
        },
        { name: 'Bruno Mars',
          email: 'bruno@mars.com',
          password: 'uptownfunk',
          has_store: true,
          is_admin: false
        },
        { name: 'Dave Chappelle',
          email: 'dave@chapelle.com',
          password: 'comedian',
          has_store: true,
          is_admin: false
        },
        { name: 'Franken Stein',
          email: 'franken@stein.com',
          password: 'monster',
          has_store: true,
          is_admin: false
        },
        { name: 'Michael Myers',
          email: 'michael@myers.com',
          password: 'michaelmyers',
          has_store: true,
          is_admin: false
        },
        { name: 'Austin Powers',
          email: 'austin@powers.com',
          password: 'powersaustin',
          has_store: true,
          is_admin: false
        },
        { name: 'Freddy Krueger',
          email: 'Freddy@Krueger.com',
          password: 'fkrueger',
          has_store: true,
          is_admin: false
        },
        { name: 'Romeo Corpuz',
          email: 'romeo@corpuz.com',
          password: 'admin1',
          has_store: true,
          is_admin: true
        },
        { name: 'Harsh Kotak',
          email: 'harsh@kotak.com',
          password: 'admin2',
          has_store: true,
          is_admin: true
        },
        { name: 'Jaymie Yamashita',
          email: 'jaymie@yamashita.com',
          password: 'admin3',
          has_store: true,
          is_admin: true
        },
        { name: 'Jaymie Frady',
          email: 'jaymie@frady.com',
          password: 'admin4',
          has_store: true,
          is_admin: true
        },
        { name: 'Childs Play',
          email: 'childs@play.com',
          password: 'chucky',
          has_store: true,
          is_admin: false
        },
        { name: 'John Doe',
          email: 'john@doe.com',
          password: 'thepassword',
          has_store: true,
          is_admin: false
        }
      ]);
    });
};
