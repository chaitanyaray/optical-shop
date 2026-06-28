const Order = require('../models/Order');

const createOrder = async (orderData) => {

  const order = new Order(orderData);
  return await order.save();
};

const getOrderById = async (orderId) => {
  return await Order.findById(orderId)
    .populate('user', 'name email role')
    .populate('items.product', 'name price stock');
};

const getAllOrders = async (skip, limit) => {
  return await Order.find()
    .populate('user', 'name email role')
    .populate('items.product', 'name price stock')
    .skip(skip)
    .limit(limit);

};

const countOrders = async () => Order.countDocuments();

const getOrdersByUser = async (userId, skip, limit) => {
  return Order.find({ user: userId })
    .populate("items.product", "name price")
    .skip(skip)
    .limit(limit);
};

const countOrdersByUser = async (userId) => {
  return Order.countDocuments({
    user: userId,
  });
};

const updateOrder = async (orderId, updateData) => {
  return await Order.findByIdAndUpdate
    (orderId, updateData, {
      returnDocument: "after",
      runValidators: true
    });
};

const deleteOrder = async (orderId) => {
  return await Order.findByIdAndDelete(orderId);

}

module.exports = {
  createOrder,
  getOrderById,
  getAllOrders,
  countOrders,
  getOrdersByUser,
  countOrdersByUser,
  updateOrder,
  deleteOrder,
};
