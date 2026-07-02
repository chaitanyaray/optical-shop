
const userService = require("../services/user.service");
const asyncHandler = require("../utils/AsyncHandler");
const sendResponse = require("../utils/sendResponse");

exports.getUsers = asyncHandler(async (req, res) => {
  const { users, meta } = await userService.getUsers(req.query);

  return sendResponse(
    res,
    200,
    true,
    "Users fetched successfully",
    users,
    meta
  );
});

exports.getUser = asyncHandler(async (req, res) => {
  const user = await userService.getUser(req.params.id);

  return sendResponse(
    res,
    200,
    true,
    "User fetched successfully",
    user
  );
});

exports.createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);

  return sendResponse(
    res,
    201,
    true,
    "User created successfully",
    user
  );
});

exports.updateUser = asyncHandler(async (req, res) => {
  const user = await userService.updateUser(
    req.params.id,
    req.body
  );

  return sendResponse(
    res,
    200,
    true,
    "User updated successfully",
    user
  );
});

exports.deleteUser = asyncHandler(async (req, res) => {
  await userService.deleteUser(req.params.id);

  return sendResponse(
    res,
    200,
    true,
    "User deleted successfully"
  );
});

