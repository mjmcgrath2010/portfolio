import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import type { PageConfig } from "next";
import { buildSchema } from "type-graphql";
import PostsResolver from "@graphql-server/resolvers/Posts";
import { MongoClient } from "mongodb";

// disable next js from handling this route
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

let db;

const apolloServer = new ApolloServer({
  schema: await buildSchema({
    resolvers: [PostsResolver],
  }),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(`${process.env.DB_URL}`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        await dbClient.connect();
        db = dbClient.db("next-graphql"); // database name
        return { db };
      } catch (e) {
        console.log("--->error while connecting with graphql context (db)", e);
      }
    }
  },
});

await apolloServer.start();

export default apolloServer.createHandler({ path: "/api/graphql" });
