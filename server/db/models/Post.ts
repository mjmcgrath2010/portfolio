import { Schema } from "mongoose";
import { PostType } from "@server/graphql/schema";
import { ObjectId } from "mongodb";

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
