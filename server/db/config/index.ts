import mongoose from "mongoose";

const MongoURL = process.env.DB_URL;
const dbName = process.env.DB_NAME;

const connectDb = async () => {
  try {
    await mongoose.connect(`${MongoURL}`, {
      dbName,
    });
    return mongoose.connection;
  } catch (e) {
    console.log("error connecting to database");
    console.log(e);
    process.exit(1);
  }
};

export default connectDb;
