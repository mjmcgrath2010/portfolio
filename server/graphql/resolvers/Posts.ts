import { Query, Resolver, Ctx } from "type-graphql";
import { Context } from "@apollo/client";

import { Post } from "@schema";

@Resolver(Post)
class PostsResolver {
  @Query(() => [Post])
  async posts(@Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const posts = await db.models.Post.find({}).exec();

      console.log(posts);
      return posts;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}

export default PostsResolver;
