const express = require("express");

const {
  fetchAllBooks,
  getBookById,
  createNewBook,
  updateBookById,
  deleteBookById,
} = require("../controllers/book_controller.js");

// Create Express Router

const router = express.Router();

// Create the Routes

// To fetch all the books
router.get("/fetchAllBooks", fetchAllBooks);

// To get a specific boook

router.get("/getBook/:id", getBookById);

// To create a new book

router.post("/createBook", createNewBook);

// To update a particular book

router.put("/updateBook/:id", updateBookById);

// To delete a particular book
router.delete("/deleteBook/:id", deleteBookById);

module.exports = router;
