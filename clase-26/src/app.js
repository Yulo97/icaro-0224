const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

const usuarios = [{ name: "pepe" }, { name: "maria" }, { name: "jose" }];

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));

app.use("/public", express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { nombre: "Pepe Argento" });
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  const id = req.params.id;

  res.send(`Hola Usuario: ${id}`);
});
