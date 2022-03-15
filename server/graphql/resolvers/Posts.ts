import { Query, Resolver, Ctx } from "type-graphql";
import { Context } from "@apollo/client";
import { PostType } from "../types/Post";

@Resolver()
class PostsResolver {
  @Query(() => [PostType])
  async posts(@Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const posts = await db.models.Post.find({});
      return posts;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}

export default PostsResolver;
