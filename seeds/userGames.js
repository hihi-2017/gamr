
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userGames').del()
    .then(function () {
      // Inserts seed entries
      return knex('userGames').insert([
        {
          id: 1,
          user_id: 99901,
          game_id: 88801,
          date_purchased: '2017-03-03',
          // date_sold: '',
          igdb_id: 7346,
          system_purchased_on_id: 1,
          ownership_status_id: 1
        },
        {
          id: 2,
          user_id: 99901,
          game_id: 88802,
          date_purchased: '1984-05-22',
          date_sold: '1989-05-22',
          igdb_id: 358,
          system_purchased_on_id: 2,
          ownership_status_id: 2
        },
        {
          id: 3,
          user_id: 99901,
          game_id: 88803,
          igdb_id: 3192,
          date_purchased: '1991-06-23',
          date_sold: '2001-09-23',
          system_purchased_on_id: 3,
          ownership_status_id: 2
        },
        {
          id: 4,
          user_id: 99902,
          game_id: 88801,
          igdb_id: 7346,
          date_purchased: '2017-03-05',
          // date_sold: '',
          system_purchased_on_id: 1,
          ownership_status_id: 1
        },
        {
          id: 5,
          user_id: 99903,
          game_id: 88802,
          igdb_id: 358,
          date_purchased: '1992-04-22',
          // date_sold: '',
          system_purchased_on_id: 2,
          ownership_status_id: 1
        }
      ]);
    });
};
