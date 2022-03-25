import { gql } from "@apollo/client";
import client from "@gql/client";

export const AllPosts = gql`
  query Posts {
    allPosts {
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
