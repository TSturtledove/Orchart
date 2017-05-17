"use strict";

const environment = process.env.NODE_ENV || "development";
const config = require("../knexfile")[environment];
const knex = require("knex")(config);
const bookshelf = require("bookshelf")(knex);
const cascadeDelete = require('bookshelf-cascade-delete');

bookshelf.plugin(cascadeDelete);

// bookshelf.plugin(require("cascadeDelete"));

// Allows us to hash the users' passwords before saving them
bookshelf.plugin(require("bookshelf-bcrypt"));

bookshelf.plugin("registry");


module.exports = { knex, bookshelf };
