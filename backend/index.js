require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/mongoose.js");
const ProductRoute = require("./routes/Productsroutes.js");
const OrderRoute = require("./routes/Orderroutes.js");
const ReviewRoute = require("./routes/Reviewsroutes.js");

const app = express();
const port = process.env.PORT;

// TO CONNECT WITH FRONTEND
app.use(cors());
app.use(express.json());

// TO CONNECT WITH DB
connectDB();

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", ProductRoute);
app.use("/", OrderRoute);
app.use("/", ReviewRoute);

app.listen(3000, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});
