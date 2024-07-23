const express = require("express");
const clientesRouter = require("./routes/clientes.routes.js");
const productosRouter = require("./routes/productos.routes.js");
const usersRouter = require("./routes/users.routes.js");

const app = express();

app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));

// Middleware
app.use(express.json());

app.use("/productos", productosRouter);
app.use("/clientes", clientesRouter);
app.use("/usuarios", usersRouter);
