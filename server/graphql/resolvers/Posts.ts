import { Query, Resolver, Ctx, Mutation, Arg } from "type-graphql";
import { Context } from "@apollo/client";

import { Post, AddPostInput } from "@schema";

@Resolver(Post)
class PostsResolver {
  @Query(() => [Post])
  async posts(@Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const posts = await db.models.Post.find({}).exec();
      return posts;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
  @Mutation(() => Post)
  async addPost(@Arg("data") data: AddPostInput, @Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const post = new db.models.Post(data);
      await post.save();

      return post;
    } catch (e) {
      console.log(e);
      return {};
    }
  }
}

export default PostsResolver;
