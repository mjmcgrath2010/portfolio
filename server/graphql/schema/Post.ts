import { ObjectType, Field, InputType } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { TagByIdInput } from "@schema";

export interface PostType {
  _id: ObjectId;
  title: string;
  description: string;
  featuredImage: string;
  body: string;
  tags: ObjectId[];
  updatedAt: string;
  createdAt: string;
}

@InputType()
export class PostByIdInput {
  @Field()
  public _id!: string;
}

@InputType()
export class AddPostInput implements Partial<PostType> {
  @Field()
  public title!: string;

  @Field()
  public description!: string;

  @Field()
  public body!: string;

  @Field()
  public featuredImage?: string;
}

@InputType()
export class UpdatePostInput implements Partial<PostType> {
  @Field()
  public _id!: ObjectId;

  @Field()
  public title?: string;

  @Field()
  public description?: string;

  @Field()
  public body?: string;

  @Field()
  public featuredImage?: string;
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
  public featuredImage?: string;

  @prop()
  @Field()
  public tags?: ObjectId;

  @prop()
  @Field()
  public updatedAt!: Date;

  @prop()
  @Field()
  public createdAt!: Date;
}

export const PostModel = getModelForClass(Post);
