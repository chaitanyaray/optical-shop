const express = require("express");

const router = express.Router();

const authController = require(
  "../controllers/auth.controllers"
);
const {
  protect,
  authorize
} = require("../middleware/auth.middleware");

router.post(
  "/register",
  authController.register
);

router.post("/login", authController.login);

router.get(
  "/admin",
  protect,
  authorize("ADMIN"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin",
    });
  }
);


module.exports = router;