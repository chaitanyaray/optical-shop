const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth.controllers");

const { protect, authorize } = require("../middleware/auth.middleware");

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Deep Dev
 *               email:
 *                 type: string
 *                 example: deep@test064.com
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Email already exists
 */


router.post("/register", authController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: deep@test064.com
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Invalid credentials
 */

router.post("/login", authController.login);


/**
 * @swagger
 * /auth/admin:
 *   get:
 *     summary: Admin-only route
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Welcome Admin
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */

router.get("/admin", protect, authorize("ADMIN"), (req, res) => {

  res.json(
    {
      success: true,
      message: "Welcome Admin",
    }
  );
}
);




module.exports = router;