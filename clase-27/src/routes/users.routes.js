const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json(usuarios);
});

router.post("/", (req, res) => {
  const body = req.body;

  console.log(body);

  res.json({ message: `Se creo un usuario` });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  res.json({ messsage: `Se elimino el usuario ${id}` });
});

module.exports = router;

const usuarios = [
  {
    name: "Pepe",
  },
  {
    name: "Maria",
  },
];
