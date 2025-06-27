const { Sequelize } = require("sequelize");
// const pg = require("pg");

const db = new Sequelize(
  "todo_list",
  "postgres",
  "poolrec",
  // process.env.DATABASE_URL || "postgres://localhost:5432/todo_list",
  {
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false, // comment this line to enable logging
  }
);

module.exports = db;
