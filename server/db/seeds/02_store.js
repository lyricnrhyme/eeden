exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('store').del()
    .then(function () {
      // Inserts seed entries
      return knex('store').insert([
        { title: 'Whitehouse',
          description: 'The President Store',
          created_by: 1
        },
        { title: 'Dream Team',
          description: 'The King',
          created_by: 2
        },
        { title: 'Doggy Store',
          description: 'Dream about dogs',
          created_by: 3
        },
        { title: 'Technology Store',
          description: 'Dream about computers, etc.',
          created_by: 4
        },
        { title: 'Despacito',
          description: 'Sorry, What Do You Mean?, etc.',
          created_by: 5
        },
        { title: 'Locked Out of Heaven',
          description: 'Wanna be a billionaire? In your dreams?',
          created_by: 6
        },
        { title: 'Comedy Store',
          description: 'Chappelles Show',
          created_by: 7
        },
        { title: 'Frankenstein Dreams',
          description: 'Wanna be a Frankenstein?',
          created_by: 8
        },
        { title: 'Chop Chop Dreams',
          description: 'Michael Myers will show you how.',
          created_by: 9
        },
        { title: 'Power Store',
          description: 'Lorem ipsum, blah blah blah',
          created_by: 10
        },
        { title: 'Worst Nightmare',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          created_by: 11
        },
        { title: 'Shakespear',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          created_by: 12
        },
        { title: 'Harsh Dreams',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          created_by: 13
        },
        { title: 'Treasure Dreams',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          created_by: 14
        },
        { title: 'Cat Dreams',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          created_by: 15
        },
        { title: 'Doll Dreams',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          created_by: 16
        },
        { title: 'Any Kind Dreams',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          created_by: 17
        }
      ]);
    });
};
