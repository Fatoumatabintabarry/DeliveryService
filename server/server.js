import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import connectDB from "./config/db.js";
import bodyParser from "body-parser"; // Import body-parser as ES module
import products from "./data/products.js";
import cors from "cors";
import reviewRoutes from './routes/reviewRoutes.js'; // Adjust the path as necessary


connectDB();

const app = express();
app.use(cors());
const port = 3000;

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//app.use('/api/products', itemRoutes);
app.use("/api", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

// Corrected the order of req and res in the parameters
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product); // Send the found product instead of the whole products array
});

app.get("/api/quote", (req, res) => {
  res.send("From Server");
});

// Removed the redundant GET endpoint for '/api/quote' since we have a POST below.

app.post("/api/quote", (req, res) => {
  console.log(req.body);
  const { Height, Weight, SDescription, Distance } = req.body;
  console.log(`Difference between the two addresses is ${Distance}`);
  // Send a response with the form data and a message. Only one response should be sent.
  res.json({
    Height,
    Weight,
    SDescription,
    Distance,
    message: "Form Submitted",
  });
});

// route for review 
app.use('/api/reviews', reviewRoutes);

// Listen on the same port as declared above, remove the second listen statement.
app.listen(port, () => console.log(`Server is running on port ${port}`));
