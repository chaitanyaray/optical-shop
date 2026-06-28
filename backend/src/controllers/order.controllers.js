const orderService = require("../services/order.service");
const AsyncHandler = require("../utils/AsyncHandler");
const sendResponse = require("../utils/sendResponse");

const createOrder = AsyncHandler(async (req, res) => {
  const order = await orderService.createOrder(req.body);

  return sendResponse(
    res,
    201,
    true,
    "Order created successfully",
    order
  );
});

const getOrderById = AsyncHandler(async (req, res) => {
  const order = await orderService.getOrderById(req.params.id);

  return sendResponse(
    res,
    200,
    true,
    "Order retrieved successfully",
    order
  );
});

const getAllOrders = AsyncHandler(async (req, res) => {
  const orders = await orderService.getAllOrders();

  return sendResponse(
    res,
    200,
    true,
    "Orders retrieved successfully",
    orders
  );
});

const getMyOrders = AsyncHandler(async (req, res) => {
  const orders = await orderService.getMyOrders(req.user.id);

  return sendResponse(
    res,
    200,
    true,
    "Orders retrieved successfully",
    orders
  );
});

const updateOrder = AsyncHandler(async (req, res) => {
  const order = await orderService.updateOrder(
    req.params.id,
    req.body
  );

  return sendResponse(
    res,
    200,
    true,
    "Order updated successfully",
    order
  );
});

const deleteOrder = AsyncHandler(async (req, res) => {
  await orderService.deleteOrder(req.params.id);

  return sendResponse(
    res,
    200,
    true,
    "Order deleted successfully"
  );
});

module.exports = {
  createOrder,
  getOrderById,
  getAllOrders,
  getMyOrders,
  updateOrder,
  deleteOrder,
};

