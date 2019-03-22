exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments()
    tbl
      .string('name', 128)
      .notNullable()
      
      tbl
        .integer('dish_id')
        .references('id')
        .unsigned()
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .tabl.timestamps(true, true)

  })
};
// undo function whatever in up table existed. 
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
