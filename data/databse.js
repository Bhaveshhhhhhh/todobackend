import mongoose from "mongoose";

export const connectDB = mongoose
  .connect(process.env.MONGO_URI, { dbName: "nodeapi" })
  .then(() => {
    console.log("Database is connected ");
  })
  .catch(() => {
    console.error("error ");
  });
