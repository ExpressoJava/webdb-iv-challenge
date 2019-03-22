
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Supreme pizza', dish_id: 1 },
        {name:  'sausage pizza', dish_id: 1},
        {name: 'clam chowder soup', dish_id: 2}
      ])
    })
}
