// Import required modules or packages
const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Define the Product model
const Product = mongoose.model("Product", productSchema);

// Example product data
const exampleProduct = new Product({
  name: "Chinese Elm",
  description: "A beuftiful tree",
  price: 2000,
  category: "tree",
  image: "https://example.com/images/smartphone_xyz.jpg",
});

// Export the Product model
module.exports = Product;
