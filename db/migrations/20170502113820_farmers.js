
exports.up = function(knex, Promise) {
  return knex.schema.createTable("farmers", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.string("password").notNullable();
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable("farmers");
};
