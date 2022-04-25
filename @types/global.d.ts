// global.d.ts
import { mongoose } from "mongoose";
import { MongoClient } from "mongodb";
declare global {
  var mongoConnection: mongoose.Connection;
  var _mongoClientPromise: Promise<MongoClient>;
}
