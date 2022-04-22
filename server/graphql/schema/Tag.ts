import { ObjectType, Field, InputType } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

export interface TagType {
  _id: ObjectId;
  name: string;
}

@InputType()
export class TagByIdInput implements Partial<TagType> {
  @Field()
  public _id!: ObjectId;
}

@InputType()
export class AddTagInput implements Partial<TagType> {
  @Field()
  public name!: string;
}

@InputType()
export class UpdateTagInput implements Partial<TagType> {
  @Field()
  public _id!: ObjectId;

  @Field()
  public name!: string;
}

@ObjectType()
export class Tag {
  @prop()
  @Field()
  public _id!: ObjectId;

  @prop()
  @Field()
  public name!: string;
}

export const TagModel = getModelForClass(Tag);
