const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");

exports.register = async (req, res) => {
  res.status(201).json({
    success: true,
    message: "User registered",
  });
};



exports.register = asyncHandler(async (req, res) => {
  throw new AppError("Email already exists", 400);
});