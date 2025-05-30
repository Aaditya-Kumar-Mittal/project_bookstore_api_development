const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is mandatory!"],
    trim: true,
    maxLength: [100, "Book title's lenght cannot be more than 100 characters."],
  },
  author: {
    type: String,
    required: [true, "Author name is mandatory!"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "Publication year is required!"],
    min: [1000, "Year must be atleast 1000."],
    max: [new Date().getFullYear(), "Year cannot be more than current year."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Book, here is, collection name.
module.exports = mongoose.model("Book", BookSchema);
