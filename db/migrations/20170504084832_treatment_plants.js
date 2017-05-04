
exports.up = function(knex, Promise) {
  return knex.schema.createTable("treatment_plants", (table) => {
    table.increments();
    table.string("treatment").notNullable();
    table.integer("plant_id").notNullable();
    table.string("date").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("treatment_plants");
};
