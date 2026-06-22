const User = require("../models/User");

const create = async (data) => User.create(data);

const findAll = async () => User.find();

const findById = async (id) => User.findById(id);

const updateById = async (id, data) =>
  User.findByIdAndUpdate(id, data, {
    returnDocument: "after",
    runValidators: true,
  });
const deleteById = async (id) =>
  User.findByIdAndDelete(id);

module.exports = {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
};