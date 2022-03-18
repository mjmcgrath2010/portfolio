import { ObjectType, Field, ID } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

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
}

export const PostModel = getModelForClass(Post);
