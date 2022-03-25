// global.d.ts
import { mongoose } from "mongoose";
declare global {
  var mongoConnection: mongoose.Connection;
}
