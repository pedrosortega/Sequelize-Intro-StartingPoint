require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false, // comment this line to enable logging
  }
);

module.exports = db;
