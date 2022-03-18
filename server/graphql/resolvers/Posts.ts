import { Query, Resolver, Ctx } from "type-graphql";
import { Context } from "@apollo/client";

import { PostModel } from "../schema/Post";

@Resolver()
class PostsResolver {
  @Query(() => [PostModel])
  async posts(@Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const posts = await db.models.PostModel.find({}).exec();
      console.log(posts);
      return posts;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}

export default PostsResolver;
