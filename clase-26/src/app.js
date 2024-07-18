const express = require("express");
const app = express();
const path = require("path");

const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1200,
    categoria: "Electrónica",
    stock: 50,
  },
  {
    id: 2,
    nombre: "Teléfono Móvil",
    precio: 800,
    categoria: "Electrónica",
    stock: 100,
  },
  {
    id: 3,
    nombre: "Cafetera",
    precio: 150,
    categoria: "Electrodomésticos",
    stock: 75,
  },
  {
    id: 4,
    nombre: "Silla de Oficina",
    precio: 200,
    categoria: "Muebles",
    stock: 40,
  },
  {
    id: 5,
    nombre: "Monitor",
    precio: 300,
    categoria: "Electrónica",
    stock: 30,
  },
];

const servicios = [
  {
    id: 1,
    nombre: "Desarrollo Web",
    precioHora: 50,
    categoria: "Tecnología",
    disponibilidad: "Lunes a Viernes",
  },
  {
    id: 2,
    nombre: "Consultoría Financiera",
    precioHora: 100,
    categoria: "Finanzas",
    disponibilidad: "Lunes a Jueves",
  },
  {
    id: 3,
    nombre: "Clases de Yoga",
    precioHora: 30,
    categoria: "Salud y Bienestar",
    disponibilidad: "Martes y Jueves",
  },
  {
    id: 4,
    nombre: "Mantenimiento de Jardines",
    precioHora: 25,
    categoria: "Hogar",
    disponibilidad: "Fines de Semana",
  },
  {
    id: 5,
    nombre: "Soporte Técnico",
    precioHora: 40,
    categoria: "Tecnología",
    disponibilidad: "24/7",
  },
];

app.listen(8080);

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "../public")));

app.get("/servicios", (req, res) => {
  res.json(servicios);
});

app.get("/productos", (req, res) => {
  res.json(productos);
});

// app.get("/productos/:id", (req, res) => {
//   const id = req.params.id;

//   console.log(`Se consulto a la base de datos sobre el producto ID: ${id}`);

//   const producto = productos.find((item) => item.id == id);
//   if (!producto) {
//     res.json({ message: "El producto no existe", status: "error" });
//   } else {
//     res.json(producto);
//   }
// });

app.get("/productos/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Se consulto a la base de datos sobre el producto ID: ${id}`);

  const producto = productos.find((item) => item.id == id);
  if (!producto) {
    res.json({ message: "El producto no existe", status: "error" });
  } else {
    res.render("producto.ejs", { producto });
  }
});

app.get("/", (req, res) => {
  res.render("productos.ejs", { productos });
});
