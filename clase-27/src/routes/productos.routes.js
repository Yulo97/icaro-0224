const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ productos });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  res.json({ messsage: `Se elimino el producto ${id}` });
});

module.exports = router;

const productos = [
  {
    id: 1,
    nombre: "Televisor",
  },
  {
    id: 2,
    nombre: "Laptop",
  },
  {
    id: 3,
    nombre: "Celular",
  },
];
