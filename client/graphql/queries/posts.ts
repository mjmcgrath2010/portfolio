import { gql } from "@apollo/client";
import client from "@gql/client";

export const AllPosts = gql`
  query post {
    allPosts {
      _id
      title
      description
      updatedAt
      createdAt
    }
  }
`;

export const GetPost = gql`
  query fetchPost($data: PostByIdInput!) {
    getPost(data: $data) {
      _id
      title
      description
      updatedAt
      createdAt
    }
  }
`;

export const getPosts = async () => {
  const { data } = await client.query({
    query: AllPosts,
  });

  return data.allPosts;
};

export const getPost = async (_id: string) => {
  const { data } = await client.query({
    query: GetPost,
    variables: {
      data: { _id },
    },
  });

  return data.getPost;
};
