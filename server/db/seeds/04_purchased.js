
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('purchased').del()
    .then(function () {
      // Inserts seed entries
      return knex('purchased').insert([
        { user_id: 1,
          dream_id: 1
        },
        { user_id: 2,
          dream_id: 2
        },
        { user_id: 3,
          dream_id: 3
        },
        { user_id: 4,
          dream_id: 4
        },
        { user_id: 5,
          dream_id: 5
        },
        { user_id: 6,
          dream_id: 6
        },
        { user_id: 7,
          dream_id: 7
        },
        { user_id: 8,
          dream_id: 8
        },
        { user_id: 9,
          dream_id: 9
        },
        { user_id: 10,
          dream_id: 10
        },
        { user_id: 11,
          dream_id: 11
        },
        { user_id: 12,
          dream_id: 12
        },
        { user_id: 13,
          dream_id: 13
        },
        { user_id: 14,
          dream_id: 14
        },
        { user_id: 15,
          dream_id: 15
        },
        { user_id: 16,
          dream_id: 16
        },
        { user_id: 17,
          dream_id: 17
        }
      ]);
    });
};
