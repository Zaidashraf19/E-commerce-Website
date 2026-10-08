const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    ProductImage: {
      type: String,
      required: false,
    },
    ProductName: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: false,
    },
    userName: {
      type: String,
      required: true,
    },
    ratingStars: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Review", ReviewSchema);
