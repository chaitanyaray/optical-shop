const userRepository = require("../repositories/user.repository");
const AppError = require("../utils/AppError");

const mongoose = require("mongoose");

const getUsers = async () => {
  return userRepository.findAll();
};

const getUser = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid user ID", 400);
  }

  const user = await userRepository.findById(id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

const createUser = async (data) => {
  return userRepository.create(data);
};

const updateUser = async (id, data) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid user ID", 400);
  }

  const user = await userRepository.updateById(id, data);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

const deleteUser = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid user ID", 400);
  }

  const user = await userRepository.deleteById(id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};



module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};