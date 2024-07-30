const { Router } = require("express");
const { autenticacion } = require("../middlewares/userValidations");

const router = Router();

router.get("/login", (req, res) => {
  res.render("login.ejs");
});

router.get("/productos", autenticacion, (req, res) => {
  res.render("productos.ejs");
});

module.exports = router;
