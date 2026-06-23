const Product = require("../models/Product");

const create = async (data) => Product.create(data);

const findAll = async () => Product.find();

const findById = async (id) => Product.findById(id);

const findByName = async (name) => Product.find({ name: { $regex: name, $options: "i" } });

const findByCategory = async (category) => Product.find({ category });


const updateById = async (id, data) => Product.findByIdAndUpdate(id, data,
  {
    returnDocument: "after",
    runValidators: true,
  }

);

const deleteById = async (id) => Product.findByIdAndDelete(id);

module.exports = {
  create,
  findAll,
  findById,
  findByName,
  findByCategory,
  updateById,
  deleteById
};