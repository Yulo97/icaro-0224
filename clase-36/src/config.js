require("dotenv").config();

module.exports = {
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  MAIL: process.env.MAIL,
  MAIL_PASS: process.env.MAIL_PASS,
};
