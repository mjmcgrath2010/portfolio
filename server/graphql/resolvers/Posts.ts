import { Query, Resolver, Ctx, Mutation, Arg, Authorized } from "type-graphql";
import { Context } from "@apollo/client";

import { Post, AddPostInput, PostByIdInput, UpdatePostInput } from "@schema";

@Resolver(Post)
class PostsResolver {
  @Query(() => [Post])
  async allPosts(@Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const posts = await db.models.Post.find({}).exec();
      return posts;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  @Query(() => Post)
  async getPost(@Arg("data") data: PostByIdInput, @Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const post = await db.models.Post.findOne({ _id: data._id }).exec();
      return post;
    } catch (e) {
      console.log(e);
      return {};
    }
  }

  @Authorized()
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

  @Authorized()
  @Mutation(() => Post)
  async updatePost(@Arg("data") data: UpdatePostInput, @Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const { _id, ...update } = data;
      await db.models.Post.findByIdAndUpdate(_id, update);
      return await db.models.Post.findById(_id);
    } catch (e) {
      console.log(e);
      return {};
    }
  }
}

export default PostsResolver;
