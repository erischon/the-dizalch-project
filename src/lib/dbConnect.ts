import mongoose from "mongoose";

/**
 * @description Connect to MongoDB database
 * @version 1.0.0
 */
const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(process.env.MONGODB_URI as string);

  console.log("Connected to MongoDB");
};

export default dbConnect;
