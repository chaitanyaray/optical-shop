const express = require("express");

const router = express.Router();

const productController = require("../controllers/product.controllers");

const { protect, authorize } = require("../middleware/auth.middleware")

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: A list of products
 *   post:
 *     summary: Create a new product
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Product created successfully
 */

router.get("/", productController.getProducts);
router.get("/name/:name", productController.getProductByName);
router.get("/:id", productController.getProduct);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - brand
 *               - price
 *               - stock
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ray-Ban Aviator
 *               brand:
 *                 type: string
 *                 example: Ray-Ban
 *               description:
 *                 type: string
 *                 example: Classic aviator sunglasses
 *               price:
 *                 type: number
 *                 example: 4999
 *               stock:
 *                 type: number
 *                 example: 25
 *               imageUrl:
 *                 type: string
 *                 example: https://example.com/image.jpg
 *               category:
 *                 type: string
 *                 example: Sunglasses
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.post("/", protect, authorize("ADMIN"), productController.createProduct);



router.put("/:id", protect, authorize("ADMIN"), productController.updateProduct);
router.delete("/:id", protect, authorize("ADMIN"), productController.deleteProduct);


module.exports = router;