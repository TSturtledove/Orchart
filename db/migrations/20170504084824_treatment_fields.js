
exports.up = function(knex, Promise) {
  return knex.schema.createTable("treatment_fields", (table) => {
    table.increments();
    table.string("treatment").notNullable();
    table.integer("field_id").notNullable();
    table.string("date").notNullable();
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable("treatment_fields");
};
