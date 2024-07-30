const { Router } = require("express");
const loginUser = require("../controllers/user.controllers.js");
const { body } = require("express-validator");

const router = Router();

router.post("/login", body("pass").isLength({ min: 6 }), loginUser);

module.exports = router;
