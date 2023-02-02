import NextAuth, { RequestInternal, User } from "next-auth";
import { randomBytes, randomUUID } from "crypto";
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        },
      },
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Usuário", type: "text", placeholder: "exemplo@email.com" },
        password: { label: "Senha", type: "password", placeholder: "senha" }
      },
      authorize: async function (credentials: Record<"username" | "password", string> | undefined, req: Pick<RequestInternal, "headers" | "body" | "query" | "method">) {
        const { username: email, password } = credentials as { username: string; password: string; };
        
        const res = await fetch("http://localhost:3000/api/user/login", {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" }
        });

        const user = await res.json();

        console.log(user)

        if (!user) {
          return null;
        }

        return user;
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  session: {
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 4 * 60 * 60,
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }
  }
});
