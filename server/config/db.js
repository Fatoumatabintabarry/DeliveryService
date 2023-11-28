import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://omarfsm02:Soen343Project@soen343cluster.jhhv3ia.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`DB connected on port ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
