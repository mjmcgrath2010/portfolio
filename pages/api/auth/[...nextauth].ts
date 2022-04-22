import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import connectDb from "@server/db/config";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const options: NextAuthOptions = {
    adapter: await connectDb().client,
    callbacks: {
      async session({ session, token, user }) {
        return session;
      },
    },
    providers: [
      GoogleProvider({
        clientId: `${process.env.GOOGLE_CLIENT_ID}`,
        clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
      }),
      // ...add more providers here
    ],
    theme: {
      colorScheme: "light",
      logo: "/assets/branding/logo.svg",
    },
  };

  return NextAuth(req, res, options);
}

export default handler;
