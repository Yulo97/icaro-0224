import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "ecommerce",
});

export default connection;