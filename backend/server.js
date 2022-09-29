require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const productRoutes = require("./routes/productRoutes");

// Connect Database
connectDB();

// Init middleware
app.use(express.json());

// Define Routes
app.use("/api/products", productRoutes);

// Define Port number
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
