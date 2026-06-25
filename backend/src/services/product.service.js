const productRepository = require("../repositories/product.respository");
const AppError = require("../utils/AppError");

const mongoose = require("mongoose");

const uploadTocloudinary = require("../utils/cloudinaryUpload");
const deleteFromCloudinary = require("../utils/cloudinaryDelete");

const getProducts = async () => {
  return productRepository.findAll();
};

const getProduct = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid product ID", 400);
  }

  const product = await productRepository.findById(id);
  if (!product) {

    throw new AppError("Product not found", 404);
  }

  return product;
};

const getProductsByName = async (name) => {
  return productRepository.findByName(name);
};


const createProduct = async (data, file) => {
  if (file) {
    const result = await uploadTocloudinary(
      file.buffer
    );

    data.imageUrl = result.secure_url;
    data.imagePublicId = result.public_id;


  }
  return productRepository.create(data);
};

const updateProduct = async (id, data, file) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid product ID", 400);
  }

  const existingProduct = await productRepository.findById(id);

  if (!existingProduct) {
    throw new AppError("Product not found", 404);
  }
  if (file) {

    if (existingProduct.imagePublicId) {
      await deleteFromCloudinary(
        existingProduct.imagePublicId
      );
    }

    const result = await uploadTocloudinary(
      file.buffer
    );

    data.imageUrl = result.secure_url;
    data.imagePublicId = result.public_id;

  }

  const product = await productRepository.updateById(id, data);

  return product;
};

const deleteProduct = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invalid product ID", 400);
  }

  const product = await productRepository.findById(id);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  if (product.imagePublicId) {
    await deleteFromCloudinary(
      product.imagePublicId
    );
  }

  await productRepository.deleteById(id);

  return {
    message: "Product deleted successfully",
  };
};


module.exports = {
  getProducts,
  getProduct,
  getProductsByName,
  createProduct,
  updateProduct,
  deleteProduct,
};