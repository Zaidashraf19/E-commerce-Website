const express = require("express");
const router = express.Router();
const Orders = require("../models/order.js");

// 📌 Place Order
router.post("/placeorder", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      contact,
      address,
      notes,
      cartItems,
      totalQuantity,
      totalPrice,
      orderStatus, // ✅ allow status from req if provided
    } = req.body;

    // validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !contact ||
      !address ||
      !cartItems ||
      cartItems.length === 0
    ) {
      return res.status(400).json({
        message:
          "All required fields must be filled and cartItems cannot be empty",
      });
    }

    const newOrder = new Orders({
      firstName,
      lastName,
      email,
      contact,
      address,
      notes,
      cartItems,
      totalQuantity,
      totalPrice,
      orderStatus: orderStatus || "pending", // ✅ default "pending"
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
});

// 📌 Get All Orders
router.get("/getorder", async (req, res) => {
  try {
    const orders = await Orders.find().sort({ createdAt: -1 }); // latest first
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error });
  }
});

// 📌 Update Order Status
router.put("/updateorder/:id", async (req, res) => {
  try {
    const { orderStatus } = req.body;

    if (!orderStatus) {
      return res.status(400).json({ message: "Order status is required" });
    }

    const updatedOrder = await Orders.findByIdAndUpdate(
      req.params.id,
      { orderStatus },
      { new: true },
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: "Failed to update order", error });
  }
});

module.exports = router;
