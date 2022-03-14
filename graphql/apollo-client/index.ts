import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: `${process.env.BASE_URL}/api/graphql` }),
  cache: new InMemoryCache(),
});

export default client;
