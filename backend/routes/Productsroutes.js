const express = require("express");
const router = express.Router();
const Product = require("../models/ProductModel.js");

// get data
router.get("/product", async (req, res) => {
  try {
    const Products = await Product.find();
    console.log(Products);

    res.json(Products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Products", error });
  }
});

// GET single product by ID
router.get("/product/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
});

// Add this route in your backend server
router.delete("/product", (req, res) => {
  res.status(200).json({ message: "Product deleted successfully" });
});

// create new product
router.post("/Addproducts", async (req, res) => {
  try {
    const Products = new Product(req.body);
    await Products.save();
    res.status(201).json(Products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
