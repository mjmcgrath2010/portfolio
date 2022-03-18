import { Schema } from "mongoose";
import { PostModel } from "@server/graphql/schema";

const Post = new Schema<PostModel>({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default Post;
