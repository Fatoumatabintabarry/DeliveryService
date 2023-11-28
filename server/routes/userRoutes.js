import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { first_name, last_name, email, password, role } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
