// lib/auth.ts
import { serialize } from "cookie";
import type { JwtPayload } from "jsonwebtoken";
import { signAccessToken, verifyAccessToken } from "./jwt";

const ACCESS_NAME = "token";

// create httpOnly access cookie
export function createAccessCookie(token: string) {
    return serialize(ACCESS_NAME, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 15, // 15 minutes
    });
}

export function clearAccessCookie() {
    return serialize(ACCESS_NAME, "", {
        httpOnly: true,
        path: "/",
        maxAge: 0,
    });
}

// parse token from raw cookie header string (server side)
export function parseAccessTokenFromCookieHeader(cookieHeader: string | null) {
    if (!cookieHeader) return null;
    const parts = cookieHeader.split(";").map(p => p.trim());
    const found = parts.find(p => p.startsWith(`${ACCESS_NAME}=`));
    return found ? found.split("=")[1] : null;
}

// demo validator - replace with DB check
export async function validateUser(email: string, password: string) {
    if (email === "demo@example.com" && password === "password") {
        return { id: "user_1", email: "demo@example.com", name: "Demo User", role: "user" };
    }
    return null;
}
