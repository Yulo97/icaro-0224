const express = require("express");
const productRouter = require("./routes/product.routes.js");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

// Middlewares
app.use(morgan("tiny"));
app.use(cors());

// Router
app.use("/product", productRouter);
