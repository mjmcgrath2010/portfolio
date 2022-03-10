import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import type { PageConfig } from "next";
import { buildSchema } from "type-graphql";
import { HelloWorldResolver } from "@graphql/resolvers/HelloWorldResolver";

// disable next js from handling this route
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  schema: await buildSchema({
    resolvers: [HelloWorldResolver],
  }),
});

await apolloServer.start();

export default apolloServer.createHandler({ path: "/api/graphql" });
