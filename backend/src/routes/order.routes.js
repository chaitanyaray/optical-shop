const express = require('express');
const router = express.Router();


const ordrerController = require('../controllers/order.controllers');

const { protect, authorize } = require("../middleware/auth.middleware")


router.post('/', protect, ordrerController.createOrder);
router.get('/', protect, authorize('ADMIN'), ordrerController.getAllOrders);
router.get('/:id', protect, authorize('ADMIN'), ordrerController.getOrderById);
router.put('/:id', protect, authorize('ADMIN'), ordrerController.updateOrder);
router.delete('/:id', protect, authorize('ADMIN'), ordrerController.deleteOrder);

module.exports = router;


