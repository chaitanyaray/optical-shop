const asyncHandler = require(
  "../utils/AsyncHandler"
);

const sendResponse = require("../utils/sendResponse");

const authService = require(
  "../services/auth.service"
);

exports.register = asyncHandler(


  async (req, res) => {

    const result =
      await authService.register(
        req.body
      );

    return sendResponse(
      res,
      201,
      true,
      "User registered successfully",
      result
    );
  }
);

exports.login = asyncHandler(
  async (req, res) => {
    const result =
      await authService.login(req.body);

    return sendResponse(
      res,
      201,
      true,
      "Login successful",
      result
    );
  }
);
exports.me = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});