// Importacion de modulos
const express = require("express");
const path = require("path");
const fs = require("fs");

// Instancia de express
const app = express();

const vistas = JSON.parse(fs.readFileSync("./src/vistas.json"));

const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1500,
    categoria: "Electrónica",
  },
  {
    id: 2,
    nombre: "Teléfono móvil",
    precio: 800,
    categoria: "Electrónica",
  },
  {
    id: 3,
    nombre: "Teclado mecánico",
    precio: 100,
    categoria: "Periféricos",
  },
  {
    id: 4,
    nombre: "Monitor 4K",
    precio: 300,
    categoria: "Periféricos",
  },
  {
    id: 5,
    nombre: "Auriculares inalámbricos",
    precio: 150,
    categoria: "Accesorios",
  },
  {
    id: 6,
    nombre: "Mochila para laptop",
    precio: 60,
    categoria: "Accesorios",
  },
  {
    id: 7,
    nombre: "Impresora",
    precio: 200,
    categoria: "Electrónica",
  },
  {
    id: 8,
    nombre: "Ratón inalámbrico",
    precio: 50,
    categoria: "Periféricos",
  },
  {
    id: 9,
    nombre: "Smartwatch",
    precio: 250,
    categoria: "Electrónica",
  },
  {
    id: 10,
    nombre: "Tablet",
    precio: 400,
    categoria: "Electrónica",
  },
  {
    id: 11,
    nombre: "Silla ergonómica",
    precio: 120,
    categoria: "Muebles",
  },
  {
    id: 12,
    nombre: "Escritorio",
    precio: 200,
    categoria: "Muebles",
  },
  {
    id: 13,
    nombre: "Cámara web",
    precio: 80,
    categoria: "Periféricos",
  },
  {
    id: 14,
    nombre: "Micrófono",
    precio: 100,
    categoria: "Periféricos",
  },
  {
    id: 15,
    nombre: "Altavoces",
    precio: 150,
    categoria: "Accesorios",
  },
];

const port = 3000;

let contador = 0;

app.listen(port, () => console.log("El SERVIDOR esta escuchando en el puerto " + port));

app.get("/", (req, res) => {
  res.json({ message: "Bievenido", persona: { nombre: "Nahuel", edad: 30 } });
});

app.get("/productos", (req, res) => {
  vistas.cafe++;
  fs.writeFileSync("./src/vistas.json", JSON.stringify(vistas));

  console.log(`Cantidad de veces consultado en este producto: ${vistas.cafe}`);
  res.json(productos);
});

app.get("/productos/1", (req, res) => {
  vistas.productos++;
  fs.writeFileSync("./src/vistas.json", JSON.stringify(vistas));

  console.log(`Cantidad de veces consultado en este producto: ${vistas.productos}`);
  res.sendFile(path.join(__dirname, "producto1.html"));
});
