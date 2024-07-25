const { Router } = require("express");
const { registrarUsuario, fullUsers, getUserById } = require("../controllers/users.controllers.js");
const { isAdmin } = require("../middlewares/validacion.js");

const router = Router();

router.post("/registro", isAdmin, registrarUsuario);
router.get("/", fullUsers);
router.get("/:id", getUserById);

module.exports = router;
