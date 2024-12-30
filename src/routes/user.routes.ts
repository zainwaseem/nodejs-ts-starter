import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get list of users
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: List of users retrieved successfully
 */
router.get("/users", (req, res) => {
  res.json({ message: "List of users retrieved successfully" });
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: User created successfully
 */
router.post("/users", (req, res) => {
  res.json({ message: "User created successfully" });
});

export default router;
