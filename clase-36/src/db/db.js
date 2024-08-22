const { Sequelize } = require("sequelize");
const config = require("../config.js");

const sequelize = new Sequelize("tienda", config.DB_USER, config.DB_PASS, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = { sequelize };
