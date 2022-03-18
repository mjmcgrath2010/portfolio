import { Schema } from "mongoose";
import { ObjectId } from "mongodb";
import { PostType } from "@schema";

const Post = new Schema<PostType>({
  _id: {
    type: ObjectId,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default Post;
