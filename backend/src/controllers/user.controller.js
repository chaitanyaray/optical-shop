const userService = require("../services/user.service");
const asyncHandler = require("../utils/asyncHandler");

exports.getUsers = asyncHandler(async (req, res) => {
  const users = await userService.getUsers();

  res.status(200).json({
    success: true,
    data: users,
  });
});

exports.getUser = asyncHandler(async (req, res) => {
  const user = await userService.getUser(req.params.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

exports.updateUser = asyncHandler(async (req, res) => {
  const user = await userService.updateUser(
    req.params.id,
    req.body
  );

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.deleteUser = asyncHandler(async (req, res) => {
  await userService.deleteUser(req.params.id);

  res.status(200).json({
    success: true,
    message: "User deleted",
  });
});