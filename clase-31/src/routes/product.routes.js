const { Router } = require("express");
const productControllers = require("../controllers/product.controllers.js");

const router = Router();

router.get("/", productControllers.getAllProducts);
router.get("/:id", productControllers.getProductById);

module.exports = router;
