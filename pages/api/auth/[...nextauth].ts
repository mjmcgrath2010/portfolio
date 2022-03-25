import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import connectDb from "@server/db/config";

const db = connectDb().client;

export default NextAuth({
  adapter: MongoDBAdapter(db),
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
    // ...add more providers here
  ],
});
