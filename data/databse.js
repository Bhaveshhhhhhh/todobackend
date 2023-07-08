import mongoose from "mongoose";

export const connectDB = mongoose
  .connect(process.env.MONGO_URI, { dbName: "nodeapi" })
  .then((c) => {
    console.log(`Database is connected with ${c.connection.host}`);
  })
  .catch(() => {
    console.error("error ");
  });
