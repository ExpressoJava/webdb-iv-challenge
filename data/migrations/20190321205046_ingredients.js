exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
    tbl.increments()
    tbl.string('name', 128).notNullable()
    tbl.float('quantity').notNullable()

    tbl
      .integer('recipe_id')
      .references('id')
      .unsigned()
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    .tabl.timestamps(true, true)

})
};
// undo function whatever in up table existed. 
exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('ingredients')
};

      
