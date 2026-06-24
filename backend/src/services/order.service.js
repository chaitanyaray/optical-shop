const orderRepository = require('../repositories/order.repository');
const productRepository = require('../repositories/product.respository');
const AppError = require('../utils/AppError');
const mongoose = require('mongoose');

const createOrder = async (orderData) => {

  const session =
    await mongoose.startSession();

  try {

    session.startTransaction();

    let totalAmount = 0;

    const items = [];

    for (const item of orderData.items) {

      const product = await productRepository.findOneAndUpdate(
        {
          _id: item.product,
          stock: { $gte: item.quantity }
        },
        {
          $inc: {
            stock: -item.quantity
          }
        },
        {
          returnDocument: "after",
          session
        }
      );

      if (!product) {
        throw new AppError(
          "Product out of stock",
          400
        );
      }

      items.push({
        product: product._id,
        quantity: item.quantity,
        price: product.price
      });

      totalAmount += product.price * item.quantity;
    }
    console.log("TOTAL:", totalAmount);

    const payload = {
      ...orderData,
      items,
      totalAmount,
    };

    console.log("PAYLOAD:", payload);


    const order = await orderRepository.createOrder(
      {
        ...orderData,
        items,
        totalAmount,
        status: "PENDING"
      }

    );

    await session.commitTransaction();

    return order;

  } catch (error) {

    await session.abortTransaction();

    throw error;

  } finally {

    session.endSession();

  }
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

const getMyOrders = async (userId) => {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new AppError('Invalid user ID', 400);
  }

  return await orderRepository.getOrdersByUser(userId);
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
  getMyOrders,
  updateOrder,
  deleteOrder,
};

