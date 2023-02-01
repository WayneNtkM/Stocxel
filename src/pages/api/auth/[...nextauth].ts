import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../backend/lib/mongodb";
import { randomBytes, randomUUID } from "crypto";
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: '31528317457-g0ic4nuk1hjadv7tn39aha6d5hodgm3e.apps.googleusercontent.com',
      clientSecret: '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',
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        },
      },
    }),
  ],
  debug: true,
  session: {
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 4 * 60 * 60,
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }
  }
});
