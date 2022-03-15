import mongoose, { Schema, model } from "mongoose";
import { PostType } from "../../graphql/types/Post";

const PostSchema = new Schema<PostType>({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Post = model<PostType>("Post", PostSchema);

export default mongoose.connection.models.Post || Post;
