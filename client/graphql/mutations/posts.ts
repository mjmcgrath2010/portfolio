import { gql } from "@apollo/client";

export const AddNewPost = gql`
  mutation AddPost($data: AddPostInput!) {
    addPost(data: $data) {
      title
      description
      body
    }
  }
`;
