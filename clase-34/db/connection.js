import mysql from "mysql2/promise";

// Create the connection to database
export const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ecommerce",
  port: "3306",
  password: "1234",
});
