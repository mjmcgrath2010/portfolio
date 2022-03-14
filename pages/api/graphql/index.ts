import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import type { PageConfig } from "next";
import { buildSchema } from "type-graphql";
import PostsResolver from "@graphql-server/resolvers/Posts";

// disable next js from handling this route
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  schema: await buildSchema({
    resolvers: [PostsResolver],
  }),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

await apolloServer.start();

export default apolloServer.createHandler({ path: "/api/graphql" });
