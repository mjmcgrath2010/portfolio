import { gql } from "@apollo/client";
import client from "@graphql/client/apollo-client";

export const getPosts = async () => {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          _id
          title
          description
        }
      }
    `,
  });

  return data.posts;
};
