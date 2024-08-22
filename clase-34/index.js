import express from "express";
import { connection } from "./db/connection.js";

const app = express();

app.listen(3000, () => console.log("Servidor escuchando"));

app.get("/", async (req, res) => {
  const [results, fields] = await connection.query("SELECT * FROM `usuarios`");
  res.json(results); // results contains rows returned by server
});

app.get("/agregar-usuario", async (req, res) => {
  const { nombre, apellido } = req.query;

  const [results, fields] = await connection.query(
    `INSERT INTO usuarios (nombre, apellido) VALUES ('${nombre}', '${apellido}')`
  );

  res.json(results); // results contains rows returned by server
});
