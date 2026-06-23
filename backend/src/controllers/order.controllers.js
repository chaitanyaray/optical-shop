const orderService = require('../services/order.service');
const AsyncHandler = require('../utils/asyncHandler');

const createOrder = AsyncHandler(async (req, res) => {
  const orderData = req.body;
  const order = await orderService.createOrder(orderData);
  res.status(201).json({ message: 'Order created successfully', order });
});

const getOrderById = AsyncHandler(async (req, res) => {
  const orderId = req.params.id;
  const order = await orderService.getOrderById(orderId);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  res.status(200).json({ message: 'Order retrieved successfully', order });
});


const getAllOrders = AsyncHandler(async (req, res) => {
  const orders = await orderService.getAllOrders();
  res.status(200).json({ message: 'Orders retrieved successfully', orders });
});

const updateOrder = AsyncHandler(async (req, res) => {
  const orderId = req.params.id;
  const updateData = req.body;
  const order = await orderService.updateOrder(orderId, updateData);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  res.status(200).json({ message: 'Order updated successfully', order });
});

const deleteOrder = AsyncHandler(async (req, res) => {
  const orderId = req.params.id;
  const order = await orderService.deleteOrder(orderId);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  res.status(200).json({ message: 'Order deleted successfully', order });
});

module.exports = {
  createOrder,
  getOrderById,
  getAllOrders,
  updateOrder,
  deleteOrder,
};


