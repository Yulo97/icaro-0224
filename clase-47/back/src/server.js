const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

const alumnos = [
  { id: 1, alumno: "Gaby", edad: 24 },
  { id: 2, alumno: "Andy", edad: 22 },
  { id: 3, alumno: "Cris", edad: 18 },
  { id: 4, alumno: "Dany", edad: 31 },
  { id: 5, alumno: "Alex", edad: 41 },
  { id: 6, alumno: "Emma", edad: 30 },
];

// Middlewares
app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server UP in PORT ${PORT}`));

app.get("/alumnos", (req, res) => {
  console.log("Se realizo una consulta al BACK");
  res.json(alumnos);
});

app.post("/alumnos", (req, res) => {
  console.log(req.body);
});
