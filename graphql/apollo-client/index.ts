import fetch from "cross-fetch";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://countries.trevorblades.com", fetch }),
  cache: new InMemoryCache(),
});

export default client;
