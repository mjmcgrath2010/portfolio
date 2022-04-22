import { Query, Resolver, Ctx, Mutation, Arg, Authorized } from "type-graphql";
import { Context } from "@apollo/client";

import { Tag, AddTagInput, TagByIdInput, UpdateTagInput } from "@schema";

@Resolver(Tag)
class TagsResolver {
  @Query(() => [Tag])
  async allTags(@Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const tags = await db.models.Tag.find({}).exec();
      return tags;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  @Query(() => Tag)
  async getTag(@Arg("data") data: TagByIdInput, @Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const tag = await db.models.Tag.findOne({ _id: data._id }).exec();
      return tag;
    } catch (e) {
      console.log(e);
      return {};
    }
  }

  @Authorized()
  @Mutation(() => Tag)
  async addTag(@Arg("data") data: AddTagInput, @Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const tag = new db.models.Tag(data);
      await tag.save();

      return tag;
    } catch (e) {
      console.log(e);
      return {};
    }
  }

  @Authorized()
  @Mutation(() => Tag)
  async updateTag(@Arg("data") data: UpdateTagInput, @Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const { _id, ...update } = data;
      await db.models.Tag.findByIdAndUpdate(_id, update);
      return await db.models.Tag.findById(_id);
    } catch (e) {
      console.log(e);
      return {};
    }
  }
}

export default TagsResolver;
