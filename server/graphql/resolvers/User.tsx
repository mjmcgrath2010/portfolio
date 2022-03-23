import { Query, Resolver, Ctx, Mutation, Arg } from "type-graphql";
import { Context } from "@apollo/client";

import { User, AddUserInput, UserByIdInput, UpdateUserInput } from "@schema";

@Resolver(User)
class UsersResolver {
  @Query(() => [User])
  async allUsers(@Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const users = await db.models.User.find({}).exec();
      return users;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  @Query(() => User)
  async getUser(@Arg("data") data: UserByIdInput, @Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const user = await db.models.User.findOne({ _id: data._id }).exec();
      return user;
    } catch (e) {
      console.log(e);
      return {};
    }
  }

  @Mutation(() => User)
  async addUser(@Arg("data") data: AddUserInput, @Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const user = new db.models.User(data);
      await user.save();

      return user;
    } catch (e) {
      console.log(e);
      return {};
    }
  }

  @Mutation(() => User)
  async updateUser(@Arg("data") data: UpdateUserInput, @Ctx() ctx: Context) {
    try {
      const { db } = ctx;
      const { _id, ...update } = data;
      await db.models.User.findByIdAndUpdate(_id, update);
      return await db.models.User.findById(_id);
    } catch (e) {
      console.log(e);
      return {};
    }
  }
}

export default UsersResolver;
