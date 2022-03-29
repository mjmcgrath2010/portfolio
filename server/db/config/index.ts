import mongoose from "mongoose";
import * as models from "@models";

const MongoURL = process.env.DB_URL;

const connectDb = () => {
  if (global.mongoConnection) {
    return global.mongoConnection;
  }
  try {
    const conn = mongoose.createConnection(`${MongoURL}`);
    Object.entries(models).forEach(([name, schema]: any) => {
      conn.model(name, schema);
    });

    global.mongoConnection = conn;

    return conn;
  } catch (e) {
    console.log("error connecting to database");
    console.log(e);
    process.exit(1);
  }
};

export default connectDb;
