const { Router } = require("express");
const {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  updateAllPrices,
} = require("../controllers/product.controller.js");

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.put("/all/prices", updateAllPrices);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
