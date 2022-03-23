import { Schema } from "mongoose";
import { PostType } from "@schema";

const Post = new Schema<PostType>({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default Post;
