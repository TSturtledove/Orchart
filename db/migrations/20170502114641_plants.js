
exports.up = function(knex, Promise) {
  return knex.schema.createTable("plants", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.ingeter("field_id").notNullable();
    table.string("date").notNullable();
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable("plants");
};
