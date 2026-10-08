// MONGO DB

const mongoose = require("mongoose");
const Mongo_Url = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(Mongo_Url);
    console.log("✅ MONGO DB CONNECTED");
  } catch (error) {
    console.error("❌ MONGO DB CONNECTION FAILED", error.message);
  }
};

module.exports = connectDB;
