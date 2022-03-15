import mongoose, { Schema, model } from "mongoose";
import { PostType } from "../../graphql/types/Post";

const Post = new Schema<PostType>({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default Post;
