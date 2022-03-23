import { Schema } from "mongoose";
import { UserType } from "@schema";

const User = new Schema<UserType>(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

export default User;
