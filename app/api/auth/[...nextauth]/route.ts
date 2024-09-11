import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import GoogleProvider from "next-auth/providers/google";
import { prismaClient } from "@/app/lib/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn(params) {
      console.log(params);
      try {
        await prismaClient.user.create({
          data: {
            email: "",
            provider: "Google",
          },
        });
      } catch (error) {}
      return true;
    },
  },
});

export { handler as GET, handler as POST };
