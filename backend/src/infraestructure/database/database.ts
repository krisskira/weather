import mongoose from "mongoose";

export async function useDatabaseFactory(databaseUri: string) {
  const instance = await mongoose.connect(databaseUri);
  instance.connection.on("error", (error) => {
    console.error(`MongoDB connection error: ${error}`);
    process.exit(-1);
  });
  instance.connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
  return instance;
}
