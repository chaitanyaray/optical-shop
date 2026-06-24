const productService = require("../services/product.service");
const asyncHandler = require("../utils/asyncHandler");

exports.getProducts = asyncHandler(async (req, res) => {
  const products = await productService.getProducts();
  res.status(200).json(products);
});

exports.getProduct = asyncHandler(async (req, res) => {
  const product = await productService.getProduct(req.params.id);
  res.status(200).json(product);
});


exports.getProductById = asyncHandler(async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  res.status(200).json({ message: "Product retrieved successfully", product });
});

exports.getProductByName = asyncHandler(async (req, res) => {
  const product = await productService.getProductsByName(req.params.name);
  res.status(200).json({ message: "Product retrieved successfully", product });
});

exports.createProduct = asyncHandler(async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.status(201).json({ success: true, data: product });
});

exports.updateProduct = asyncHandler(async (req, res) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  res.status(200).json({ success: true, data: product });
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  await productService.deleteProduct(req.params.id);
  res.status(204).json({ message: "Product deleted successfully", success: true });
});
