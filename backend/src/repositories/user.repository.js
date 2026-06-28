const User = require("../models/User");

const create = async (data) => User.create(data);


const findAll = async (limit, skip) => {
  return User.find(limit, skip)
    .limit()
    .skip()
}

const countUsers = async () => User.countDocuments()

const findById = async (id) => User.findById(id);

const findByEmail = async (email) =>
  User.findOne({ email });

const updateById = async (id, data) =>
  User.findByIdAndUpdate(id, data, {
    returnDocument: "after",
    runValidators: true,
  });


const deleteById = async (id) => User.findByIdAndDelete(id);

module.exports = {
  create,
  findAll,
  countUsers,
  findById,
  findByEmail,
  updateById,
  deleteById,
};