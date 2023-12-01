import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { first_name, last_name, email, password, role } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user with the provided password
    const user = new User({
      first_name,
      last_name,
      email,
      password, // Store the password as it is
      role,
    });

    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (user.password === password) {
      // User authenticated successfully
      res.json({ message: "Authentication successful", user });
    } else {
      // Authentication failed
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during authentication:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
