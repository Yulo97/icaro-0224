import express from "express";
import routerUsuarios from "./routes/usuarios.routes.js";

const app = express();

app.listen(3000, () => console.log("Servidor escuchando"));

// Routes
app.use("/usuarios", routerUsuarios);
