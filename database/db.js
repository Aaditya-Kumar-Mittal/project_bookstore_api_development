require("dotenv").config();
const mongoose = require("mongoose");

// Connect to database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.log(`Mongodb Connection Failed ${error}`);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
