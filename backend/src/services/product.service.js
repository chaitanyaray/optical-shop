const productRepository = require("../repositories/product.respository");
const AppError = require("../utils/AppError");

const mongoose = require("mongoose");

const getProducts = async () => {
  return productRepository.findAll();
};

const getProduct = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id) && !isNaN(id)) {
    throw new AppError("Invalid product ID", 400);
  }

  const product = await productRepository.findById(id);
  if (!product) {

    throw new AppError("Product not found", 404);
  }

  return product;
};

const getProductsByName = async (name) => {
  console.log(name);

  return productRepository.findByName(name);
};


const createProduct = async (data) => {
  return productRepository.create(data);
};

const updateProduct = async (id, data) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid product ID", 400);
  }

  const product = await productRepository.updateById(id, data);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  return product;
};

const deleteProduct = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid product ID", 400);
  }

  const product = await productRepository.deleteById(id);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  return product;
};



module.exports = {
  getProducts,
  getProduct,
  getProductsByName,
  createProduct,
  updateProduct,
  deleteProduct,
};