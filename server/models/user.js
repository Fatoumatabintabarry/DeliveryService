// This is where we would save the data location of the driver in order to fetch it for the user! <- Omar

// someone please create a mongodb atlas database
// here is the body of the code for that!
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number], // would look something like [longitude, latitude]
        required: true,
      },
    },
    isDriving: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ location: "2dsphere" });

const User = mongoose.model("User", userSchema);

export default User;
