import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: new HttpLink({
    uri: `${process.env.NEXTAUTH_URL}/api/graphql`,
    fetch,
    fetchOptions: {
      mode: "cors",
    },
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});

export default client;
