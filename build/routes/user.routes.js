"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
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
router.get("/users", function (req, res) {
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
router.post("/users", function (req, res) {
    res.json({ message: "User created successfully" });
});
exports.default = router;
