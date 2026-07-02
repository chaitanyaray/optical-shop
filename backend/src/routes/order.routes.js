const express = require('express');
const router = express.Router();


const ordrerController = require('../controllers/order.controllers');

const { protect, authorize } = require("../middleware/auth.middleware")

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of orders
 *   post:
 *     summary: Create a new order
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Order created successfully
 */

router.post('/', protect, authorize("CUSTOMER"), ordrerController.createOrder);



router.get('/', protect, authorize('ADMIN'), ordrerController.getAllOrders);
router.get("/my-orders", protect, authorize("CUSTOMER"), ordrerController.getMyOrders);
router.get('/:id', protect, authorize('ADMIN'), ordrerController.getOrderById);
router.put('/:id', protect, authorize('ADMIN'), ordrerController.updateOrder);
router.patch('/:id/cancel', protect, authorize('CUSTOMER'), ordrerController.cancelOrder);
router.delete('/:id', protect, authorize('ADMIN'), ordrerController.deleteOrder);

module.exports = router;


