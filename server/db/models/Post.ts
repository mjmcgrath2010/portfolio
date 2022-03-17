import { Schema } from "mongoose";
import { PostType } from "@graphql/server/types";

const Post = new Schema<PostType>({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default Post;
