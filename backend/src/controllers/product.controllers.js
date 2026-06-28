const productService = require("../services/product.service");
const asyncHandler = require("../utils/AsyncHandler");
const sendResponse = require("../utils/sendResponse");

exports.getProducts = asyncHandler(async (req, res) => {
  const products = await productService.getProducts();
  return sendResponse(
    res,
    200,
    true,
    "Products fetched successfully",
    products
  );

});



exports.getProductById = asyncHandler(async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  res.status(200).json({ message: "Product retrieved successfully", product });
  return sendResponse(
    res,
    200,
    true,
    "Product retrieved successfully",
    products
  );
});

exports.getProductByName = asyncHandler(async (req, res) => {
  const product = await productService.getProductsByName(req.params.name);
  return sendResponse(
    res,
    200,
    true,
    "Product retrieved successfully",
    products
  );
});

exports.createProduct = asyncHandler(async (req, res) => {

  const product = await productService.createProduct(req.body, req.file);

  return sendResponse(
    res,
    201,
    true,
    "Product created successfully",
    product
  );
});

exports.updateProduct = asyncHandler(async (req, res) => {
  const product = await productService.updateProduct(req.params.id, req.body, req.file);
  return sendResponse(
    res,
    200,
    true,
    "Product updated successfully",
    product
  );
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  await productService.deleteProduct(req.params.id);
  return sendResponse(
    res,
    200,
    true,
    "Product deleted successfully",
    null
  );
});
