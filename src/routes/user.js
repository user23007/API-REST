const express = require('express');
const userSchema = require("../models/user");
const { link } = require('./book');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: email of the user
 *         password:
 *           type: string
 *           description: password of the user
 *       required:
 *         - email
 *         - password
 *       example:
 *         email: jutech@gmail.com
 *         password: superSecurePassword
 */

//ENDPOINT TO CREATE A USER FOR JWT
/**
 * @swagger
 * /auth/users:
 *   post:
 *     summary: create a new user for JWT authentification
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: new user created!
 */
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user.save().then((data) => res.json(data))
    .catch((err) => res.json({ meesage: err }))
});

module.exports = router;

