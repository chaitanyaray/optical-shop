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

const getAllOrders = async () => {
  return await Order.find()
    .populate('user', 'name email role')
    .populate('items.product', 'name price stock');

};

const getOrdersByUser = async (userId) => {
  return Order.find({ user: userId })
    .populate("items.product", "name price");
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
  getOrdersByUser,
  updateOrder,
  deleteOrder,
};
