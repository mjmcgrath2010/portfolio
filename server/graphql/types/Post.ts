import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class PostType {
  @Field((type) => ID)
  _id!: string;

  @Field()
  title!: string;

  @Field({ nullable: true })
  description!: string;
}
