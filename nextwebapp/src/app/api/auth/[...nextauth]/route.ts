// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, profile }) {
            if (profile) {
                token.githubUsername = (profile as any).login;
            }
            return token;
        },

        async session({ session, token }) {
            session.user.githubUsername = token.githubUsername as string;
            return session;
        },
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
