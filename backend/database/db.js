import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  const URL = process.env.MONGODB_URI;
  try {
    await mongoose.connect(URL);
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Error in connecting database", error.message);
  }
};

export default Connection;
