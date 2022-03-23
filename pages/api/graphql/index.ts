import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import type { PageConfig } from "next";
import { buildSchema } from "type-graphql";
import PostsResolver from "@graphql/server/resolvers/Posts";
import UsersResolver from "@graphql/server/resolvers/User";
// RESOLVER IMPORTS
import connectDb from "@server/db/config/index";

import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "@server/graphql/scalars/ObjectId";
import { TypegooseMiddleware } from "@server/graphql/middleware/typegoose";

// disable next js from handling this route
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const startServer = async () => {
  try {
    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [
          PostsResolver,
          UsersResolver,
          // RESOLVER ARRAY
        ],
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
        globalMiddlewares: [TypegooseMiddleware],
      }),
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
      context: async () => {
        try {
          const db = await connectDb();
          return { db };
        } catch (e) {
          console.log(
            "--->error while connecting with graphql context (db)",
            e
          );
        }
      },
    });
    await apolloServer.start();
    return apolloServer.createHandler({ path: "/api/graphql" });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default await startServer();
