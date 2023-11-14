import express from "express";
import { updateUserLocation, getUserLocation } from "../controllers/user.js";

const router = express.Router();

// Endpoint to update driver's location to make it more of a live location!
router.post("/updateLocation", updateUserLocation);

// Endpoint to get driver's location
router.get("/getLocation/:userId", getUserLocation);

export default router;
