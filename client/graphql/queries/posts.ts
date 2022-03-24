import { gql } from "@apollo/client";
import client from "@gql/client";

export const getPosts = async () => {
  const { data } = await client.query({
    query: gql`
      query Posts {
        allPosts {
          _id
          title
          description
          updatedAt
          createdAt
        }
      }
    `,
  });

  return data.allPosts;
};
