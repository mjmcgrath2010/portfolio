import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import connectDb from "@server/db/config";
import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const db = connectDb().client;
  const options: NextAuthOptions = {
    adapter: MongoDBAdapter(db),
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

    logger: {
      error(code, metadata) {
        console.error("$$$$$$$$$$", code, metadata);
      },
      warn(code) {
        console.warn("$$$$$$$$$$", code);
      },
    },
  };

  return NextAuth(req, res, options);
}

export default handler;
