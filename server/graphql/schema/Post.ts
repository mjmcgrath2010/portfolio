import { ObjectType, Field, InputType } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

export interface PostType {
  _id: ObjectId;
  title: string;
  description: string;
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
}

@ObjectType()
export class Post {
  @prop()
  @Field()
  public _id?: ObjectId;

  @prop()
  @Field()
  public title!: string;

  @prop()
  @Field()
  public description!: string;
}

export const PostModel = getModelForClass(Post);
