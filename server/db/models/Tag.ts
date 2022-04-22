import { Schema } from "mongoose";
import { TagType } from "@schema";

const Tag = new Schema<TagType>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default Tag;
