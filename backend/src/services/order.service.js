const orderRepository = require('../repositories/order.repository');
const productRepository = require('../repositories/product.respository');
const AppError = require('../utils/AppError');
const mongoose = require('mongoose');

const createOrder = async (orderData) => {
  let totalAmount = 0;

  const items = [];

  for (const item of orderData.items) {

    const product = await productRepository.findById(item.product);

    if (!product) {
      throw new AppError("Product not found", 404);
    }

    items.push({
      product: product._id,
      quantity: item.quantity,
      price: product.price,
    });

    totalAmount += product.price * item.quantity;
  }

  return orderRepository.createOrder({
    ...orderData,
    items,
    totalAmount,
  });
};

const getOrderById = async (orderId) => {
  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    throw new AppError('Invalid order ID', 400);
  }

  const order = await orderRepository.getOrderById(orderId);
  if (!order) {
    throw new AppError('Order not found', 404);
  }

  return order;
}

const getAllOrders = async () => {
  return await orderRepository.getAllOrders();
}


const updateOrder = async (orderId, updateData) => {
  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    throw new AppError('Invalid order ID', 400);
  }

  const order = await orderRepository.updateOrder(orderId, updateData);

  if (!order) {

    throw new AppError('Order not found', 404);
  }

  return order;
}


const deleteOrder = async (orderId) => {
  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    throw new AppError('Invalid order ID', 400);
  }

  const order = await orderRepository.deleteOrder(orderId);
  if (!order) {
    throw new AppError('Order not found', 404);
  }

  return order;
}

module.exports = {
  createOrder,
  getOrderById,
  getAllOrders,
  updateOrder,
  deleteOrder,
};

