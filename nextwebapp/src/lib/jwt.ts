// lib/jwt.ts
import jwt, { JwtPayload } from "jsonwebtoken";


const ACCESS_SECRET = process.env.JWT_SECRET!;
console.log(ACCESS_SECRET, 'secret');

export function signAccessToken(payload: object) {
    return jwt.sign(payload, ACCESS_SECRET, { expiresIn: "15m" });
}

export function verifyAccessToken(token: string): JwtPayload {
    return jwt.verify(token, ACCESS_SECRET) as JwtPayload;
}