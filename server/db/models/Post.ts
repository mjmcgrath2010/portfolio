import { Schema } from "mongoose";
import { PostType } from "@schema";

const Post = new Schema<PostType>(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    body: {
      type: String,
    },
    featuredImage: {
      type: String,
    },
    tags: {
      type: [{ type: String }],
    },
  },
  { timestamps: true }
);

export default Post;
