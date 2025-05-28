const Book = require("../models/Book");

const fetchAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({}).select("title author");
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "All books have been fetched successfully!",
        // data : allBooks
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);

    if (book) {
      res.status(200).json({
        success: true,
        message: "Book has been fetched successfully!",
        data: {
          title: book.title,
          author: book.author,
          year: book.year,
        },
      });
    } else {
      res.status(404).json({
        success: false,
        message:
          "Book cannot be found in the database! Please Try Again with a different id!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);

    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        data: newlyCreatedBook,
        message: "Book has been created and added successfully!",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book could not be created!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBookById = async (req, res) => {
  try {
    const bookIdToUpdate = req.params.id;
    const updatedBookFormData = req.body;

    const updateBook = await Book.findByIdAndUpdate(bookIdToUpdate, updatedBookFormData, {
      new: true,
    });

    if (updateBook) {
      res.status(200).json({
        success: true,
        data: updateBook,
        message: "Book has been updated successfully!",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book could not be updated!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const bookIdToDelete = req.params.id;

    const deletedBook = await Book.findByIdAndDelete(bookIdToDelete);

    if (deletedBook) {
      res.status(200).json({
        success: true,
        message: "Book has been deleted successfully!",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book could not be deleted!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  fetchAllBooks,
  getBookById,
  createNewBook,
  updateBookById,
  deleteBookById,
};
