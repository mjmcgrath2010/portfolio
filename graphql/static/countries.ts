import { gql } from "@apollo/client";
import client from "@graphql-client/apollo-client";

export const getCountries = async () => {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return data.countries.slice(0, 20);
};
