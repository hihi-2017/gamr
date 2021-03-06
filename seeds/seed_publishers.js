
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publishers').del()
    .then(function () {
      // Inserts seed entries
      return knex('publishers').insert([
        {
          id: 1,
          publisher_name: 'Sega',
          publisher_year_established: 1960,
          publisher_headquarters_location: 'Japan'
        },
        {
          id: 2,
          publisher_name: 'Nintendo',
          publisher_year_established: 1889,
          publisher_headquarters_location: 'Japan'
        },
        {
          id: 3,
          publisher_name: 'Sony Interactive Entertainment',
          publisher_year_established: 1993,
          publisher_headquarters_location: 'Japan'
        }
      ]);
    });
};
