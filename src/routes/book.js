const express = require('express');
const bookSchema = require("../models/book");

const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: title of the book
 *         author:
 *           type: string
 *           description: author of the book
 *         published:
 *           type: integer
 *           description: when the book is published
 *         status:
 *           type: boolean
 *           description: is the book available?
 *       required:
 *         - title
 *         - author
 *         - published
 *         - status
 *       example:
 *         title: Buscando a Alaska
 *         author: John Green
 *         published: 2005
 *         status: true
 */

//ENDPOINT TO CREATE A BOOK
/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: create a new book
 *     tags: [Book]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: new book created!
 */
router.post('/books', (req, res) => {
    const book = bookSchema(req.body);
    book.save().then((data) => res.json(data))
    .catch((err) => res.json({ meesage: err }))
});

//ENDPOINT to get books
/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: return a book
 *     tags: [Book]
 *     responses:
 *       200:
 *         description: all books!
 *         content: 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/books', (req, res) => {
    bookSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ meesage: err }))
});

//ENDPOINT to get a single book
//ENDPOINT to get books
/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: return a book
 *     tags: [Book]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the ID  
 *     responses:
 *       200:
 *         description: a book!
 *         content: 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       404:
 *         description: book not found                                                              
 */
router.get('/books/:id', (req, res) => {
    const { id } = req.params;
    bookSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ meesage: err }))
});

//ENDPOINT to Update books
/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: update a book
 *     tags: [Book]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'  
 *     responses:
 *       200:
 *         description: book updated!
 *       404:
 *         description: book not found                                                              
 */
router.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, published, state } = req.body;
    bookSchema
    .updateOne({ _id: id }, { $set: {title, author, published, state} })
    .then((data) => res.json(data))
    .catch((err) => res.json({ meesage: err }))
});

//ENDPOINT to Delete books
/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: return a book
 *     tags: [Book]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the ID  
 *     responses:
 *       200:
 *         description: book deleted!
 *       404:
 *         description: book not found                                                              
 */
router.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    bookSchema
    .deleteOne({ _id: id } )
    .then((data) => res.json(data))
    .catch((err) => res.json({ meesage: err }))
});


module.exports = router;


