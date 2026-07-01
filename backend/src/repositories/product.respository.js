const Product = require("../models/Product");

const create = async (data) => Product.create(data);

const findAllProducts = async (filter, sort, select, skip, limit) => {
  const projection = select
    ? select
    : "-__v";
  return Product.find(filter)
    .sort(sort)
    .select(projection)
    .skip(skip)
    .limit(limit)

}

const countProducts = async (filter) => Product.countDocuments(filter)


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