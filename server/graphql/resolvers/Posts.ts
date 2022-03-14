import { Query, Resolver } from "type-graphql";
import { PostType } from "../types/Post";

@Resolver()
class PostsResolver {
  @Query(() => [PostType])
  posts() {
    return [{ _id: "1234", title: "h2l12", description: "afsfa" }];
  }
}

export default PostsResolver;
