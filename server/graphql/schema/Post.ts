import { ObjectType, Field, InputType } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

export interface PostType {
  _id: ObjectId;
  title: string;
  description: string;
  body: string;
  updatedAt: string;
  createdAt: string;
}

@InputType()
export class PostByIdInput implements Partial<PostType> {
  @Field()
  public _id!: ObjectId;
}

@InputType()
export class AddPostInput implements Partial<PostType> {
  @Field()
  public title!: string;

  @Field()
  public description!: string;

  @Field()
  public body!: string;
}

@InputType()
export class UpdatePostInput implements Partial<PostType> {
  @Field()
  public _id!: ObjectId;

  @Field()
  public title!: string;

  @Field()
  public description!: string;
}

@ObjectType()
export class Post {
  @prop()
  @Field()
  public _id!: ObjectId;

  @prop()
  @Field()
  public title!: string;

  @prop()
  @Field()
  public description!: string;

  @prop()
  @Field()
  public body!: string;

  @prop()
  @Field()
  public updatedAt!: Date;

  @prop()
  @Field()
  public createdAt!: Date;
}

export const PostModel = getModelForClass(Post);
