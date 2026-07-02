const orderService = require("../services/order.service");
const AsyncHandler = require("../utils/AsyncHandler");
const sendResponse = require("../utils/sendResponse");

exports.createOrder = AsyncHandler(async (req, res) => {
  const order = await orderService.createOrder(req.body, req.user.id);

  return sendResponse(
    res,
    201,
    true,
    "Order created successfully",
    order
  );
});


exports.cancelOrder = AsyncHandler(async (req, res) => {
  const order = await orderService.cancelOrder(req.params.id, req.user);

  return sendResponse(
    res,
    200,
    true,
    "Order cancelled successfully",
    order
  );
});

exports.getOrderById = AsyncHandler(async (req, res) => {
  const order = await orderService.getOrderById(req.params.id);

  return sendResponse(
    res,
    200,
    true,
    "Order retrieved successfully",
    order
  );
});

exports.getAllOrders = AsyncHandler(async (req, res) => {
  const { orders, meta } = await orderService.getAllOrders(req.query);


  return sendResponse(
    res,
    200,
    true,
    "Orders retrieved successfully",
    orders,
    meta
  );
});

exports.getMyOrders = AsyncHandler(async (req, res) => {
  const orders = await orderService.getMyOrders(req.user.id);

  return sendResponse(
    res,
    200,
    true,
    "Orders retrieved successfully",
    orders
  );
});

exports.updateOrder = AsyncHandler(async (req, res) => {
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

exports.deleteOrder = AsyncHandler(async (req, res) => {
  await orderService.deleteOrder(req.params.id);

  return sendResponse(
    res,
    200,
    true,
    "Order deleted successfully"
  );
});



