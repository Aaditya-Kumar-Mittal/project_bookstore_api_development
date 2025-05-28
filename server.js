require("dotenv").config();
const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const connectToDatabase = require("./database/db.js");
const bookRoutes = require("./routes/book_routes.js");
 
// Connect To Database
connectToDatabase();

// Connect To Middlewares
app.use(express.json());

// Get Routes

// This applies a prefix url to all the routes
app.use("/api/book", bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 1. Created a Basic Structure of the Server
// 2. Connected to the Database
// 3. Connected to Important Middlewares
// 4. Created Model (needed to work with controllers and routes)
// 5. Understand how many routes, you will be having and based on that create Controllers. (Routes -> Controllers)
