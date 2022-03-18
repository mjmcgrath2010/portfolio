import { ObjectType, Field, ID } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
class Post {
  @prop({})
  readonly _id!: ObjectId;

  @Field()
  prop({});
  title!: string;

  @Field({ nullable: true })
  prop({});
  description!: string;
}

export const PostModel = getModelForClass(Post);
