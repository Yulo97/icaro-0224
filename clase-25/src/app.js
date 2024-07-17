const express = require("express");
const app = express();
const path = require("path");

const datos = {
  nombre: "Pepe",
  apellido: "Arjona",
  caracteristicas: {
    altura: "1.85 metos",
  },
};

const datos2 = {
  nombre: "Pepe",
  apellido: "Arjona",
  caracteristicas: {
    altura: "1.85 metos",
  },
};

app.use("/public", express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");

app.get("/bienvenido", (req, res) => {
  res.render("bienvenido", datos);
});

app.get("/contacto", (req, res) => {
  res.render("registro", datos);
});

app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));
