const { Router } = require("express");
const { isAuthenticate, isAdmin } = require("../middlewares/authenticate.js");
const {
  renderizarIndex,
  renderizarLogin,
  renderizarAdministracion,
} = require("../controllers/views.controllers.js");

const router = Router();

router.get("/login", renderizarLogin);
router.get("/", isAuthenticate, renderizarIndex);
router.get("/administracion", [isAuthenticate, isAdmin], renderizarAdministracion);

module.exports = router;
