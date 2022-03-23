import { ObjectType, Field, InputType } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

export interface UserType {
  _id: ObjectId;
  name: string;
}

@InputType()
export class UserByIdInput implements Partial<UserType> {
  @Field()
  public _id!: ObjectId;
}

@InputType()
export class AddUserInput implements Partial<UserType> {
  @Field()
  public name!: string;
}

@InputType()
export class UpdateUserInput implements Partial<UserType> {
  @Field()
  public _id!: ObjectId;

  @Field()
  public name!: string;
}

@ObjectType()
export class User {
  @prop()
  @Field()
  public _id!: ObjectId;

  @prop()
  @Field()
  public name!: string;
}

export const UserModel = getModelForClass(User);
