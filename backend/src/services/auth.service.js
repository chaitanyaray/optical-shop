const userRepository = require("../repositories/user.repository");
const AppError = require("../utils/AppError");

const getUsers = async () => {
  return userRepository.findAll();
};

const getUser = async (id) => {
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
  const user = await userRepository.updateById(id, data);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

const deleteUser = async (id) => {
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