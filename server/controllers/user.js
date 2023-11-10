import User from "../models/user.js";

// Controller to update location
export const updateUserLocation = async (req, res) => {
  const { userId, latitude, longitude, isDriving } = req.body;

  try {
    const user = await User.findById(userId);
    if (user) {
      user.location = { type: "Point", coordinates: [longitude, latitude] };
      user.isDriving = isDriving;
      await user.save();
      res
        .status(200)
        .json({ message: "Location updated", location: user.location });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Controller to get location
export const getUserLocation = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user && user.isDriving) {
      res.status(200).json(user.location);
    } else {
      res.status(404).json({ message: "User not found or not driving" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving location" });
  }
};
