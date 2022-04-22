import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import type { NextApiRequest, PageConfig } from "next";
import { AuthChecker, buildSchema, ResolverData } from "type-graphql";
import PostsResolver from "@gql/server/resolvers/Posts";
import TagsResolver from '@gql/server/resolvers/Tag';
// RESOLVER IMPORTS

import connectDb from "@server/db/config/index";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "@server/graphql/scalars/ObjectId";
import { TypegooseMiddleware } from "@server/graphql/middleware/typegoose";
import { getSession } from "next-auth/react";
import { User } from "next-auth";
import { ContextType } from "react";

// disable next js from handling this route
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

interface APIRequest extends NextApiRequest {
  method: string;
  user: object | undefined;
}

const allowCors =
  (fn: any) =>
  async (
    req: APIRequest,
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
    const session = await getSession({ req });
    req.user = session?.user;
    return await fn(req, res);
  };

const startServer = async () => {
  const customAuthChecker: AuthChecker<any> = ({ context }) => {
    return !!context.user;
  };
  try {
    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [
          PostsResolver,
          	TagsResolver,
// RESOLVER ARRAY
        ],
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
        globalMiddlewares: [TypegooseMiddleware],
        authChecker: customAuthChecker,
      }),
      context: async ({ req }) => {
        try {
          const { user } = req;
          const db = connectDb();

          return { db, user };
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
