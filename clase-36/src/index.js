const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/product.routes.js");
const { sequelize } = require("./db/db.js");

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log("Server UP"));

// Middlewares
app.use(express.json());
app.use(morgan("tiny"));

// Sincronizacion con DB
const connection = async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    console.log("Ocurrio un error al conectarse a la DB / ERROR: ", error.message);
  }
};

connection();

console.log(process.env.DB_USER);

// Router
app.use("/products", productRouter);
