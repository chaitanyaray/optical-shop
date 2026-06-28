const Product = require("../models/Product");

const create = async (data) => Product.create(data);

const findAllProducts = async (skip, limit) => {
  return Product.find()
    .skip(skip)
    .limit(limit)
}

const countProducts = async () => Product.countDocuments()

const findById = async (id) => Product.findById(id);

const findByName = async (name) => Product.find({ name: { $regex: name, $options: "i" } });

const findByCategory = async (category) => Product.find({ category });

const findOneAndUpdate = async (
  filter,
  update,
  options = {}
) => Product.findOneAndUpdate(
  filter,
  update,
  options
);

const updateById = async (id, data) => Product.findByIdAndUpdate(id, data,
  {
    returnDocument: "after",
    runValidators: true,
  }

);

const deleteById = async (id) => Product.findByIdAndDelete(id);


module.exports = {
  create,
  countProducts,
  findAllProducts,
  findById,
  findByName,
  findByCategory,
  findOneAndUpdate,
  updateById,
  deleteById
};