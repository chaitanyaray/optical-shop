const express = require("express");

const router = express.Router();

const productController = require("../controllers/product.controllers");

const { protect, authorize } = require("../middleware/auth.middleware")


router.get("/", productController.getProducts);
router.get("/name/:name", productController.getProductByName);
router.get("/:id", productController.getProduct);
router.post("/", protect, authorize("ADMIN"), productController.createProduct);
router.put("/:id", protect, authorize("ADMIN"), productController.updateProduct);
router.delete("/:id", protect, authorize("ADMIN"), productController.deleteProduct);


module.exports = router;