const Order = require('../models/Order');

const createOrder = async (orderData, session) => {

  const order = new Order(orderData);
  return await order.save({ session });
};

const getOrderById = async (orderId, session) => {
  const query = Order.findById(orderId)
    .populate("user", "name email role")
    .populate("items.product", "name price stock");

  if (session) {
    query.session(session);
  }

  return query;
};


const getAllOrders = async (skip, limit, session) => {
  return await Order.find()
    .session(session)
    .populate('user', 'name email role')
    .populate('items.product', 'name price stock')
    .skip(skip)
    .limit(limit);

};

const countOrders = async () => Order.countDocuments();

const getOrdersByUser = async (userId, skip, limit, session) => {
  return Order.find({ user: userId }, null, { session })
    .populate("items.product", "name price")
    .skip(skip)
    .limit(limit);
};

const countOrdersByUser = async (userId) => {
  return Order.countDocuments({
    user: userId,
  });
};

const updateOrder = async (orderId, updateData, session) => {
  return await Order.findByIdAndUpdate
    (orderId, updateData, {
      returnDocument: "after",
      runValidators: true,
      session
    });
};

const deleteOrder = async (orderId, session) => {
  return await Order.findByIdAndDelete(orderId, { session });

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
