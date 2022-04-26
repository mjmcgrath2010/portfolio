import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import * as models from "@models";

const MongoURL = process.env.DB_URL;

export const connectDb = () => {
  if (global.mongoConnection) {
    return global.mongoConnection;
  }
  try {
    const conn = mongoose.createConnection(`${MongoURL}`);
    Object.entries(models).forEach(async ([name, schema]: any) => {
      await conn.model(name, schema);
    });

    global.mongoConnection = conn;

    return conn;
  } catch (e) {
    console.log("error connecting to database");
    console.log(e);
    process.exit(1);
  }
};

const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
export let clientPromise: Promise<MongoClient>;

if (!MongoURL) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(`${MongoURL}`, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(`${MongoURL}`, options);
  clientPromise = client.connect();
}
