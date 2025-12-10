// src/app/api/auth/[...nextauth]/route.ts
import { connectMongo } from "@/lib/mongo";
import User from "@/models/User";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
            profile(profile) {
                return {
                    id: profile.id.toString(),
                    name: profile.name,
                    email: profile.email,
                    image: profile.avatar_url,
                    github_user_name: profile.login,
                    github_url: profile.html_url,
                    location: profile.location,
                };
            }
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token }) {
            return token;
        },
        async session({ session, }) {
            return session;
        },
        async signIn({ user }) {
            try {
                await connectMongo();
                const existingUser = await User.findOne({ email: user.email }).lean();
                if (!existingUser) {
                    const newUser = new User({ ...user, github_id: user.id });
                    await newUser.save();
                }
                return true;
            } catch (error) {
                console.log(error)
                return false;
            }

        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
