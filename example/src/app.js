const express = require("express");
const app = express();

app.listen(3000);

app.set("view engine", "ejs");

// Middleware para parsear cuerpos JSON
app.use(express.json());

// Middleware para parsear cuerpos URL-encoded
app.use(express.urlencoded({ extended: true }));

// Middleware Global
app.use((req, res, next) => {
  console.log("Middelare GLOBAL");
  next();
});

app.post("/registro", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.get("/", (req, res) => {
  res.render("login");
});
