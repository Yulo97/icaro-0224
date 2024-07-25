const express = require("express");
const vistasRouter = require("./routes/views.routes.js");
const userRouter = require("./routes/users.routes.js");
const app = express();

const PORT = 3000;

app.use(express.static("public"));

// Middleware para parsear cuerpos JSON
app.use(express.json());

// Middleware para parsear cuerpos URL-encoded
app.use(express.urlencoded({ extended: true }));

// Middleware Global
app.use(function (req, res, next) {
  console.log("Se realizo una consulta a la API");
  next();
});

app.set("view engine", "ejs");

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

// Router
app.use("/vistas", vistasRouter);
app.use("/users", userRouter);
