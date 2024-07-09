const express = require("express");
const app = express();
const path = require("path");

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

app.get("/saludo", (req, res) => {
  console.log("Alguien hizo una consulta en la ruta /saludo");
  res.json({ saludo: "bievenido" });
});

app.get("/", (req, res) => {
  console.log("Alguien hizo una consulta en la ruta /");
  res.sendFile(path.join(__dirname, "views/index.html"));
});
