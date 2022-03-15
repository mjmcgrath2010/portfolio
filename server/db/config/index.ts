import mongoose from "mongoose";
import * as models from "@models/index";

const MongoURL = process.env.DB_URL;
const dbName = process.env.DB_NAME;

const connectDb = async () => {
  try {
    const conn = await mongoose.createConnection(`${MongoURL}`, {
      dbName,
    });
    Object.entries(models).forEach(([name, schema]) => {
      conn.model(name, schema);
    });

    return conn;
  } catch (e) {
    console.log("error connecting to database");
    console.log(e);
    process.exit(1);
  }
};

export default connectDb;
