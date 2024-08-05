const { Router } = require("express");
const userControllers = require("../controllers/user.controllers.js");

const router = Router();

router.post("/login", userControllers.login);
router.get("/logout", userControllers.logout);
router.get("/", userControllers.getUser);

module.exports = router;
