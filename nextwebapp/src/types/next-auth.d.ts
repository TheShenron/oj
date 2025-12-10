import { DefaultSession } from "next-auth";

// declare module "next-auth" {
//     interface Session {
//         user: {
//             githubUsername?: string;
//         } & DefaultSession["user"];
//     }
// }
// declare module "next-auth/jwt" {
//     interface JWT {
//         githubUsername?: string;
//     }
// }
// declare module "next-auth" {
//     interface Profile {
//         github_user_name?: string;
//         github_url?: string;
//         github_id?: string;
//         location?: string;
//     }
// }