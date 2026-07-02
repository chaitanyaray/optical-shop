const orderRepository = require('../repositories/order.repository');
const productRepository = require('../repositories/product.respository');
const AppError = require('../utils/AppError');
const mongoose = require('mongoose');

const createOrder = async (orderData, userId) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    let totalAmount = 0;
    const items = [];

    for (const item of orderData.items) {
      const product = await productRepository.findOneAndUpdate(
        {
          _id: item.product,
          stock: { $gte: item.quantity },
        },
        {
          $inc: {
            stock: -item.quantity,
          },
        },
        {
          returnDocument: "after",
          session,
        }
      );

      if (!product) {
        throw new AppError("Product out of stock", 400);
      }

      items.push({
        product: product._id,
        quantity: item.quantity,
        price: product.price,
      });

      totalAmount += product.price * item.quantity;
    }

    // throw new Error("Testing transaction rollback");

    const order = await orderRepository.createOrder(
      {
        user: userId,
        items,
        totalAmount,
        status: "PENDING",
      },
      session
    );

    await session.commitTransaction();

    return order;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    await session.endSession();
  }
};


const cancelOrder = async (orderId, user) => {



  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    throw new AppError('Invalid order ID', 400);
  }


  const order = await orderRepository.getOrderById(orderId);


  if (!order) {
    throw new AppError('Order not found', 404);
  }

  console.log("User:", user.id);
  console.log("Order User ID:", order.user._id.toString());

  if (user.role !== "ADMIN" && order.user._id.toString() !== user.id) {
    throw new AppError(
      "You are not authorized to cancel this order",
      403
    );
  }


  if (order.status !== 'PENDING') {
    throw new AppError('Only pending orders can be cancelled', 400);
  }
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const restoredItems = [];

    for (const item of order.items) {

      const product = await productRepository.findOneAndUpdate(
        {
          _id: item.product,
        },
        {
          $inc: {
            stock: item.quantity,
          },
        },
        {
          returnDocument: "after",
          session,
        }
      );
      if (!product) {
        throw new AppError("Product not found", 404);
      }
    }

    // throw new Error("Testing cancel rollback");

    const updatedOrder = await orderRepository.updateOrder(orderId, {
      status: "CANCELLED"
    },
      session
    );

    await session.commitTransaction();
    return updatedOrder;

  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    await session.endSession();

  }

}


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

const getAllOrders = async (query = {}) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;

  const skip = (page - 1) * limit;

  const orders = await orderRepository.getAllOrders(skip, limit);

  const total = await orderRepository.countOrders();

  const totalPages = Math.ceil(total / limit)

  return {
    orders,
    meta: {
      page,
      limit,
      total,
      totalPages,

    },
  };
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
  cancelOrder,
  getOrderById,
  getAllOrders,
  getMyOrders,
  updateOrder,
  deleteOrder,
};

