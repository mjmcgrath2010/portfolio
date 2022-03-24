import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";
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

const allowCors =
  (fn: any) =>
  async (
    req: { method: string },
    res: {
      setHeader: (arg0: string, arg1: string | boolean) => void;
      status: (arg0: number) => {
        (): any;
        new (): any;
        end: { (): void; new (): any };
      };
    }
  ) => {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
    return await fn(req, res);
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
    const handler = apolloServer.createHandler({
      path: "/api/graphql",
    });

    return allowCors(handler);
  } catch (err) {
    return Promise.reject(err);
  }
};

export default await startServer();
