import { Mutation } from "type-graphql";

class PostsMutations {
  @Mutation(() => String)
  addPost() {
    return "hello, world!";
  }
}

export default PostsMutations;
